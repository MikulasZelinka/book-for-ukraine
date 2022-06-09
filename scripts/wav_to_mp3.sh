#!/usr/bin/env bash

IN=/mnt/e/code/book-for-ukraine/static/in/audio
OUT=/mnt/e/code/book-for-ukraine/static/audio

mkdir -p "$OUT"/cs
mkdir -p "$OUT"/uk

cd "$IN"/cs
for f in *.wav; do ffmpeg -i "$f" -vn -ar 44100 -ac 2 -q:a 2 "$OUT"/cs/"${f%.*}.mp3"; done

cd "$IN"/uk
for f in *.wav; do ffmpeg -i "$f" -vn -ar 44100 -ac 2 -q:a 2 "$OUT"/uk/"${f%.*}.mp3"; done

cd "$OUT"/cs
# add the 'cs' prefix
rename 's/^([a-z]+).*(\..+)$/cs_${1}${2}/' *.mp3

cd "$OUT"/uk
# add the 'uk' prefix
rename 's/^([a-z]+).*(\..+)$/uk_${1}${2}/' *.mp3
