
import { createApp } from 'vue'
import App from './App.vue'
// import BaseCard from './components/Learning Resource App/UI/BaseCard/BaseCard.vue'
// import BaseButton from './components/Learning Resource App/UI/BaseButton/BaseButton.vue'
// import AlertModal from './components/Learning Resource App/UI/Dialog/AlertModal.vue'
import BaseButton from "./components/Routing/UI/BaseButton.vue"
import router from './router'
const app  =  createApp(App);
app.component('base-button',BaseButton);
// app.component('base-card',BaseCard);
// app.component('alert-modal',AlertModal);
app.use(router);
app.mount('#app');