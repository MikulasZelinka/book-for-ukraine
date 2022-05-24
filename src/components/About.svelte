<script>
  import { _ } from "../i18n";
</script>

<section class="section is-medium pb-3">
  <div class="content">
    <div class="columns is-desktop" style="overflow:hidden;">
      <div class="column">
        <h2 id="o-projektu">{$_("about")}</h2>

        <p>
          {$_("aboutSection.goal")}
        </p>

        <p>
          {$_("aboutSection.future")}
        </p>

        <p>
          {$_("aboutSection.support")}
        </p>
      </div>
      <div class="column">
        <h2 id="tvurci">{$_("authors")}</h2>

        <p>
          {$_("authorsSection.content")}: Tereza Axmannová, tereza.axmann<span
            style="display:none">name</span
          >@gmail.com
        </p>
        <p>{$_("authorsSection.graphicDesign")}: Tereza Drnovcová</p>
        <p>
          {$_("authorsSection.typesetting")}: Martin Koukl,
          martin.design.grafika<span style="display:none">name</span>@gmail.com
        </p>
        <p>{$_("authorsSection.editing")}: Eva Trčková</p>
        <h4>{$_("authorsSection.translation")}</h4>
        <ul>
          <li>
            <span class="fi fi-ua" />
            {$_("languages.uk")}: Anastasia Litvincová
          </li>
        </ul>
      </div>

      <div class="column">
        <h2>{$_("authorsSection.web")}</h2>
        <p>
          <a href="https://github.com/MikulasZelinka">Mikuláš Zelinka</a>,
          mikulas<span style="display:none">name</span>@zelinka.dev
        </p>

        <p>
          {$_("aboutSection.development")}
          <a href="https://github.com/MikulasZelinka/book-for-ukraine"
            ><i class="fa-brands fa-github" /> GitHub</a
          >.
        </p>

        <h4>{$_("authorsSection.translation")}</h4>
        <ul>
          <li>
            <span class="fi fi-gb" />
            {$_("languages.en")}: Mikuláš Zelinka
          </li>
          <li>
            <span class="fi fi-ua" />
            {$_("languages.uk")}:
            <a href="https://github.com/Legionivo">Andrey Konovka</a>,
            <a href="https://lindat.cz/translation">Charles Translator</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="hero has-text-centered">
  <div class="hero-body">
    <p class="subtitle">{$_("authorsSection.acknowledgement")}</p>
  </div>
</section>
