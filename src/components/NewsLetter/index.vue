<template>
  <div class="container newsl_container">
    <h2>Join our newsletter</h2>
    <div class="form">
      <input type="text" v-model="email" />
      <button @click="submitHandler">Subscribe</button>
    </div>
    <div class="error_label">
      <div>{{error}}</div>
    </div>
    <div class="success_label">
      <div>{{success}}</div>
    </div>
    <div class="small">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam minima nobis voluptates minus sequi qui veritatis ipsam atque voluptate alias, optio sit accusamus nihil doloremque eaque enim odit illo eligendi?</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      error: "",
      success: "",
    };
  },
  methods: {
    submitHandler() {
      let valid = this.validate(this.email);

      if (valid[0]) {
        this.error = "";
        this.addEmail(this.email);
      } else {
        this.error = valid[1];
      }
    },
    validate(email) {
      let valid = [true, ""];

      if (email === "") {
        valid = [false, "Email is empty"];
      }
      if (!/^\S+@\S+\.\S+$/.test(email)) {
        valid = [false, "Enter a valid email"];
      }
      return valid;
    },
    addEmail(email) {
      this.$http
        // eslint-disable-next-line no-useless-escape
        .get(`users.json?orderBy=\"email\"&&equalTo=\"${email}\"`)
        .then((response) => {
          if (Object.getOwnPropertyNames(response.data).length === 0) {
            this.$http
              .post("users.json", {
                email
              })
              .then(() => {
                this.success = "Thank you";
              });
          } else {
            this.success = "Already on the list";
          }
        });
        this.clearSuccess();
    },
    clearSuccess() {
      setTimeout(() => {
        this.email = '',
        this.success = ''
      }, 3000);
    }
  },
};
</script>