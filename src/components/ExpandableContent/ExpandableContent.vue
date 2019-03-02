<template>
  <div class="container">
    <div class="header" @click.stop="toggle">
      <ImageFrame :src="image" :size="30" :border="true" />
      <h3 class="title">{{ title }}</h3>
      <span :class="['chevron', isOpen]">></span>
    </div>
    <div :class="['content-container', isOpen]">
      <div class="content-bar" />
      <div class="content"><slot /></div>
    </div>
  </div>
</template>

<script>
import ImageFrame from "@/components/ImageFrame";

export default {
  props: ["image", "title"],
  components: { ImageFrame },
  data: () => ({
    open: false
  }),
  methods: {
    toggle() {
      this.open = !this.open;
    }
  },
  computed: {
    isOpen() {
      return this.open ? "open" : "close";
    }
  }
};
</script>

<style scoped>
.container {
  background: #eaeaea;
  border-bottom: 1px solid #cacaca;
  padding: 4px 16px 4px 16px;
}

.header {
  display: flex;
  align-items: center;
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
}

.title {
  flex-grow: 1;
  font-weight: normal;
  padding-left: 16px;
  margin: 0;
}

.chevron {
  display: inline-block;
  transition: transform 0.5s ease;
  user-select: none;
  -webkit-user-select: none;
}

.chevron.open {
  transform: rotate(-90deg);
}

.chevron.close {
  transform: rotate(90deg);
}

.content-container {
  display: flex;
}

.content-container.open {
  height: auto;
  border-top: 1px dashed var(--theme-primary-dark);
  border-left: 1px dashed #e3e3e3;
  border-right: 1px dashed #e3e3e3;
  background: #f3f3f3;
  margin: 4px -16px -4px -16px;
}

.content-container.close {
  height: 0;
  overflow: hidden;
}

.content-bar {
  min-width: 4px;
  background: var(--theme-border);
  margin-left: 30px;
}

.content {
  flex-grow: 1;
  padding: 0 8px 8px 31px;
}

.content > p {
  text-indent: 20px;
  text-align: justify;
}
</style>
