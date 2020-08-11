<template>
  <footer>
    <div class="container">
      <img :src="logoIcon" />
      <div class="contact">
        <div>Contact us</div>
        <div>XXX-XXXX</div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from "../../assets/images/logo.png";
export default {
  data() {
    return {
      logoIcon: Logo,
    };
  },
};
</script>