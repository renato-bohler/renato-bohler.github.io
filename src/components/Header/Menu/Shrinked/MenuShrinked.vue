<template>
  <div>
    <MenuShrinkedButton :open="this.open" :toggle="toggle" />
    <MenuShrinkedBorder />
  </div>
</template>

<script>
import MenuShrinkedButton from "./MenuShrinkedButton";
import MenuShrinkedBorder from "./MenuShrinkedBorder";

export default {
  components: {
    MenuShrinkedButton,
    MenuShrinkedBorder
  },
  data: () => ({
    open: false
  }),
  methods: {
    toggle() {
      this.open = !this.open;
    }
  }
};
</script>

<style scoped></style>
