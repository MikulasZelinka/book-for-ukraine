<script>
  import { _ } from "../i18n";
</script>

<section class="section is-medium">
  <div class="content">
    <div class="columns is-desktop" style="overflow:hidden;">
      <div class="column">
        <h2 class="title" id="o-projektu">{$_("about")}</h2>
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
        <h2 class="title" id="tvurci">{$_("authors")}</h2>
        <ul>
          <li>
            {$_("authorsSection.web")}:
            <a href="https://github.com/MikulasZelinka">Mikuláš Zelinka</a>,
            mikulas<span style="display:none">name</span>@zelinka.dev
          </li>
          <li>
            {$_("authorsSection.content")}: Tereza Axmannová, tereza.axmann<span
              style="display:none">name</span
            >@gmail.com
          </li>
          <li>{$_("authorsSection.translation_uk")}: Anastasia Litvincová</li>
          <li>{$_("authorsSection.translation_en")}: Mikuláš Zelinka</li>
          <li>{$_("authorsSection.graphicDesign")}: Tereza Drnovcová</li>
          <li>
            {$_("authorsSection.typesetting")}: Martin Koukl,
            martin.design.grafika<span style="display:none">name</span
            >@gmail.com
          </li>
          <li>{$_("authorsSection.editing")}: Eva Trčková</li>
        </ul>

        <p>
          {$_("authorsSection.acknowledgement")}
        </p>
      </div>
    </div>
  </div>
</section>
