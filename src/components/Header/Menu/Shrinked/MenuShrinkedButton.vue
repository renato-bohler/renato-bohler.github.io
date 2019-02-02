<template>
  <div class="button">
    <span :class="chevronOrientation" @click.stop="toggle">
      {{ $t("menu.menu") }}
    </span>
  </div>
</template>

<script>
export default {
  props: ["open", "toggle"],
  computed: {
    chevronOrientation() {
      return this.open ? "open" : "close";
    }
  }
};
</script>

<style scoped>
.button {
  font-size: 1.25em;
  font-weight: bold;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: var(--menu-shrinked-height);
  z-index: 104;
}

span {
  cursor: pointer;
  display: flex;
}

span:before {
  content: ">";
  display: inline-block;
  transition: 0.5s ease;
  margin: 0 1vmin;
  width: 20px;
  background: linear-gradient(
    to right,
    var(--gradient-primary-bright),
    var(--gradient-secondary-bright)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

span.open::before {
  transform: rotate(-90deg);
}

span.close::before {
  transform: rotate(90deg);
}

span:after {
  content: " ";
  margin: 0 1vmin;
  width: 20px;
}
</style>
