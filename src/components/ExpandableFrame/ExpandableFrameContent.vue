<template>
  <div :class="['content-container', isOpen]">
    <div class="content-bar" />
    <div class="content"><slot /></div>
  </div>
</template>

<script>
export default {
  props: ["isOpen"]
};
</script>

<style scoped>
.content-container {
  display: flex;
}

.content-container.open {
  height: auto;
  border-top: 1px solid #cacaca;
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
