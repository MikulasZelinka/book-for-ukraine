# Svítej

Svítej\*, an open-source implementation of the Czech-Ukrainian book for children: [Povídání modro-žluté krajiny](https://pointa.cz/project/d323a733-b37c-11ec-a145-0242ac120006).

Available to browse for free: https://ukrajinskaknizka.cz

More broadly, you could use to project to implement a web-based book with playable text recordings.

\* _Originally,_ Vítej a pojď si povídat _combined with_ Svelte → Svítej.

## TODO

### Issues

These are urgent bugs or known issues. Other categories below are missing features.

- [ ] Properly load and use the correct (Ubuntu) font.
  - [x] Temporarily using `Open Sans` instead as it's variable and can animate font weight
        (until we have another playing indicator)

### Fixed issues

- [x] Align texts according to the typeset version.
- [x] z-index issue
  - Nevermind, `z-index` worked, but only non-negative values
  - ~Background now sometimes covers objects (rainbow cloud)~
  - Text should be in the foreground (above objects)
  - ~Simply setting `z-index` doesn't seem to help :(~

### Settings

- [ ] Reorder languages (implemented earlier, currently disabled)
  - [ ] If we have more languages: allow disabling some languages
  - [ ] Alternatively, replace by [always selecting two languages](#Languages)
- [x] Autoplay
  - [ ] More options: one/many languages, one/many pages
- [ ] Playback speed
- [ ] Playback volume
- [ ] Wait time between paragraphs/pages
- [ ] Persist/cache settings
- [ ] Allow alphabet conversions

### Reading flow

- [ ] Pagination, page jumping
- [ ] Playback across pages, with smooth jumps

### Presentation

- [x] Better UI in general (navbar, ...)
  - [ ] Now make it even better
- [ ] Equalise volume across languages (for example, `cs` is currently louder than `ua`)
- [x] Inform about landscape mode on mobile
  - Solved by displaying single pages on mobile and two facing pages on desktop
- [ ] Object animations
  - [x] Simple wiggle on hover/click
  - [ ] Temporarily animate/pop text and image to foreground
- [x] Cursor pointer on clickable text/images
- [ ] Also play the text in a selected language on image click in addition to text click

### Languages

- [ ] Generalise the website into multiple localisations (info/settings/... – not the actual book texts)
- [ ] Instead of arbitrary ordering, always select just two languages (and thus get their order implicitly)
- [ ] Auto translation
- [ ] Auto TTS

### Tech debt

- [x] Proper typescriptification, including introducing types for the data structures loaded from jsons
  - This would be very helpful for development as it would give us type hints among many other things
  - Done at least partially for our custom types

### Loading times

- [ ] Optimise sizes of:
  - [ ] Images
  - [ ] Audio
  - [ ] Other resources (JSON files, ...)

### SEO optimalisation

- [ ] TODO

## Webdevlog

### 2022-05-13

Fixed problems with computed text boxes not matching the physical (typeset) version.
The problem was caused by ingesting PSD (images, background) and PDF (texts) that had different backgrounds.

The [text export script](./scripts/export_texts_from_pdf.py) now handles additional cuts (offsets) of the page.

### 2022-05-12

For the past couple of days, it was just refactoring and then refactoring the refactoring (and then some more).

The result is now the website looks identical, but we automatically parse all input assets (including typeset texts, audio and images)
to produce the final working website (see [scripts](./scripts)).

Also I've finally introduced at least [some types](./scr/types) and changed the object hierarchy of the main `pages.json`
to make it easier to work with in Svelte (basically, each collection is now an array, rather than a dictionary).

### 2022-05-08

General effort to make the website (navigation, menu, footer) look decent and be up-to-date.
More work is still necessary.

### 2022-05-07

Major update: I've separated foreground objects from background using a [python script](scripts/export_images_from_layers.py)
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
