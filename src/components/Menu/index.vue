<template>
  <div class="container menu_container">
    <div class="top" v-scroll-reveal.reset>
      <h2>Menu</h2>
    </div>
    <div class="buttons">
      <MdButton
        v-scroll-reveal.reset="{delay:250}"
        v-for="(button,index) in buttons"
        :key="index"
        :class="button.active ? 'md-raised' : ''"
        @click="changeMenu(button.name)"
      >{{button.name}}</MdButton>
    </div>
    <div class="products_items" v-scroll-reveal.reset="{delay:500}">
      <md-card
        v-for="(product,index) in products"
        :key="index"
        v-show="product.type === activeProduct"
      >
        <md-card-media md-ratio="16:9">
          <img :src="require(`../../assets/images/products/${product.img}`)" />
        </md-card-media>
        <md-card-header>
          <h2 clas="md-title">{{product.name}}</h2>
          <div class="md-subhead">
            <span>$ {{product.price}}</span>
          </div>
        </md-card-header>
        <md-card-content>{{product.desc}}</md-card-content>
      </md-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        {
          name: "pizza",
          active: true,
        },
        {
          name: "burgers",
          active: false,
        },
        {
          name: "salat",
          active: false,
        },
        {
          name: "dessert",
          active: false,
        },
      ],
      products: [],
      activeProduct: "pizza",
    };
  },
  methods: {
    changeMenu(value) {
      this.buttons.forEach((item) => {
        if (item.name === value) {
          item.active = true;
          this.activeProduct = value;
        } else {
          item.active = false;
        }
      });
    },
  },
  created() {
    this.$http
      .get("products.json")
      .then((response) => response.json())
      .then((data) => {
        let list = [];

        for (let key in data) {
          list.push({
            ...data[key],
            id: key,
          });
        }

        this.products = list;
      });
  },
};
</script>

<style scoped>
.md-card {
  width: 20%;
  margin: 20px;
}

.products_items {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>