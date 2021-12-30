import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router"
import BaseCard from './components/HttpRequests/UI/BaseCard.vue'
import BaseButton from './components/HttpRequests/UI/BaseButton.vue'
import AlertModal from './components/Learning Resource App/UI/Dialog/AlertModal.vue'
import  Store  from './components/VueX/StateManagement/Vuex';
const router = createRouter({
	history: createWebHistory(),
	routes:[
		{path:'/teams',components: ()=>import('./components/Routing/teams/TeamsList.vue')},
		{path:'/users',components: ()=>import('./components/Routing/users/UsersList.vue')},
	],
	linkActiveClass:'active',
});
const app  =  createApp(App);
// app.use(router);
app.use(Store);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('alert-modal',AlertModal);
app.mount('#app');

// app.component('TheResources',TheResources)
