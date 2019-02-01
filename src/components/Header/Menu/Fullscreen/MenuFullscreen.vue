<template>
  <div class="container">
    <span v-for="(item, index) in contents" :key="index">
      <MenuItemFullscreen
        :item="item"
        :linkAnimationDuration="0.5 + (index * 2 + 1) * 0.25"
        :dividerAnimationDuration="0.5 + (index * 2 + 2) * 0.25"
        :last="index === contents.length - 1"
      />
    </span>
  </div>
</template>

<script>
import MenuItemFullscreen from "./MenuItemFullscreen";
import contents from "@/consts/contents";

export default {
  components: {
    MenuItemFullscreen
  },
  data: () => ({
    contents
  })
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  font-size: 3vmin;
}

@media screen and (max-width: 767px) {
  .container {
    display: none !important;
  }
}
</style>
