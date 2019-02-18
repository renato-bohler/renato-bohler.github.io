<template>
  <Content
    id="about"
    :title="$t('about.title')"
    :last="last"
    :lastEditedAt="new Date()"
  >
    <div class="header">
      <ImageFrame
        src="about/myself.png"
        :size="150"
        v-tooltip.bottom="$t('about.image.tooltip')"
        :border="true"
      />
      <h1>{{ $t("about.helloWorld") }}</h1>
    </div>
    <p>{{ $t("about.message") }}</p>
  </Content>
</template>

<script>
import Content from "@/components/Content";
import ImageFrame from "@/components/ImageFrame";

export default {
  props: ["last"],
  components: { Content, ImageFrame }
};
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3em;
}
</style>
