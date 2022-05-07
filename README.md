# Svítej

Svítej\*, an open-source implementation of the Czech-Ukrainian book for children: [Povídání modro-žluté krajiny](https://pointa.cz/project/d323a733-b37c-11ec-a145-0242ac120006).

Available to browse for free: https://ukrajinskaknizka.cz

More broadly, you could use to project to implement a web-based book with playable text recordings.

\* _Originally,_ Vítej a pojď si povídat _combined with_ Svelte → Svítej.

## TODO

### Settings

- [x] Reorder languages
  - [ ] If we have more languages: allow disabling some languages
  - [ ] Alternatively, replace by [always selecting two languages](#Languages)
- [x] Autoplay
  - [ ] More options: one/many languages, one/many pages
- [ ] Playback speed
- [ ] Wait time between paragraphs/pages
- [ ] Persist/cache settings
- [ ] Allow alphabet conversions

### Reading flow

- [ ] Pagination, page jumping
- [ ] Playback across pages, with smooth jumps

### Presentation

- [ ] Better UI in general
- [x] Inform about landscape mode on mobile
  - Solved by displaying single pages on mobile and two facing pages on desktop
- [ ] Object animations
  - [x] Simple wiggle on hover/click

### Languages

- [ ] Generalise the website into multiple localisations (info/settings/... – not the actual book texts)
- [ ] Instead of arbitrary ordering, always select just two languages (and thus get their order implicitly)
- [ ] Auto translation
- [ ] Auto TTS

## Webdevlog

### 2022-05-07

Major update: I've separated foreground objects from background using a [python script](scripts/export_objects_from_layers.py)
to export all data (image data as well as their metadata) from the original PSD file
and to also [combine the new objects json with the already existing pages json](public/resources/).

It's ~quick and~ (well, I wish it was quick, really) dirty but it makes the job done.

As a result, the background is now only loaded once (but displayed multiple times) and objects are loaded separately.
The main advantage is we can now freely animate/click/... them independently.

We now also have a proper domain: https://ukrajinskaknizka.cz

Migrating with GitHub Pages was rather straightforward, it's basically just updating the [`CNAME`](public/CNAME).

I've registered the domain at [WEDOS](https://www.wedos.cz/) (Google domains unfortunately don't support the `.cz` TLD) and it costs cca 175 CZK per year.

### 2022-05-05

Added actual book images. Pages 2 and 3 now have both texts and recordings in both languages.

As one would expect, some minor tweaks had to be done to accomodate some unforeseen differences in asset formats but nothing too difficult.

Most importantly, the website is now responsive and displays single pages on smaller (mobile) devices
while also seamlessly displaying the two facing pages on larger screens.
Thankfully, that was extremely easy to do with the [Bulma CSS framework](https://bulma.io/) we're using.
It required basically just two lines:

- [Wrap everything in multiline, gapless `columns`](https://github.com/MikulasZelinka/svitej/commit/a7d33016568e58d17e6f6555b0efcdf5e9721224#diff-d68daa8b73cec8e4419759802bbd91e9f87f8ee02f25cdb1d12582ef6de848dbL35-R35)
- [Wrap each (single) page in an `is-half` column](https://github.com/MikulasZelinka/svitej/commit/a7d33016568e58d17e6f6555b0efcdf5e9721224#diff-a9e351ab57265f0d5632e5446053858bb66ab0781348bf91f5cdc230540f257aR30)

The biggest challenge that remains to be solved is text sizing.
We want it to be both easily readable as well as reasonably responsive (perhaps scaling with the image size).

Additionally, I've only now realised that the background on all pages is identical
and we could (should?) thus optimise by rendering background and foreground objects separately
(only load the background once, of course).

Another nice-to-have feature might be object animations if we end up treating them as individual objects.

### Early 2022

Functional website skeleton in Svelte.

The website can display arbitrary images, texts (their position is given in a JSON) and play an audio recording for each text.
I'm testing it using placeholder data.
We can also reorder the languages and theoretically support any number of them.

Whenever we have final assets, simply linking them should be enoug to have a functional web (audio)book :)
