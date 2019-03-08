<template>
  <div class="container">
    <div class="title">{{ title }}</div>
    <div class="frame">
      <div class="content">
        <slot />
      </div>
      <div class="footer">
        <icon
          name="regular/clock"
          class="icon"
          scale="0.8"
          v-tooltip.bottom="absoluteEditTime"
        />
        {{ $t("content.lastEdited") }}
        {{ relativeEditTime }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "lastEditedAt"],
  computed: {
    relativeEditTime() {
      return this.$moment(this.lastEditedAt).fromNow();
    },
    absoluteEditTime() {
      return this.$moment(this.lastEditedAt).format("LLLL");
    }
  }
};
</script>

<style scoped>
.frame {
  display: flex;
  flex-direction: column;
  background: #f3f3f3;
  border-top: 3px groove var(--theme-border);
  width: 900px;
  min-height: 200px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

.title {
  font-family: "Major Mono Display", monospace !important;
  font-size: 3em;
  font-weight: bold;
  margin-bottom: -0.15em;
  color: var(--theme-primary-dark);
  z-index: 2;
  user-select: none;
  -webkit-user-select: none;
}

.content {
  flex-grow: 1;
  padding: 16px;
}

p {
  text-indent: 20px;
  text-align: justify;
}

h1 {
  font-family: "Major Mono Display", monospace !important;
  font-size: 2em;
  font-weight: normal;
  font-style: italic;
  margin-bottom: 0.15em;
  color: var(--theme-primary-dark);
  text-transform: lowercase;
}

.footer {
  display: flex;
  justify-content: flex-end;
  padding: 8px;
  background: #e0e0e0;
  border-top: 1px dashed #888888;
  border-bottom: 1px solid #cacaca;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  font-size: 0.7em;
  font-style: italic;
  color: #333;
}

.footer > .icon {
  margin-right: 4px;
}

@media screen and (max-width: 425px) {
  .title {
    font-size: 10vw;
  }
}

@media screen and (max-width: 900px) {
  .frame {
    width: 100%;
  }

  .content {
    padding: 8px;
  }

  .footer {
    padding: 4px;
  }
}
</style>
