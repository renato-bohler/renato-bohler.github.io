<template>
  <span class="flag-icon" :style="style" />
</template>

<script>
export default {
  props: ["iso"],
  computed: {
    style() {
      return `background-image: url(${require(`../../resources/flag/${
        this.iso
      }.svg`)};`;
    }
  }
};
</script>

<style scoped>
.flag-icon {
  background-size: contain;
  background-position: 50%;
  background-repeat: no-repeat;
  position: relative;
  display: inline-block;
  width: calc(4em / 3);
  line-height: 1em;
}

.flag-icon:before {
  content: "\00a0";
}
</style>
