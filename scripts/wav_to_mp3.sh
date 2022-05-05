#!/usr/bin/env bash


cd /mnt/e/code/svitej/public/resources/audio
for f in *.WAV; do ffmpeg -i "$f" -vn -ar 44100 -ac 2 -q:a 2 "${f%.*}.mp3"; done