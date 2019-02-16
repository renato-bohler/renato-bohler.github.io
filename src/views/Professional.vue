<template>
  <Content
    id="professional"
    :title="$t('professional.title')"
    :lastEditedAt="new Date() - 60 * 60 * 24 * 1000"
  >
    <p>{{ $t("professional.message") }}</p>
  </Content>
</template>

<script>
import Content from "@/components/Content";
export default {
  components: { Content }
};
</script>
