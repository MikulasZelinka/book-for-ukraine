#!/usr/bin/env bash 

mv vitej_a_pojd_si_povidat_web_10-11.jpg z.jpg
page=0
for image in $(ls *.jpg)
do
	convert -crop 50%x100% ${image} %d.jpg
	mv 0.jpg split/${page}.jpg
	page=$((page+1))
	mv 1.jpg split/${page}.jpg
	page=$((page+1))
done
