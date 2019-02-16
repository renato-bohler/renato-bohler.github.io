<template>
  <Content id="about" :title="$t('about.title')" :lastEditedAt="new Date()">
    <p>{{ $t("about.message") }}</p>
  </Content>
</template>

<script>
import Content from "@/components/Content";
export default {
  components: { Content }
};
</script>
