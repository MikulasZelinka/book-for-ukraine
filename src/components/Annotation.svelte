<script lang="ts">
	export let columnWidth: number;
	$: fontSize = columnWidth / 31;
</script>

<div class="cs pr-3" style="position: absolute; top: 20%; right: 5%; font-size: {fontSize}px">
	<p>„Ja ně panimáju,“ řekla mi copatá</p>
	<p>holčička rusky. Seděla odstrčená na</p>
	<p>kraji pískoviště. „Ty rozumíješ,“</p>
	<p>odpověděla jsem ukrajinsky</p>
	<p>a dál jsem na ni mluvila česky.</p>
	<p>Porozuměla a pak si šla</p>
	<p>hrát s českými dětmi.</p>
</div>

<div class="ua pr-3" style="position: absolute; top: 48%; right: 5%; font-size: {fontSize}px">
	<p>«Я не понимаю», — сказала мені російською</p>
	<p>дівчинка з косичками. Вона самотньо сиділа</p>
	<p>на краю пісочниці. «Ти розумієш», — відповіла</p>
	<p>я українською і продовжила з нею</p>
	<p>розмовляти чеською. Вона зрозуміла,</p>
	<p>а потім пішла гратися</p>
	<p>з чеськими дітьми.</p>
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
