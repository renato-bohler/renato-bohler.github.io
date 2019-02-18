<template>
  <Content
    id="about"
    :title="$t('about.title')"
    :last="last"
    :lastEditedAt="new Date()"
  >
    <p>{{ $t("about.message") }}</p>
  </Content>
</template>

<script>
import Content from "@/components/Content";
export default {
  props: ["last"],
  components: { Content }
};
</script>
