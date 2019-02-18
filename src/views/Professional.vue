<template>
  <Content
    id="professional"
    :title="$t('professional.title')"
    :last="last"
    :lastEditedAt="new Date() - 60 * 60 * 24 * 1000"
  >
    <p>{{ $t("professional.message") }}</p>
  </Content>
</template>

<script>
import Content from "@/components/Content";
export default {
  props: ["last"],
  components: { Content }
};
</script>
