<template>
  <ContentContainer>
    <ContentFrame :title="title" :lastEditedAt="lastEditedAt">
      <slot />
    </ContentFrame>
    <ContentDivider v-if="!last" />
  </ContentContainer>
</template>

<script>
import ContentContainer from "./ContentContainer";
import ContentFrame from "./ContentFrame";
import ContentDivider from "./ContentDivider";

export default {
  components: { ContentContainer, ContentFrame, ContentDivider },
  props: ["title", "last", "lastEditedAt"]
};
</script>
