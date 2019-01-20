<template>
  <div class="home">
    <h1>Changelog</h1>
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
