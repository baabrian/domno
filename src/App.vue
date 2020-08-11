<template>
  <div>
    <Header />
    <div>
      <Featured />
      <Menu />
      <CallUs />
      <NewsLetter />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header-Footer/Header";
import Footer from "./components/Header-Footer/Footer";
import Featured from "./components/Featured/index.vue";
import Menu from "./components/Menu/index.vue";
import CallUs from "./components/CallUs.vue/index.vue";
import NewsLetter from "./components/NewsLetter/index.vue";

export default {
  components: {
    Header,
    Footer,
    Featured,
    Menu,
    CallUs,
    NewsLetter,
  },
};
</script>

<style >
@import "./assets/style.css";
</style>