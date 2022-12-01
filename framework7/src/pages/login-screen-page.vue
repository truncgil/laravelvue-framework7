<template>
<f7-page no-toolbar no-navbar no-swipeback login-screen>
  <f7-login-screen-title>Framework7</f7-login-screen-title>
  <f7-list form>
    <f7-list-input
      label="Username"
      type="text"
      placeholder="Your username"
      :value="username"
      @input="username = $event.target.value"
    ></f7-list-input>
    <f7-list-input
      label="Password"
      type="password"
      placeholder="Your password"
      :value="password"
      @input="password = $event.target.value"
    ></f7-list-input>
  </f7-list>
  <f7-list>
    <f7-button round fill @click="signIn">Sign In</f7-button>
    <f7-block-footer>Not a member yet?<br></f7-block-footer>
    <f7-button round outline>Create new account</f7-button>
  </f7-list>
</f7-page>
</template>
<script>
  import { f7 } from 'framework7-vue';

  export default {
    props: {
      f7router: Object,
    },
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      signIn() {
        const self = this;
        f7.dialog.alert(`Username: ${self.username}<br>Password: ${self.password}`, () => {
          self.f7router.back();
        });
      },
    },
  }
</script>