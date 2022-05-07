#!/usr/bin/env bash

IN=/mnt/e/code/svitej/public/resources/in/audio
OUT=/mnt/e/code/svitej/public/resources/audio

mkdir -p "$OUT"/cs
mkdir -p "$OUT"/ua

cd "$IN"/cs
for f in *.WAV; do ffmpeg -i "$f" -vn -ar 44100 -ac 2 -q:a 2 "$OUT"/cs/"${f%.*}.mp3"; done

cd "$IN"/ua
for f in *.WAV; do ffmpeg -i "$f" -vn -ar 44100 -ac 2 -q:a 2 "$OUT"/ua/"${f%.*}.mp3"; done

# add the 'cs' prefix
cd "$OUT"/cs
mmv '*' 'cs_#1'

cd "$OUT"/ua
# remove alternate takes
rm *[0-9]\.*
# rename the 'ua ' prefix
mmv 'ua *' 'ua_#1'