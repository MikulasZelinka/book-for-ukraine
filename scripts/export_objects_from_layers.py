import json
from pathlib import Path

import PIL
from psd_tools import PSDImage
from tqdm import tqdm

psd = PSDImage.open(r'E:\code\svitej\public\resources\in\vitej_a_pojd_si_povidat_web_02.psd')

IMAGE_TO_AUDIO_NAME = {
    'kyticky': 'kviti',
    'ptacek': 'sykorka',
    'prarodice': 'pejskari',
}

layers = {}


def get_all_layers(root):
    for layer in root:
        if layer.kind == 'smartobject' or layer.kind == 'pixel':
            layer.name = rename_layer(layer.name)
            print(f'Layer: {layer.name}')
            layers[layer.name] = layer
        elif layer.kind == 'group':
            print(f'Group: {layer.name}')
            get_all_layers(layer)


def rename_layer(name):
    name = name.split('_')[0]
    if name in IMAGE_TO_AUDIO_NAME:
        name = IMAGE_TO_AUDIO_NAME[name]
    return name


def to_percent(ratio):
    return f'{ratio * 100:.1f}'


def export_layers(background_layer, path: Path, target_width=0, target_height=0):
    """
    Exports each layer as an image, and export a json with all layer metadata:
        - name
        - page: single page, calculated using the layer parent and its relative positions
        - bounding box: [x1, y1, x2, y2], where [x1, y1] is the top-left corner, [x2, y2] is the bottom right corner
    """
    canvas_width, canvas_height = background_layer.size
    page_width = canvas_width // 2

    scale_down_factor = 0
    if target_width:
        scale_down_factor = canvas_width / target_width

    if target_height:
        scale_down_factor = max(scale_down_factor, canvas_height / target_height)

    if scale_down_factor:
        print(f'Will scale down by a factor of {scale_down_factor:.2f}, {1 / scale_down_factor:.2f} magnification')
        print(
            f'Resulting background dimensions:'
            f' {round(canvas_width / scale_down_factor)}'
            f'x{round(canvas_height / scale_down_factor)}'
        )

    layer_dict = {}

    for layer in tqdm(layers.values()):

        page = None
        if layer.parent and layer.parent.kind == 'group':
            pages = layer.parent.name.split()[1].split('-')
            if len(pages) == 1:
                page = int(pages[0])
            elif len(pages) == 2:
                if layer.offset[0] > page_width:
                    page = int(pages[1])
                else:
                    page = int(pages[0])
            else:
                raise ValueError(f'Layer {layer} has invalid group page name: {layer.parent.name}')

        left, top = layer.offset
        if left > page_width:
            left -= page_width
        layer_dict[layer.name] = {
            'page': page,
            'top': to_percent(top / canvas_height),
            'left': to_percent(left / page_width),
            'width': to_percent(layer.width / page_width),
            # 'left': ,
            # 'width': ,
            # 'bbox': list(layer.bbox),
        }

        layer_image = layer.topil()
        if scale_down_factor:
            layer_image = layer_image.resize([
                round(layer_image.width / scale_down_factor), round(layer_image.height / scale_down_factor)
            ], PIL.Image.ANTIALIAS)

        if layer.name != 'pozadi':
            layer_image.save(path / 'images' / f'{layer.name}.png')
        else:
            # Background is the only layer we want to save as a jpg (as it doesn't have transparency)
            if layer_image.mode == 'RGBA':
                layer_image = layer_image.convert('RGB')

            width, height = layer_image.size
            half_width = width // 2

            layer_image.crop((0, 0, half_width, height)).save(path / 'images' / f'{layer.name}_0.jpg',
                                                              quality=60)
            layer_image.crop((half_width, 0, width, height)).save(path / 'images' / f'{layer.name}_1.jpg',
                                                                  quality=60)

    with open(path / 'objects.json', 'w') as f:
        json.dump(layer_dict, f, sort_keys=True, indent=4)


get_all_layers(psd)

print(len(layers))
print(layers)

print(sorted(layers.keys()))

export_layers(
    layers['pozadi'],
    path=Path(r'E:\code\svitej\public\resources'),
    target_width=720 * 2,  # target 720 for a single page
)


