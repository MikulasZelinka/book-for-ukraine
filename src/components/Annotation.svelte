<script lang="ts">
  export let columnWidth: number;
  $: fontSize = columnWidth / 30;
</script>

<div
  class="cs pr-3"
  style="position: absolute; top: 15%; left: 40%; font-size: {fontSize}px"
>
  <p>
    „Ya ne ponimayu,“ řekla mi copatá holčička rusky. Seděla odstrčená na kraji
    jednoho dejvického pískoviště. Byla polovina března 2022. „Ty rozumiyesh,“
    odpověděla jsem ukrajinsky a dál jsem na ni mluvila česky. Přece si nebudeme
    povídat rusky, když naše jazyky jsou si podobnější!
  </p>
</div>

<div
  class="ua pr-3"
  style="position: absolute; top: 48%; left: 25%; font-size: {fontSize}px"
>
  <p>
    «Я не понимаю», — сказала мені російською дівчинка з косичками. Вона
    самотньо сиділа на краю пісочниці на Дейвіце. Це була середина березня 2022
    року. «Ти розумієш», — відповіла я українською і продовжила з нею розмовляти
    чеською. Ми ж не будемо говорити російською, коли наші мови більш схожі!
  </p>
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
