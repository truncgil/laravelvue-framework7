<template>
  <!-- Main Framework7 App component where we pass Framework7 params -->
  <f7-app v-bind="{ theme: 'auto', name: 'My App', id: 'com.demoapp.test' }">
    <!-- Your main view, should have "main" prop -->
    <f7-view main>
      <!-- Initial Page -->
      <f7-page>
        <!-- Top Navbar-->
        <f7-navbar title="Awesome App"></f7-navbar>
        <!-- Toolbar-->
        <f7-toolbar bottom>
          <f7-link>Link 1</f7-link>
          <f7-link>Link 2</f7-link>
        </f7-toolbar>
        <!-- Page Content -->
        <p>Page content goes here</p>
        <f7-link href="/about/">About App</f7-link>
      </f7-page>
    </f7-view>
  </f7-app>
</template>

<script>
import { f7App, f7View } from 'framework7-vue';

export default {
  components: {
    f7App,
    f7Navbar,
  },
}
</script>
