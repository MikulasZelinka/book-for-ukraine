<script lang="ts">
  export let columnWidth: number;

  $: fontSize = (columnWidth / 768) * 3;
</script>

<h2
  class="title cs"
  style="position: absolute; top: 34%; left: 8%; width: 80%; font-size: {fontSize}rem;"
>
  Povídání
  <br />
  modro-žluté krajiny
</h2>
<h2
  class="title ua"
  style="position: absolute; top: 50%; left: 10%; width: 80%; font-size: {fontSize}rem;"
>
  Розповідь
  <br />
  синьо-жовтого краю
</h2>

<style>
  h2 {
    font-family: "Ubuntu", sans-serif;
    font-weight: 700;
    color: black;
  }

  .cs {
    text-align: left;
  }

  .ua {
    text-align: right;
  }
</style>
