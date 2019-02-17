<template>
  <div class="container" v-on-clickaway="hide">
    <div class="menu" :class="translate">
      <div v-for="(item, index) in contents" :key="index">
        <MenuShrinkedItem
          :item="item"
          :last="index === contents.length - 1"
          :hide="hide"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";
import MenuShrinkedItem from "./MenuShrinkedItem";
import contents from "@/consts/contents";

export default {
  props: ["open", "toggle"],
  mixins: [clickaway],
  components: { MenuShrinkedItem },
  data: () => ({
    contents
  }),
  methods: {
    hide() {
      if (this.open) {
        this.toggle();
      }
    }
  },
  computed: {
    translate() {
      return this.open ? "open" : "close";
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.menu {
  position: absolute;
  min-width: 250px;
  background: linear-gradient(
    45deg,
    var(--theme-primary-dark),
    var(--theme-secondary-dark),
    var(--theme-primary-dark),
    var(--theme-secondary-dark)
  );
  background-size: 150% 150%;
  animation: gradient-horizontal 5s ease infinite;
  -webkit-animation: gradient-horizontal 5s ease infinite;
  color: white;
  align-self: center;
  transition: 0.5s ease;
  z-index: 102;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.open {
  opacity: 1;
}

.close {
  opacity: 0;
}
</style>
