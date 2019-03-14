<template>
  <Content
    id="skills"
    :title="$t('skills.title')"
    :last="last"
    :lastEditedAt="new Date() - 60 * 1000"
  >
    <p
      v-for="(paragraph, index) in $t('skills.introduction')"
      :key="index"
      v-html="paragraph"
    />
    <ExpandableFrame
      image="skills/javascript.png"
      title="Javascript"
      :moreInfo="{ skillLevel: 6, recentUsage: 'high', studying: true }"
    >
      <p
        v-for="(paragraph, index) in $t('skills.javascript')"
        :key="index"
        v-html="paragraph"
      />
    </ExpandableFrame>
    <ExpandableFrame
      image="skills/java.png"
      title="Java"
      :moreInfo="{ skillLevel: 5, recentUsage: 'high' }"
    >
      <p
        v-for="(paragraph, index) in $t('skills.java')"
        :key="index"
        v-html="paragraph"
      />
    </ExpandableFrame>
    <ExpandableFrame
      image="skills/react.png"
      title="React"
      :moreInfo="{ skillLevel: 6, recentUsage: 'high', studying: true }"
    >
      <p
        v-for="(paragraph, index) in $t('skills.react')"
        :key="index"
        v-html="paragraph"
      />
    </ExpandableFrame>
    <ExpandableFrame
      image="skills/redux.png"
      title="Redux"
      :moreInfo="{ skillLevel: 6, recentUsage: 'high' }"
    >
      <p>Lorem</p>
    </ExpandableFrame>
    <ExpandableFrame
      image="skills/vuejs.png"
      title="VueJS"
      :moreInfo="{ skillLevel: 4, recentUsage: 'medium', studying: true }"
    >
      <p>Lorem</p>
    </ExpandableFrame>
    <ExpandableFrame
      image="skills/graphql.png"
      title="GraphQL"
      :moreInfo="{
        skillLevel: 1,
        recentUsage: 'never',
        planningToStudy: true
      }"
    >
      <p>Lorem</p>
    </ExpandableFrame>
    <ExpandableFrame
      image="skills/angular.png"
      title="Angular"
      :moreInfo="{ skillLevel: 4, recentUsage: 'low' }"
    >
      <p>Lorem</p>
    </ExpandableFrame>
    <ExpandableFrame
      image="skills/android.png"
      title="Android"
      :moreInfo="{ skillLevel: 4, recentUsage: 'low' }"
    >
      <p>Lorem</p>
    </ExpandableFrame>
    <ExpandableFrame
      image="skills/sql.png"
      title="SQL"
      :moreInfo="{
        skillLevel: 5,
        recentUsage: 'medium',
        planningToStudy: true
      }"
    >
      <p>Lorem</p>
    </ExpandableFrame>
    <ExpandableFrame
      image="skills/git.png"
      title="Git"
      :moreInfo="{ skillLevel: 5, recentUsage: 'high' }"
    >
      <p>Lorem</p>
    </ExpandableFrame>
    <ExpandableFrame
      image="skills/docker.png"
      title="Docker"
      :moreInfo="{
        skillLevel: 4,
        recentUsage: 'medium',
        planningToStudy: true
      }"
    >
      <p>Lorem</p>
    </ExpandableFrame>
    <ExpandableFrame
      image="skills/kubernetes.png"
      title="Kubernetes"
      :moreInfo="{
        skillLevel: 2,
        recentUsage: 'never',
        planningToStudy: true
      }"
    >
      <p>Lorem</p>
    </ExpandableFrame>
    <ExpandableFrame
      image="skills/kafka.png"
      title="Kafka"
      :moreInfo="{
        skillLevel: 5,
        recentUsage: 'medium'
      }"
    >
      <p>Lorem</p>
    </ExpandableFrame>
    <ExpandableFrame
      image="skills/mqtt.png"
      title="MQTT"
      :moreInfo="{ skillLevel: 4, recentUsage: 'medium' }"
    >
      <p>Lorem</p>
    </ExpandableFrame>
    <ExpandableFrame
      image="skills/websockets.png"
      title="WebSockets"
      :moreInfo="{ skillLevel: 4, recentUsage: 'medium' }"
    >
      <p>Lorem</p>
    </ExpandableFrame>
    <ExpandableFrame
      image="skills/regexp.png"
      title="RegExp"
      :moreInfo="{
        skillLevel: 4,
        recentUsage: 'medium',
        planningToStudy: true
      }"
    >
      <p>Lorem</p>
    </ExpandableFrame>
    <ExpandableFrame
      image="skills/nosql.png"
      title="NoSQL"
      :moreInfo="{
        skillLevel: 2,
        recentUsage: 'never',
        planningToStudy: true
      }"
    >
      <p>Lorem</p>
    </ExpandableFrame>
  </Content>
</template>

<script>
import Content from "@/components/Content";
import ExpandableFrame from "@/components/ExpandableFrame";

export default {
  props: ["last"],
  components: { Content, ExpandableFrame }
};
</script>
