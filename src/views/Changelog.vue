<template>
  <div class="home">
    <h1>{{ $t("changelog.title") }}</h1>
    <Changelog />
  </div>
</template>

<script>
import Changelog from "../../CHANGELOG.md";

export default {
  name: "home",
  components: {
    Changelog
  }
};
</script>
