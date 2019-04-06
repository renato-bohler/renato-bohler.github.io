<template>
  <div class="version" v-tooltip.top="'Changelog'" @click="onClick">
    {{ version }}
  </div>
</template>

<script>
import { version } from "../../package.json";

export default {
  data: () => ({ version }),
  props: {
    onClick: {
      type: Function,
      default: () => {}
    }
  }
};
</script>

<style scoped>
.version {
  position: fixed;
  left: -1px;
  bottom: -1px;
  background: #b3b3b3;
  height: 20px;
  padding: 2px 8px;
  border: 1px solid #a3a3a3;
  border-top-right-radius: 5px;
  font-family: "Major Mono Display", monospace !important;
  font-size: 0.9em;
  font-weight: bold;
  cursor: pointer;
}

.version:hover {
  text-decoration: underline;
}
</style>
