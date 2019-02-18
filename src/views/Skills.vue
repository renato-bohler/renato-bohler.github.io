<template>
  <Content
    id="skills"
    :title="$t('skills.title')"
    :last="last"
    :lastEditedAt="new Date() - 60 * 1000"
  >
    <p>{{ $t("skills.message") }}</p>
  </Content>
</template>

<script>
import Content from "@/components/Content";
export default {
  props: ["last"],
  components: { Content }
};
</script>
