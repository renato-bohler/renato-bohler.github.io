<template>
  <Content
    id="skills"
    :title="$t('skills.title')"
    :last="last"
    :lastEditedAt="new Date('April 1, 2019 11:36:48')"
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
      <p
        v-for="(paragraph, index) in $t('skills.redux')"
        :key="index"
        v-html="paragraph"
      />
    </ExpandableFrame>
    <ExpandableFrame
      image="skills/vuejs.png"
      title="VueJS"
      :moreInfo="{ skillLevel: 4, recentUsage: 'medium', studying: true }"
    >
      <p
        v-for="(paragraph, index) in $t('skills.vuejs')"
        :key="index"
        v-html="paragraph"
      />
    </ExpandableFrame>
    <ExpandableFrame
      image="skills/graphql.png"
      title="GraphQL"
      :moreInfo="{
        skillLevel: 2,
        recentUsage: 'never',
        planningToStudy: true
      }"
    >
      <p
        v-for="(paragraph, index) in $t('skills.graphql')"
        :key="index"
        v-html="paragraph"
      />
    </ExpandableFrame>
    <ExpandableFrame
      image="skills/angular.png"
      title="Angular"
      :moreInfo="{ skillLevel: 4, recentUsage: 'low' }"
    >
      <p
        v-for="(paragraph, index) in $t('skills.angular')"
        :key="index"
        v-html="paragraph"
      />
    </ExpandableFrame>
    <ExpandableFrame
      image="skills/android.png"
      title="Android"
      :moreInfo="{ skillLevel: 4, recentUsage: 'low' }"
    >
      <p
        v-for="(paragraph, index) in $t('skills.android')"
        :key="index"
        v-html="paragraph"
      />
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
      <p
        v-for="(paragraph, index) in $t('skills.sql')"
        :key="index"
        v-html="paragraph"
      />
    </ExpandableFrame>
    <ExpandableFrame
      image="skills/git.png"
      title="Git"
      :moreInfo="{ skillLevel: 5, recentUsage: 'high' }"
    >
      <p
        v-for="(paragraph, index) in $t('skills.git')"
        :key="index"
        v-html="paragraph"
      />
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
      <p
        v-for="(paragraph, index) in $t('skills.docker')"
        :key="index"
        v-html="paragraph"
      />
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
      <p
        v-for="(paragraph, index) in $t('skills.kubernetes')"
        :key="index"
        v-html="paragraph"
      />
    </ExpandableFrame>
    <ExpandableFrame
      image="skills/kafka.png"
      title="Kafka"
      :moreInfo="{
        skillLevel: 5,
        recentUsage: 'medium'
      }"
    >
      <p
        v-for="(paragraph, index) in $t('skills.kafka')"
        :key="index"
        v-html="paragraph"
      />
    </ExpandableFrame>
    <ExpandableFrame
      image="skills/mqtt.png"
      title="MQTT"
      :moreInfo="{ skillLevel: 4, recentUsage: 'medium' }"
    >
      <p
        v-for="(paragraph, index) in $t('skills.mqtt')"
        :key="index"
        v-html="paragraph"
      />
    </ExpandableFrame>
    <ExpandableFrame
      image="skills/websockets.png"
      title="WebSockets"
      :moreInfo="{ skillLevel: 4, recentUsage: 'medium' }"
    >
      <p
        v-for="(paragraph, index) in $t('skills.websockets')"
        :key="index"
        v-html="paragraph"
      />
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
      <p
        v-for="(paragraph, index) in $t('skills.regexp')"
        :key="index"
        v-html="paragraph"
      />
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
      <p
        v-for="(paragraph, index) in $t('skills.nosql')"
        :key="index"
        v-html="paragraph"
      />
    </ExpandableFrame>
    <ExpandableFrame
      image="skills/cicd.png"
      title="CI & CD"
      :moreInfo="{
        skillLevel: 4,
        recentUsage: 'medium'
      }"
    >
      <p
        v-for="(paragraph, index) in $t('skills.cicd')"
        :key="index"
        v-html="paragraph"
      />
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
