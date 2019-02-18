<template>
  <img
    :src="require(`@/images/${this.src}`)"
    :class="[format, border && 'with-border']"
    :style="cssVariables"
  />
</template>

<script>
export default {
  props: {
    src: {
      type: String
    },
    format: {
      type: String,
      default: "circle"
    },
    size: {
      type: Number,
      default: 100
    },
    border: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    cssVariables() {
      return {
        "--image-frame-size": `${this.size}px`
      };
    }
  }
};
</script>

<style scoped>
.circle {
  border-radius: 100%;
  width: var(--image-frame-size);
  height: var(--image-frame-size);
}

.with-border {
  border: 2px solid var(--theme-border);
}
</style>
