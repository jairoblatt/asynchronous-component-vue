<template>
  <div id="app">
    <div class="container">
      <div class="row d-flex justify-center margin">
        <div class="col-10">
          <Card1 :character="items[0]" />
        </div>
        <div class="col-10">
          <Card2 :character="items[1]" />
        </div>
        <div class="col-10">
          <Card3 :character="items[3]" />
        </div>
        <div class="col-10">
          <Card4 :character="items[4]" />
        </div>
        <div class="col-10">
          <Card5 :character="items[5]" />
        </div>
        <div class="col-10">
          <Card6 :character="items[6]" />
        </div>
        <div class="col-10">
          <Card7 :character="items[7]" />
        </div>
        <div class="col-10">
          <Card8 :character="items[8]" />
        </div>
        <div class="col-10">
          <Card9 :character="items[9]" />
        </div>
        <div class="col-10">
          <Card10 :character="items[10]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HTTPClient from "./axios";

import SkeletonBox from "./components/SkeletonBox";

import lazyLoadComponent from "./lazy-load-component";

import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import Card4 from "./components/Card4";
import Card5 from "./components/Card5";
import Card6 from "./components/Card6";
import Card7 from "./components/Card7";

const defaultOptions = {
  loading: SkeletonBox,
  loadingData: {
    props: {
      width: `100%`,
      height: `20em`,
    },
  },
};

export default {
  name: "App",

  components: {
    Card1,
    Card2,
    Card3,
    Card4,
    Card5,
    Card6,
    Card7,
    Card8: lazyLoadComponent({
      ...defaultOptions,
      componentFactory: () => import("./components/Card8"),
    }),
    Card9: lazyLoadComponent({
      ...defaultOptions,
      componentFactory: () => import("./components/Card9"),
    }),
  },

  data: () => ({
    items: [],
  }),

  async created() {
    const { data } = await HTTPClient.get("/character/", {
      params: { page: 1 },
    });
    this.items = [...data.results];
  },
};
</script>

<style>
@import "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css";
.margin {
  padding-top: 150px;
}
</style>
