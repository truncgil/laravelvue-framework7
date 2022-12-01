<template>
  <f7-page name="product">
    <f7-navbar :title="product.title" back-link="Back"></f7-navbar>
    <f7-block-title>About {{product.title}}</f7-block-title>
    <f7-block 
    :style="`
      background-image: url(${product.picture});

      `" class="cover" alt="">
    </f7-block>
    <f7-block strong>
      
      
      {{product.description}}
      <f7-button
      fill
      round
      @click="addToCart()"
      >Add to Cart</f7-button>
    </f7-block>

  </f7-page>
</template>
<script>
  import { f7 } from 'framework7-vue';
  import { useStore } from 'framework7-vue';

  export default {
    props: {
      f7route: Object,
    },
    setup(props) {
      const products = useStore('products');
      const productId = props.f7route.params.id;
      let currentProduct;
      products.value.forEach(function (product) {
        if (product.id === productId) {
          //console.log(product);
          currentProduct = product;
        }
      });
      return {
        product: currentProduct,
      };
    },
    methods: {
      addToCart() {
          f7.dialog.alert("Product is added to cart", () => {
           
          });
        },
      },
  };
</script>
