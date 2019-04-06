<template>
  <div class="background" @click="close" v-if="isOpen">
    <div class="content" @click.stop>
      <div class="close-container">
        <button
          class="close"
          v-tooltip.left="$t('action.close')"
          @click="close"
        >
          <icon name="times-circle" scale="1.3" />
        </button>
      </div>
      <h1 class="title">{{ $t("changelog.title") }}</h1>
      <Changelog class="changelog" />
    </div>
  </div>
</template>

<script>
import Changelog from "../../CHANGELOG.md";

export default {
  name: "home",
  components: {
    Changelog
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    close: {
      type: Function,
      default: () => {}
    }
  }
};
</script>

<style scoped>
.background {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 105;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  overflow: hidden;
}

.content {
  position: relative;
  overflow: auto;
  background: black;
  color: white;
  width: 900px;
  height: 80%;
  padding: 32px;
  border: 2px double var(--theme-primary-bright);
  border-radius: 10px;
}

.title {
  font-family: "Major Mono Display", monospace;
  background: linear-gradient(
    var(--theme-primary-bright),
    var(--theme-secondary-bright)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-size: 3em;
  text-decoration: underline;
}

.close-container {
  position: absolute;
  right: 48px;
  top: 16px;
}

.close {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: white;
  border: 2px solid white;
  border-radius: 50%;
  background: linear-gradient(
    var(--theme-primary-dark),
    var(--theme-secondary-dark)
  );
  cursor: pointer;
  outline: none;
}

@media screen and (max-width: 767px) {
  .background {
    padding: 0;
    align-items: center;
  }

  .content {
    width: 90vw;
    height: 90vh;
    padding: 8px;
  }
}

::-webkit-scrollbar {
  width: 15px;
  background: #222222;
  border-radius: 15px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(
    var(--theme-primary-bright),
    var(--theme-secondary-bright)
  );
  border-radius: 10px;
  border: 4px solid #222222;
}

::-webkit-scrollbar-corner {
  background: linear-gradient(
    var(--theme-primary-bright),
    var(--theme-secondary-bright)
  );
  border-radius: 10px;
}
</style>
