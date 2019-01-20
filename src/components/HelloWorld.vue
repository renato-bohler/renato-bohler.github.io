<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>I'm still stuying VueJS to build this page. Please, come back later.</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<style scoped>
p {
  font-style: italic;
}
</style>
