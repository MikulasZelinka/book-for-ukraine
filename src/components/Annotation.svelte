<script lang="ts">
	export let columnWidth: number;
	$: fontSize = columnWidth / 31;
</script>

<div class="cs pr-3" style="position: absolute; top: 15%; left: 40%; font-size: {fontSize}px">
	<p>„Ya ne ponimayu,“ řekla mi copatá</p>
	<p>holčička rusky. Seděla odstrčená na</p>
	<p>kraji jednoho dejvického pískoviště.</p>
	<p>Byla polovina března 2022.</p>
	<p>„Ty rozumiyesh,“ odpověděla jsem</p>
	<p>ukrajinsky a dál jsem na ni mluvila</p>
	<p>česky. Přece si nebudeme povídat rusky,</p>
	<p>když naše jazyky jsou si podobnější!</p>
</div>

<div class="ua pr-3" style="position: absolute; top: 48%; left: 25%; font-size: {fontSize}px">
	<p>«Я не понимаю», — сказала мені російською</p>
	<p>дівчинка з косичками. Вона самотньо сиділа на</p>
	<p>краю пісочниці на Дейвіце. Це була середина</p>
	<p>березня 2022 року.</p>
	<p>«Ти розумієш», — відповіла я українською</p>
	<p>і продовжила з нею розмовляти чеською.</p>
	<p>Ми ж не будемо говорити російською,</p>
	<p>коли наші мови більш схожі!</p>
</div>

<style>
	div {
		font-style: italic;
		color: black;
	}

	.cs {
		text-align: right;
	}

	.ua {
		text-align: right;
	}
</style>
