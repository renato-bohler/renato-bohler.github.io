<template>
  <Content
    id="about"
    :title="$t('about.title')"
    :last="last"
    :lastEditedAt="new Date('February 19, 2019 23:21:57')"
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
    <p v-html="$t('about.paragraphs[0]', { age })" />
    <p v-html="$t('about.paragraphs[1]')" />
    <p v-html="$t('about.paragraphs[2]')" />
    <p v-html="$t('about.paragraphs[3]')" />
  </Content>
</template>

<script>
import Content from "@/components/Content";
import ImageFrame from "@/components/ImageFrame";

export default {
  props: ["last"],
  components: { Content, ImageFrame },
  data: () => ({
    age: Math.floor(
      (new Date() - new Date("June 6, 1992")) / (1000 * 60 * 60 * 24 * 365)
    )
  })
};
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3em;
}

.header > h1 {
  text-align: center;
}
</style>
