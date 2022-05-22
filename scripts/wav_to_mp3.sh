#!/usr/bin/env bash

IN=/mnt/e/code/svitej/public/resources/in/audio
OUT=/mnt/e/code/svitej/public/resources/audio

mkdir -p "$OUT"/cs
mkdir -p "$OUT"/uk

cd "$IN"/cs
for f in *.wav; do ffmpeg -i "$f" -vn -ar 44100 -ac 2 -q:a 2 "$OUT"/cs/"${f%.*}.mp3"; done

cd "$IN"/ua
for f in *.wav; do ffmpeg -i "$f" -vn -ar 44100 -ac 2 -q:a 2 "$OUT"/uk/"${f%.*}.mp3"; done

# add the 'cs' prefix
cd "$OUT"/cs
mmv '*' 'cs_#1'

cd "$OUT"/uk
# remove alternate takes
rm *[0-9]\.*
# rename the 'ua ' prefix
mmv 'ua *' 'uk_#1'