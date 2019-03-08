<template>
  <Content
    id="skills"
    :title="$t('skills.title')"
    :last="last"
    :lastEditedAt="new Date() - 60 * 1000"
  >
    <ExpandableFrame
      image="about/myself.png"
      title="Title One"
      :moreInfo="{ skillLevel: 1, recentUsage: 'high', studying: true }"
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
      image="about/myself.png"
      title="Title Two"
      :moreInfo="{ skillLevel: 2, recentUsage: 'medium' }"
    >
      <p>Lorem</p>
    </ExpandableFrame>
    <ExpandableFrame
      image="about/myself.png"
      title="Title Three"
      :moreInfo="{ skillLevel: 3, recentUsage: 'low', studying: true }"
    >
      <p>Lorem</p>
    </ExpandableFrame>
    <ExpandableFrame
      image="about/myself.png"
      title="Title Four"
      :moreInfo="{ skillLevel: 4, recentUsage: 'medium' }"
    >
      <p>Lorem</p>
    </ExpandableFrame>
    <ExpandableFrame
      image="about/myself.png"
      title="Title Five"
      :moreInfo="{ skillLevel: 5, recentUsage: 'medium' }"
    >
      <p>Lorem</p>
    </ExpandableFrame>
    <ExpandableFrame
      image="about/myself.png"
      title="Title Six"
      :moreInfo="{ skillLevel: 6, recentUsage: 'medium', studying: true }"
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
