<template>
  <Content
    id="projects"
    :title="$t('projects.title')"
    :lastEditedAt="new Date() - 60 * 60 * 1000"
  >
    <p>{{ $t("projects.message") }}</p>
  </Content>
</template>

<script>
import Content from "@/components/Content";
export default {
  components: { Content }
};
</script>
