<template>
  <div class="container">
    <ExpandableFrameHeader
      :isOpen="isOpen"
      :image="image"
      :title="title"
      :toggle="toggle"
      :moreInfo="moreInfo"
    />
    <ExpandableFrameContent :isOpen="isOpen"><slot /></ExpandableFrameContent>
  </div>
</template>

<script>
import ExpandableFrameHeader from "./ExpandableFrameHeader";
import ExpandableFrameContent from "./ExpandableFrameContent";

export default {
  props: ["image", "title", "moreInfo"],
  components: { ExpandableFrameHeader, ExpandableFrameContent },
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
</style>
