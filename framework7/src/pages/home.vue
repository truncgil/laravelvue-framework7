<template>
  <f7-page
  
  >
    <f7-navbar title="Truncgil E-Commerce App">

        <f7-nav-right>
          <f7-link href="/login/" icon-ios="f7:square_list_fill" icon-aurora="f7:square_list_fill" icon-md="material:person" text="Login"></f7-link>
          <f7-link href="/cart/" icon-ios="f7:square_list_fill" icon-aurora="f7:square_list_fill" icon-md="material:shopping_cart" text="Carts"></f7-link>

        </f7-nav-right>
    </f7-navbar>
    <f7-block>
      <f7-row>
        <f7-col  v-for="(product,index) in products" style="min-width: 49%">
          <f7-card class="demo-card-header-pic">
            <f7-card-header class="no-border" valign="bottom" :style="`
                background-image: url(${product.picture});
                `">
              <span>{{product.title}} {{index}}</span>
            </f7-card-header>
            <f7-card-content>
              <p>
                {{product.description}}
              </p>
            </f7-card-content>
            <f7-card-footer>
              <f7-link>{{product.price}}</f7-link>
              <f7-link 
              :href="`/product/${product.id}/`"
              >Detail</f7-link>
            </f7-card-footer>
          </f7-card>
        </f7-col>


      </f7-row>


    </f7-block>
  
    
  
  </f7-page>
  </template>
  <script>
    import { f7 } from 'framework7-vue';
    import { useStore } from 'framework7-vue';
    import store from '../js/store'
  
    export default {
      
      data() {
        const products = useStore('products');
        return {
          products,
          loginScreenOpened: false,
          username: '',
          password: '',
        };
      },
      
      methods: {
        signIn() {
          f7.dialog.alert(`Username: ${self.username}<br>Password: ${self.password}`, () => {
            f7.loginScreen.close();
          });
        },
      },
    }
  </script>