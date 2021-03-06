"""
https://stackoverflow.com/questions/22898145/how-to-export-text-and-text-coordinates-from-a-pdf-filepdf
"""
import json
from collections import defaultdict
from pathlib import Path
from pprint import pprint
from typing import Iterable, Any

import pandas as pd
from PIL import Image
from PIL.ImageDraw import ImageDraw
from pdfminer.high_level import extract_pages
from pdfminer.layout import LTTextBoxHorizontal, LTPage, LTFigure

from cs_uk_transliteration import cs_to_uk, uk_to_cs
from export_images_from_layers import to_percent


def load_translations(
        path=Path(
            r'E:\code\book-for-ukraine\static\in\Překlady textů a webu – Povídání modro-žluté krajiny - Dvojverší.csv')
):
    """
    Data source:
        https://docs.google.com/spreadsheets/d/1Gb0XqligJd2rXgUbyGpjv3FkJ4oXwpma8pFi9hiwHqY/edit#gid=0
        (exported as csv)
    """
    # df = pd.read_csv(path, sep='\t')
    df = pd.read_csv(path)

    langs = [x.split('_')[1] for x in df.columns if x.startswith('translation_')]

    text_to_id_lang = {}
    id_to_align = {}

    for _, row in df.iterrows():
        id_to_align[row['ID']] = row['align']
        for l in langs:
            text_to_id_lang[row[f'translation_{l}']] = {'lang': l, 'name': row['ID'], 'align': row['align']}

    return text_to_id_lang, id_to_align


def export_texts_from_pdf(o: Any, text_to_id_lang, id_to_align, texts, images, depth=0):
    """Show location and text of LTItem and all its descendants"""

    # 2x A5 = 2 * 148 = 296, one less than A4 (297)
    width_after_cut = 296
    height_after_cut = 210

    # cuts = {'left': 3, 'right': 3, 'top': 9.6, 'bottom': 3}
    cuts = {'left': 2.033, 'right': 2.086, 'top': 5.869, 'bottom': 2.462}

    width_before_cut = cuts['left'] + width_after_cut + cuts['right']
    height_before_cut = cuts['top'] + height_after_cut + cuts['bottom']

    # assert width_before_cut == 306
    assert width_before_cut == 300.119
    # assert height_before_cut == 222.6
    assert height_before_cut == 218.331

    to_readd_pct = {direction: cut_value / (width_after_cut if direction in ('left', 'right') else height_after_cut)
                    for direction, cut_value in cuts.items()}

    if images is None:
        images = {}

    page = -1
    page_image = None

    if isinstance(o, Iterable):
        for i in o:
            export_texts_from_pdf(i, text_to_id_lang, id_to_align, texts, images, depth=depth + 1)

            image_width = None
            image_height = None

            if type(o) == LTPage:
                page = o.pageid

                # We skip the title (page 1) and the last page (page 7)
                if page in (1, 7):
                    continue

                page_images = [x for x in o if type(x) == LTFigure and x.name == 'Im0']
                if len(page_images) != 1:
                    raise ValueError(f"Page {o} doesn't have one figure, instead has {page_images}")
                page_image = page_images[0]

                fixed_width = page_image.width + (page_image.width * (to_readd_pct['left'] + to_readd_pct['right']))
                fixed_height = page_image.height + (page_image.height * (to_readd_pct['top'] + to_readd_pct['bottom']))

                image_width = fixed_width / 2
                image_height = fixed_height

            if type(i) == LTTextBoxHorizontal:
                lines = [''.join(x._text for x in line._objs).strip() for line in i._objs]
                text = '\n'.join(lines)

                # no need to fix offset/sizes (consider fixed_*) here as left and right margins are identical
                is_right = i.x0 >= (page_image.width / 2)
                page_index_offset = 1 if is_right else 0
                page_current = ((page - 1) * 2) + page_index_offset

                if text not in text_to_id_lang:
                    raise ValueError(f'Text {text} not found in {text_to_id_lang}')

                name = text_to_id_lang[text]['name']
                lang = text_to_id_lang[text]['lang']

                if name not in texts:
                    texts[name] = {'positions': [], 'translations': defaultdict(dict)}

                texts[name]['page'] = page_current
                texts[name]['align'] = id_to_align[name]


                script = 'cyrillic' if lang == 'uk' else 'latin'

                texts[name]['translations'][lang][script] = text
                if script == 'cyrillic':
                    texts[name]['translations'][lang]['latin'] = uk_to_cs(text)
                else:
                    texts[name]['translations'][lang]['cyrillic'] = cs_to_uk(text)

                texts[name]['translations'][lang]['align'] = text_to_id_lang[text]['align']

                top = (page_image.y1 + (to_readd_pct['top'] * page_image.height) - i.y1) / image_height
                left = (i.x0 - (page_image.x0 + (to_readd_pct['left'] * page_image.width / 2)) - (
                    image_width if is_right else 0
                )) / image_width

                width = (i.x1 - i.x0) / image_width
                height = (i.y1 - i.y0) / image_height

                # cs is first, ua is second
                texts[name]['positions'].insert(0 if lang == 'cs' else 1, {
                    'top': to_percent(top),
                    'left': to_percent(left),
                    'width': to_percent(width),
                    'height': to_percent(height),
                })

                # Drawing rectangle outlines for debugging purposes
                if page_current not in images:
                    images[page_current] = Image.new('RGBA', (round(image_width), round(image_height)))
                    draw = ImageDraw(images[page_current])
                    draw.rectangle((
                        0,
                        0,
                        image_width - 1,
                        image_height - 1,
                    ), width=1, outline="#ffffff")
                draw = ImageDraw(images[page_current])
                draw.rectangle((
                    left * image_width,
                    top * image_height,
                    (left + width) * image_width,
                    (top + height) * image_height,
                ), width=1, outline="#ffffff")


if __name__ == '__main__':
    path = Path(r'E:\code\book-for-ukraine\static\in\UKAJINsKA KNIZKA_dvoustrany.pdf')
    pages = extract_pages(path)

    text_to_id_lang, id_to_align = load_translations()

    texts = {}
    images = {}
    export_texts_from_pdf(pages, text_to_id_lang, id_to_align, texts, images)
    pprint(texts)
    print(len(texts))

    with open(Path(r'E:\code\book-for-ukraine\static') / 'in' / 'texts.json', 'w', encoding='utf8') as f:
        json.dump(texts, f, ensure_ascii=False, sort_keys=True, indent=4)

    for page, image in images.items():
        image.save(Path(r'E:\code\book-for-ukraine\static') / 'in' / f'page_{page:02d}.png')
