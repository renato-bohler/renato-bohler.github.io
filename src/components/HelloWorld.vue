<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>I'm still stuying VueJS to build this page. Please, come back later.</p>
    <p>
      Currently on version <b>{{ version }}</b>
    </p>
  </div>
</template>

<script>
import { version } from "../../package.json";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: () => ({
    version
  })
};
</script>

<style scoped>
p {
  font-style: italic;
}
</style>
