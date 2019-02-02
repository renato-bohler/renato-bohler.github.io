<template>
  <div @click="hide">
    <div class="item" :class="last && 'last'" v-scroll-to="`#${item.id}`">
      {{ $t(item.translateKey) }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["item", "last", "hide"]
};
</script>

<style scoped>
.item {
  display: block;
  background: rgba(0, 0, 0, 0.7);
  margin: 0 2px 2px 2px;
  line-height: 2em;
  font-size: 1.2em;
  text-align: center;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
}

.last {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>
