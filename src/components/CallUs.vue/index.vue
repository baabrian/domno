<template>
  <div class="call_us_container">
    <div class="container">
      <div class="first" v-scroll-reveal.reset="{delay: 200,scale: 2}">
        <h1>Hungry ?</h1>
      </div>
      <div
        class="second"
        v-scroll-reveal.reset="{delay: 400,scale: 2, afterReveal:()=>{
          secondAnim = true;
          }}"
      >
        <div v-if="secondAnim">
          <Anim />
        </div>
      </div>
      <div class="third" v-scroll-reveal.reset="{delay: 600,scale: 2}">
        <span>Give us a call</span>
        <span>XXX-XXXX</span>
      </div>
    </div>
  </div>
</template>

<script>
import Anim from "./anim";
export default {
  data() {
    return {
      secondAnim: false,
    };
  },
  components: {
    Anim,
  },
};
</script>