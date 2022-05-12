# Workflow

Unfortunately it isn't trivial to compile all of the assets into a working audio book.

Here we describe the process of ingesting all resources (audio, images, text) and producing
the final working audio book.

TL;DR (if you `cd` into this directory):

```shell
bash wav_to_mp3.sh
python export_images_from_layers.py
python export_texts_from_pdf.py
python create_pages_from_texts_images.py
```

This will (hopefully) populate [`resources`](../public/resources) with all the required final assets.

## Prerequisites

The [`resources/in`](../public/resources/in) folder should contain:

### Texts

- `Překlady básniček – Povídání modro-žluté krajiny - Sheet1.csv`
  - All translated texts
  - Source: exported from the [main spreadsheet](https://docs.google.com/spreadsheets/d/1Gb0XqligJd2rXgUbyGpjv3FkJ4oXwpma8pFi9hiwHqY/edit#gid=0) as CSV

#### Text positions

- `VitejApojdSiPovidatV04.pdf`
  - Typeset text positions, exported from InDesign to PDF
  - Source: typesetter shares the file manually


### Audio

- `audio/{lang}/{lang}_{name.WAV}`
  - for all supported languages in `lang`
    - for all book entities `name`
  - Source: [Nahrávky in Google Drive](https://drive.google.com/drive/u/0/folders/1ZX27BcAXhQlOexnOGqqE3us0DAQCJGka)

### Images

- `VitejApojdSiPovidatV04.psd`
  - Single Photoshop file containing all book entities as layers
    - Except for `jelen` and `srnka` which we first manually merge into one `srnka` layer in Photoshop
  - Source: graphic designer shares the file manually