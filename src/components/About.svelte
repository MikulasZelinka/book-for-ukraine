<script>
	import { t } from 'svelte-intl-precompile';
</script>

<section class="section is-medium pb-3">
	<div class="content">
		<div class="columns is-desktop" style="overflow:hidden;">
			<div class="column">
				<h2 id="o-projektu">{$t('about')}</h2>

				<p>
					{$t('aboutSection.goal')}
				</p>

				<p>
					{$t('aboutSection.future')}
				</p>

				<p>
					{$t('aboutSection.support')}
				</p>
			</div>
			<div class="column">
				<h2 id="tvurci">{$t('authors')}</h2>

				<p>
					{$t('authorsSection.content')}: Tereza Axmannová, tereza.axmann<span style="display:none">name</span
					>@gmail.com
				</p>
				<p>{$t('authorsSection.graphicDesign')}: Tereza Drnovcová</p>
				<p>
					{$t('authorsSection.typesetting')}: Martin Koukl, martin.design.grafika<span style="display:none">name</span
					>@gmail.com
				</p>
				<p>{$t('authorsSection.editing')}: Eva Trčková</p>

				<p>{$t('authorsSection.language')}: Petra Součková</p>
				<p>{$t('authorsSection.supervision')}: Viktor Vilhelm</p>
				<h4>{$t('authorsSection.translation')}</h4>
				<ul>
					<li>
						<span class="fi fi-ua" />
						{$t('languages.uk')}: Anastasia Litvincová
					</li>
				</ul>
			</div>

			<div class="column">
				<h2>{$t('authorsSection.web')}</h2>
				<p>
					<a href="https://github.com/MikulasZelinka">Mikuláš Zelinka</a>, mikulas<span style="display:none">name</span
					>@zelinka.dev
				</p>

				<p>
					{$t('aboutSection.development')}
					<a href="https://github.com/MikulasZelinka/book-for-ukraine"><i class="fa-brands fa-github" /> GitHub</a>.
				</p>

				<h4>{$t('authorsSection.translation')}</h4>
				<ul>
					<li>
						<span class="fi fi-gb" />
						{$t('languages.en')}: Mikuláš Zelinka
					</li>
					<li>
						<span class="fi fi-ua" />
						{$t('languages.uk')}:
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
		<p class="subtitle">{$t('authorsSection.acknowledgement')}</p>
	</div>
</section>
