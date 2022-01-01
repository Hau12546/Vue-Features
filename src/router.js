import { createRouter, createWebHistory } from 'vue-router';

// import ProductsList from './components/VuexExercises/OtherComponents/pages/ProductsList.vue';
import UserCart from './components/VuexExercises/OtherComponents/pages/UserCart.vue';
import ShopAdmin from './components/VuexExercises/OtherComponents/pages/ShopAdmin.vue';
import LoginPage from './components/VuexExercises/OtherComponents/AuthPage/LoginPage.vue';
import CoachMainPage from './components/CoachFinder/Pages/CoachMainPage/CoachMainPage.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/CoachMainPage', component:CoachMainPage },
    // { path: '/cart', component: UserCart },
    // { path: '/admin', component: ShopAdmin },
    // { path: '/AuthPage', component: LoginPage },
    // { path: '/', redirect: '/AuthPage' },
    { path: '/', redirect: '/CoachMainPage' }
  ]
});

export default router;