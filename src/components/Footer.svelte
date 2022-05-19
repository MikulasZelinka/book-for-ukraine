<script lang="ts">
  import { _ } from "../i18n";
</script>

<footer class="footer pb-6">
  <div class="content has-text-centered">
    <p>
      {$_("footerSection.start")}
      <a href="https://svelte.dev/">Svelte</a>,
      <a href="https://bulma.io/">Bulma</a>{$_("footerSection.middle")}
      {$_("footerSection.end")}
    </p>
  </div>
</footer>
