<template>
  <div
    class="more-info"
    v-if="this.moreInfo && Object.keys(this.moreInfo).length > 0"
  >
    <icon
      v-if="this.moreInfo && this.moreInfo.skillLevel"
      :name="skillLevel.icon"
      :color="skillLevel.color"
      v-tooltip:top="skillLevel.tooltip"
      class="icon"
    />
    <icon
      v-if="this.moreInfo && this.moreInfo.recentUsage"
      :name="recentUsage.icon"
      :color="recentUsage.color"
      v-tooltip:top="recentUsage.tooltip"
      class="icon"
    />
    <icon
      v-if="this.moreInfo && this.moreInfo.studying"
      :name="studying.icon"
      :color="studying.color"
      v-tooltip:top="studying.tooltip"
      class="icon"
    />
    <icon
      v-if="this.moreInfo && this.moreInfo.planningToStudy"
      :name="planningToStudy.icon"
      :color="planningToStudy.color"
      v-tooltip:top="planningToStudy.tooltip"
      class="icon"
    />
  </div>
</template>

<script>
export default {
  props: ["moreInfo"],
  computed: {
    skillLevel() {
      if (this.moreInfo) {
        switch (this.moreInfo.skillLevel) {
          case 1:
            return {
              icon: "dice-one",
              color: "rgba(51, 51, 51, 0.3)",
              tooltip: this.$t("skills.moreInfo.skillLevel.one")
            };
          case 2:
            return {
              icon: "dice-two",
              color: "rgba(51, 51, 51, 0.45)",
              tooltip: this.$t("skills.moreInfo.skillLevel.two")
            };
          case 3:
            return {
              icon: "dice-three",
              color: "rgba(51, 51, 51, 0.6)",
              tooltip: this.$t("skills.moreInfo.skillLevel.three")
            };
          case 4:
            return {
              icon: "dice-four",
              color: "rgba(51, 51, 51, 0.75)",
              tooltip: this.$t("skills.moreInfo.skillLevel.four")
            };
          case 5:
            return {
              icon: "dice-five",
              color: "rgba(51, 51, 51, 0.80)",
              tooltip: this.$t("skills.moreInfo.skillLevel.five")
            };
          case 6:
            return {
              icon: "dice-six",
              color: "rgba(51, 51, 51, 0.95)",
              tooltip: this.$t("skills.moreInfo.skillLevel.six")
            };
        }
      }
      return { icon: "", color: "", tooltip: "" };
    },
    recentUsage() {
      if (this.moreInfo) {
        switch (this.moreInfo.recentUsage) {
          case "high":
            return {
              icon: "thermometer-full",
              color: "#ef652d",
              tooltip: this.$t("skills.moreInfo.recentUsage.high")
            };
          case "medium":
            return {
              icon: "thermometer-half",
              color: "#ecb120",
              tooltip: this.$t("skills.moreInfo.recentUsage.medium")
            };
          case "low":
            return {
              icon: "thermometer-quarter",
              color: "#2065ec",
              tooltip: this.$t("skills.moreInfo.recentUsage.low")
            };
          case "never":
            return {
              icon: "thermometer-empty",
              color: "#20baec",
              tooltip: this.$t("skills.moreInfo.recentUsage.never")
            };
        }
      }
      return { icon: "", color: "", tooltip: "" };
    },
    studying() {
      if (this.moreInfo) {
        if (this.moreInfo.studying) {
          return {
            icon: "book-reader",
            color: "#333",
            tooltip: this.$t("skills.moreInfo.studying")
          };
        }
      }
      return { icon: "regular/clock", color: "transparent", tooltip: "" };
    },
    planningToStudy() {
      if (this.moreInfo) {
        if (this.moreInfo.planningToStudy) {
          return {
            icon: "book",
            color: "#333",
            tooltip: this.$t("skills.moreInfo.planningToStudy")
          };
        }
      }
      return { icon: "regular/clock", color: "transparent", tooltip: "" };
    }
  }
};
</script>

<style scoped>
.more-info {
  display: grid;
  grid-template-columns: 30px 30px 30px;
  padding: 0 8px;
  margin: 0 16px;
  border-right: 1px solid #cacaca;
  border-left: 1px solid #cacaca;
  width: 90px;
}

.icon {
  margin: 8px;
  max-width: 25px;
}
</style>
