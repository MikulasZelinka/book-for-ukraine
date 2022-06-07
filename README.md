# [Book for Ukraine](https://ukrajinskaknizka.cz)

An open-source implementation of the Czech-Ukrainian book for children,
[**Povídání modro-žluté krajiny**](https://ukrajinskaknizka.cz).

The book isn't available yet (work in progress!),
but the web version is available (in 🇨🇿 and 🇺🇦) to browse for free: https://ukrajinskaknizka.cz

More [languages](#languages) are soon to come.

Please, do get in touch ([create an issue!](https://github.com/MikulasZelinka/book-for-ukraine/issues/new))
if you'd like to collaborate on this project in any way, e.g.:

- help translate or record in(to) your native language,
- implement any of the [fixes or features mentioned below](#TODO) or in [Issues](https://github.com/MikulasZelinka/book-for-ukraine/issues).

In short, all forms of contribution are welcome :)
Most importantly, please do share the website with anyone
who might find it useful or enjoyable.

And more generally, feel free to adapt this project to implement any other web-based book with playable text recordings.
Ideally, this project would be decoupled from the assets and serve as a general-purpose web-audio-book toolkit but there hasn't been enough time for that yet.

## Languages

We treat the **website languages** separately from the **book languages** for multiple reasons.

The book texts require fine-grained translations and human-defined typesetting.

Currently, the following languages are supported:

### Book languages

- 🇨🇿 Čeština
- 🇺🇦 Українська

### Website languages

- 🇨🇿 Čeština
- 🇬🇧 English
- 🇺🇦 Українська

## TODO

We're slowly moving these into proper [Issues](https://github.com/MikulasZelinka/book-for-ukraine/issues).

### Settings

- [ ] Playback speed
- [ ] Playback volume
- [ ] Wait time between paragraphs/pages when autoplaying (see [Reading flow](#reading-flow))
- [ ] Persist/cache settings (states in general, including things like locale)
  - I guess this would require annoying cookie prompts, though? :(
- [x] Allow alphabet conversions (transliteration)
  - Implemented for the book texts (poems) which should be enough

### Reading flow

- [ ] Pagination, page jumping
- [x] Autoplay
  - [x] Play the following recordings in one page that follow the selected text implicitly
    - Implemented but currently disabled because it's not very user-friendly, waiting for improvements there
  - [ ] One page in one or both languages (play in a circle, not just till the implicitly last one)
  - [ ] Across pages, with smooth jumps
- [ ] Scroll/zoom to the current image/text when autoplaying

### Presentation

- [x] Better UI in general (navbar, ...)
  - [x] Now make it even better
    - Fine for now, I guess?
- [x] Equalise volume across languages (for example, `cs` is currently louder than `ua`)
- [x] Inform about landscape mode on mobile
  - Solved by displaying single pages on mobile and two facing pages on desktop
- [ ] Object animations
  - [x] Simple wiggle on hover/click
  - [ ] Temporarily animate/pop text and image to foreground
- [x] Cursor pointer on clickable text/images
- [ ] Also play the text in a selected language on image click in addition to text click
- [x] Playing indicator
  - Currently, text is slightly enlarged, is there anything better?
- [ ] Story order indicator

### Languages

- [x] Generalise the website into multiple localisations (info/settings/... – not the actual book texts)
  - [ ] Try to [load user's locale by default](https://github.com/kaisermann/svelte-i18n/blob/main/docs/Getting%20Started.md#4-initializing)
- [ ] Instead of arbitrary ordering, always select just two languages (and thus get their order implicitly)
- [x] The following are probably out of scope (user can just use their device to translate/play text in(to) whatever language they please):
  - [ ] ~Auto translation into unsupported languages~
  - [ ] ~Auto TTS of languages without audio recordings~

### Loading times

- [ ] Optimise sizes of:
  - [x] Images
  - [ ] Audio
  - [ ] Other resources (JSON files, ...)

### SEO optimalisation

- [x] `<meta name="..." content="...">`

### Tech debt

- [x] Proper typescriptification, including introducing types for the data structures loaded from jsons
  - This would be very helpful for development as it would give us type hints among many other things
  - Done at least partially for our custom types, no idea if it's `proper` in any way :)

### Fixed issues

- [x] Align texts according to the typeset version.
- [x] z-index issue
  - Nevermind, `z-index` worked, but only non-negative values
  - ~Background now sometimes covers objects (rainbow cloud)~
  - Text should be in the foreground (above objects)
  - ~Simply setting `z-index` doesn't seem to help :(~
- [x] Overflow (`duha`) when viewing two pages, but don't overflow in the single page view
- [x] Add a license (dual, MIT for code, copyright for assets)
- [x] Properly load and use the correct (Ubuntu) font.
  - [x] ~Temporarily using `Open Sans` instead as it's variable and can animate font weight (until we have another playing indicator)~

## Webdevlog

### 2022-06-07

Moving the entire webapp to [SvelteKit](https://kit.svelte.dev/).

### 2022-05-23

Thanks to the kind colleagues in Medallia's Prague branch, we now have a proper 🇺🇦 translation of the website :)

### 2022-05-22

I've shared the website in a couple of (semi-)static places and forums,
including a [reddit post about the book as a Svelte project](https://www.reddit.com/r/sveltejs/comments/uvbdbx/bilingual_book_for_ukranian_children_as_an/).

Still, there hasn't been much traffic yet (58 website visits (according to 🐐) and 4 GitHub ⭐ so far) and
noone has yet offered to help with the Ukranian website translation.

### 2022-05-20

I've added at least machine translations to Ukraine for the website.
Let's finally share the website to get some help and feedback :)

### 2022-05-19

Another major rework, this time I've added localisation support and translated the website to English.

I think the website is now ready to be pre-released (i.e., released as a preview for testing purposes) –
I've really wanted to add at least English support in order to not put everyone off immediately.

### 2022-05-16

A ton of little but impactful improvements, the website may now be actually _nice_ and pleasant to use.
The [diff speaks for itself](https://github.com/MikulasZelinka/book-for-ukraine/compare/e5b1fd3..0a216be).

The 🇨🇿 and 🇺🇦 audio files are now equalised and better cut.

One of the more interesting problems has been the rainbow cloud overflow:
since the image (and this is the only one) spans two pages, it overflowed in the single-page view.
However, setting `overflow` to `hidden` wasn't helping as the cloud would then be cut off in the two-pages view.
I've [solved the problem by dynamically computing if we see one or two columns](https://github.com/MikulasZelinka/book-for-ukraine/commit/e39a962d50a383554a8b251f9331d01ed98f710c) (pages)
and setting `overflow` based on that.
Please let me know if there's a better (e.g., pure css?) solution.

The Ubuntu font is now properly used. As it doesn't support variable weights,
we instead scale the currely playing text up a bit (10%).

I've made use of the [Lighthouse](https://developers.google.com/web/tools/lighthouse) tool to help optimise the website and find major problems.

### 2022-05-14

Finally, the [mystery of proper text scaling has been solved](https://github.com/MikulasZelinka/book-for-ukraine/commit/1b413a369f832d7c1e223224ca02e1bd2216e780)!
We simply dynamically check the column (page) width and set the `font-size` in pixels
using a [magic constant of _almost_ 42](https://github.com/MikulasZelinka/book-for-ukraine/commit/1b413a369f832d7c1e223224ca02e1bd2216e780#diff-496a5b80649ad7df34732de450b4c1160e5fd2610d6819121a01228b6ba6a9eaL96-R98).

However, this means that the text might be too small on mobile, we'll see.
Either way (as expected), it's quite difficult to be properly responsive
and I welcome any suggestions or other implementations.

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
and to also [combine the new objects json with the already existing pages json](static/).

It's ~quick and~ (well, I wish it was quick, really) dirty but it makes the job done.

As a result, the background is now only loaded once (but displayed multiple times) and objects are loaded separately.
The main advantage is we can now freely animate/click/... them independently.

We now also have a proper domain: https://ukrajinskaknizka.cz

Migrating with GitHub Pages was rather straightforward, it's basically just updating the [`CNAME`](static/CNAME).

I've registered the domain at [WEDOS](https://www.wedos.cz/) (Google domains unfortunately don't support the `.cz` TLD) and it costs cca 175 CZK per year.

### 2022-05-05

Added actual book images. Pages 2 and 3 now have both texts and recordings in both languages.

As one would expect, some minor tweaks had to be done to accomodate some unforeseen differences in asset formats but nothing too difficult.

Most importantly, the website is now responsive and displays single pages on smaller (mobile) devices
while also seamlessly displaying the two facing pages on larger screens.
Thankfully, that was extremely easy to do with the [Bulma CSS framework](https://bulma.io/) we're using.
It required basically just two lines:

- [Wrap everything in multiline, gapless `columns`](https://github.com/MikulasZelinka/book-for-ukraine/commit/a7d33016568e58d17e6f6555b0efcdf5e9721224#diff-d68daa8b73cec8e4419759802bbd91e9f87f8ee02f25cdb1d12582ef6de848dbL35-R35)
- [Wrap each (single) page in an `is-half` column](https://github.com/MikulasZelinka/book-for-ukraine/commit/a7d33016568e58d17e6f6555b0efcdf5e9721224#diff-a9e351ab57265f0d5632e5446053858bb66ab0781348bf91f5cdc230540f257aR30)

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

## License

See the [license file](LICENSE.md).
