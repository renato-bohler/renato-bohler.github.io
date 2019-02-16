<template>
  <ContentContainer>
    <ContentFrame :title="title" :lastEditedAt="lastEditedAt">
      <slot />
    </ContentFrame>
    <ContentDivider />
  </ContentContainer>
</template>

<script>
import ContentContainer from "./ContentContainer";
import ContentFrame from "./ContentFrame";
import ContentDivider from "./ContentDivider";

export default {
  components: { ContentContainer, ContentFrame, ContentDivider },
  props: ["title", "lastEditedAt"]
};
</script>
