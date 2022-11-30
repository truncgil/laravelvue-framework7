/* my-app.js */

import { createApp } from 'vue'

// Import F7 Bundle
import Framework7 from 'framework7/lite-bundle'

// Import F7-Vue Plugin Bundle (with all F7 components registered)
import Framework7Vue, { registerComponents } from 'framework7-vue/bundle'

// Init F7-Vue Plugin
Framework7.use(Framework7Vue);

// Import Main App component
import App from './components/Truncgil.vue';

// Init App
const app = createApp(App);

// Register all Framework7 Vue components
registerComponents(app);

// Mounte Vue App
app.mount('#app');