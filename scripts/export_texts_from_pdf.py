"""
https://stackoverflow.com/questions/22898145/how-to-export-text-and-text-coordinates-from-a-pdf-filepdf
"""
import json
from pathlib import Path
from pprint import pprint
from typing import Iterable, Any

import pandas as pd
from pdfminer.high_level import extract_pages
from pdfminer.layout import LTTextBoxHorizontal, LTPage, LTFigure

from export_images_from_layers import to_percent


def load_translations(
        path=Path(r'E:\code\svitej\public\resources\in\Překlady básniček – Povídání modro-žluté krajiny - Sheet1.csv')
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

    for _, row in df.iterrows():
        for l in langs:
            text_to_id_lang[row[f'translation_{l}']] = {'lang': l, 'name': row['ID']}

    return text_to_id_lang


def ratio_from_offset(original_position, offset, max_length, return_string=True):
    ratio = (original_position - offset) / max_length
    if return_string:
        return to_percent(ratio)
    return ratio


def export_texts_from_pdf(o: Any, text_to_id_lang, texts, depth=0):
    """Show location and text of LTItem and all its descendants"""

    page = -1
    page_image = None

    if isinstance(o, Iterable):
        for i in o:
            export_texts_from_pdf(i, text_to_id_lang, texts, depth=depth + 1)

            image_width = None
            image_height = None

            # y-coords are swapped here, we need to reverse them
            page_height = None

            if type(o) == LTPage:
                page = o.pageid
                page_height = o.width

                page_images = [x for x in o if type(x) == LTFigure and x.name == 'Im0']
                if len(page_images) != 1:
                    raise ValueError(f"Page {o} doesn't have one figure, instead has {page_images}")
                page_image = page_images[0]

                image_width = page_image.width / 2
                image_height = page_image.height

            if type(i) == LTTextBoxHorizontal:
                lines = [''.join(x._text for x in line._objs).strip() for line in i._objs]
                text = '\n'.join(lines)

                is_right = ratio_from_offset(
                    i.x0, offset=page_image.x0, max_length=page_image.width, return_string=False
                ) >= 0.5
                page_index_offset = 1 if is_right else 0
                page_current = ((page - 1) * 2) + page_index_offset

                # We skip the title (page 1) or the last page (page 0)
                if page_current < 2:
                    continue

                if text not in text_to_id_lang:
                    raise ValueError(f'Text {text} not found in {text_to_id_lang}')

                name = text_to_id_lang[text]['name']
                lang = text_to_id_lang[text]['lang']

                if name not in texts:
                    texts[name] = {'positions': [], 'translations': {}}

                texts[name]['page'] = page_current
                texts[name]['translations'][lang] = text

                # cs is first, ua is second
                texts[name]['positions'].insert(0 if lang == 'cs' else 1, {
                    'top': ratio_from_offset(
                        page_height - i.y1, offset=page_height - page_image.y1, max_length=image_height
                    ),
                    'left': ratio_from_offset(
                        i.x0, offset=page_image.x0 + (image_width if is_right else 0), max_length=image_width)
                    ,
                    'width': ratio_from_offset(i.x1 - i.x0, offset=0, max_length=image_width),
                    'height': ratio_from_offset(i.y1 - i.y0, offset=0, max_length=image_height),

                })


if __name__ == '__main__':
    path = Path(r'E:\code\svitej\public\resources\in\VitejApojdSiPovidatV04.pdf')
    pages = extract_pages(path)

    text_to_id_lang = load_translations()

    texts = {}
    export_texts_from_pdf(pages, text_to_id_lang, texts)
    pprint(texts)
    print(len(texts))

    with open(Path(r'E:\code\svitej\public\resources') / 'in' / 'texts.json', 'w', encoding='utf8') as f:
        json.dump(texts, f, ensure_ascii=False, sort_keys=True, indent=4)
