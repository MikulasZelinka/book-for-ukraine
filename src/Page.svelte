<script>
  import Text from "./Text.svelte";

  export let number;
  export let description;
  export let texts;
</script>

<figure class="image is-2by1">
  <img src="resources/{number}.png" alt={description} />

  {#each texts as text}
    <Text {...text} />
  {/each}
</figure>
<p>{number}</p>
