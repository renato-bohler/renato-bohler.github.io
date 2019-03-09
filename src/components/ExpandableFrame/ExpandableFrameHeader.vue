<template>
  <div class="header" @click.stop="toggle">
    <ImageFrame :src="image" :size="30" :border="true" />
    <h3 class="title">{{ title }}</h3>
    <ExpandableFrameMoreInfo :moreInfo="moreInfo" />
    <span :class="['chevron', isOpen]">></span>
  </div>
</template>

<script>
import ExpandableFrameMoreInfo from "./ExpandableFrameMoreInfo";
import ImageFrame from "@/components/ImageFrame";

export default {
  props: ["isOpen", "title", "image", "toggle", "moreInfo"],
  components: { ExpandableFrameMoreInfo, ImageFrame }
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  -webkit-user-select: none;
}

.title {
  font-family: "Major Mono Display", monospace !important;
  text-transform: lowercase;
  flex-grow: 1;
  font-weight: normal;
  padding-left: 16px;
  margin: 0;
}

.chevron {
  display: inline-block;
  transition: transform 0.5s ease;
}

.chevron.open {
  transform: rotate(-90deg);
}

.chevron.close {
  transform: rotate(90deg);
}
</style>
