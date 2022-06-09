import json
from collections import defaultdict
from pathlib import Path


def add_objects_to_pages(
        base_path=Path(r'E:\code\book-for-ukraine\static'),
):
    with open(base_path / 'in' / 'images.json') as f:
        images = json.load(f)

    with open(base_path / 'in' / 'texts.json', encoding='utf8') as f:
        texts = json.load(f)

    # pages = defaultdict(lambda: dict)
    pages = defaultdict(lambda: defaultdict(lambda: defaultdict(dict)))

    # Make sure page 0 is present (doesn't have any texts or images but we want to display it with annotation)
    pages[0] = defaultdict(dict)

    for image_name, image_dict in images.items():
        pages[image_dict['page']]['stories'][image_name]['position_image'] = {
            'top': image_dict['top'],
            'left': image_dict['left'],
            'width': image_dict['width'],
        }

    for text_name, text_dict in texts.items():
        pages[text_dict['page']]['stories'][text_name]['translations'] = [
            {'lang': lang, 'texts': text}
            for lang, text in text_dict['translations'].items()
        ]
        pages[text_dict['page']]['stories'][text_name]['positions_text'] = text_dict['positions']
        pages[text_dict['page']]['stories'][text_name]['text_align'] = text_dict['align']

    # Finally, we convert the dicts to lists as Svelte doesn't support {#each} for dicts (objects), only arrays
    pages_list = []
    for page in sorted(pages):
        p = pages[page]
        p['number'] = page

        # Also convert stories in the same way
        # stories = [v for name, v in p['stories'].items()]

        p['stories'] = [(v | {'name': name}) for name, v in p['stories'].items()]

        pages_list.append(p)

    with open(base_path / 'pages.json', 'w', encoding='utf8') as f:
        json.dump(pages_list, f, ensure_ascii=False, indent=4, sort_keys=True)


if __name__ == '__main__':
    add_objects_to_pages()
