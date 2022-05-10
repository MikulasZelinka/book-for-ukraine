import json
from pathlib import Path


def add_objects_to_pages(
        base_path=Path(r'E:\code\svitej\public\resources'),
):
    with open(base_path / 'objects.json') as f:
        objects = json.load(f)

    with open(base_path / 'pages.json', encoding='utf8') as f:
        pages = json.load(f)

    for page in pages:
        if 'objects' not in page:
            page['objects'] = []

    for object_name, object_data in objects.items():
        for page in pages:
            if object_data['page'] != page['number']:
                continue

            page['objects'].append({
                'name': object_name,
                'top': object_data['top'],
                'left': object_data['left'],
                'width': object_data['width'],
            })

    with open(base_path / 'pages_with_objects.json', 'w', encoding='utf8') as f:

        json.dump(pages, f, ensure_ascii=False, indent=4, sort_keys=False)


add_objects_to_pages()
