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
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec velit
        a libero facilisis iaculis ut a magna. Pellentesque laoreet, massa id
        tristique porttitor, lorem orci scelerisque odio, a facilisis sem purus
        nec nisl. Mauris ultrices mollis pharetra. Integer dictum, massa
        ultrices faucibus hendrerit, elit enim imperdiet ipsum, nec pulvinar
        odio augue luctus magna. Vivamus aliquet lacinia orci sit amet iaculis.
        Aliquam et tempus nulla. Etiam quis ultricies est. Pellentesque
        imperdiet, tortor vitae pharetra congue, nibh nibh suscipit dui, ut
        elementum ipsum libero vel mi. Vivamus tincidunt euismod sollicitudin.
        Nunc nec facilisis velit.
      </p>
      <p>
        Proin cursus, urna sit amet mollis euismod, odio est cursus ante, sed
        ornare massa arcu sed nunc. Nulla vestibulum urna purus, nec suscipit mi
        faucibus ut. Vestibulum tincidunt nisi quis eleifend auctor. Suspendisse
        eget quam ornare, rutrum dui eget, efficitur dui. Sed ut maximus turpis.
        Aliquam elit purus, varius a volutpat a, sodales vitae enim. Integer
        luctus vestibulum maximus. Maecenas in tincidunt nulla. Suspendisse
        vehicula eu enim et eleifend. Sed pulvinar odio sit amet tortor
        tincidunt tincidunt.
      </p>
      <p>
        Quisque in luctus odio, nec tincidunt urna. Donec metus magna, tincidunt
        in tincidunt nec, vulputate sed nisl. Curabitur sodales, massa tincidunt
        bibendum euismod, lacus nunc ultrices risus, eget consequat neque lacus
        non sapien. Donec vitae finibus nulla, ut ultricies elit. Curabitur
        rhoncus fermentum sem vel volutpat. Vivamus dapibus lacus congue orci
        varius, eget efficitur elit consequat. Integer cursus tellus quis risus
        consequat, suscipit scelerisque felis mattis. Aenean vitae lectus sit
        amet enim dictum egestas at non arcu. Aenean scelerisque id libero eu
        vehicula. Curabitur nisl felis, sodales vel accumsan quis, hendrerit
        venenatis ex.
      </p>
    </ExpandableFrame>
    <ExpandableFrame
      image="skills/java.png"
      title="Java"
      :moreInfo="{ skillLevel: 5, recentUsage: 'high' }"
    >
      <p>Lorem</p>
    </ExpandableFrame>
    <ExpandableFrame
      image="skills/react.png"
      title="React"
      :moreInfo="{ skillLevel: 6, recentUsage: 'high', studying: true }"
    >
      <p>Lorem</p>
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
