<template>
  <div>
    <span
      class="link"
      :style="linkAnimationTiming"
      v-scroll-to="`#${item.id}`"
      >{{ $t(item.translateKey) }}</span
    >
    <span class="divider" :style="dividerAnimationTiming" v-if="!last" />
  </div>
</template>

<script>
export default {
  props: ["item", "last", "linkAnimationDuration", "dividerAnimationDuration"],
  computed: {
    linkAnimationTiming() {
      return `animation-duration: ${this.linkAnimationDuration}s`;
    },
    dividerAnimationTiming() {
      return `animation-duration: ${this.dividerAnimationDuration}s`;
    }
  }
};
</script>

<style scoped>
span {
  display: inline-block;
}

.link {
  cursor: pointer;
  border-bottom: 1px solid white;
  animation: fade-in-bottom 0s ease 1.5s backwards;
  -webkit-animation: fade-in-bottom 0s ease 1.5s backwards;
}

.divider {
  animation: fade-in-bottom 0s ease 1.5s backwards;
  -webkit-animation: fade-in-bottom 0s ease 1.5s backwards;
}

.divider::after {
  content: "|";
  margin: 0 2vmin;
  background: linear-gradient(
    var(--gradient-primary-bright),
    var(--gradient-secondary-bright)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
