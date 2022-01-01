import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
// import {bootstrap} from 'bootstrap'
// import { IconsPlugin ,BootstrapVue} from 'bootstrap-vue' 
import BaseCard from './components/HttpRequests/UI/BaseCard.vue'
import BaseButton from './components/HttpRequests/UI/BaseButton.vue'
import BaseBage from "./components/VuexExercises/OtherComponents/ui/BaseBadge.vue"
import * as CoachRouter from './components/CoachFinder/CoachRouter/router';
import AlertModal from './components/Learning Resource App/UI/Dialog/AlertModal.vue'
// import  Store  from './components/VueX/StateManagement/Vuex';
// import RootStore from './components/VuexExercises/Store/RootStore/store'
const app  =  createApp(App);
// app.use(Store);
app.use(CoachRouter.router);
// app.use(RootStore);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('alert-modal',AlertModal);
app.component('base-badge',BaseBage);
app.mount('#app');

// app.component('TheResources',TheResources)
