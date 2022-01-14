import { createRouter, createWebHistory } from 'vue-router';

// import ProductsList from './components/VuexExercises/OtherComponents/pages/ProductsList.vue';
// import UserCart from './components/VuexExercises/OtherComponents/pages/UserCart.vue';
// import ShopAdmin from './components/VuexExercises/OtherComponents/pages/ShopAdmin.vue';
// import LoginPage from './components/VuexExercises/OtherComponents/AuthPage/LoginPage.vue';
// import CoachMainPage from './components/CoachFinder/Pages/CoachMainPage/CoachMainPage.vue'
// import CoachList from './components/CoachFinder/Pages/CoachPage/CoachList/CoachList.vue'
// import MenuBar from './components/CoachFinder/Pages/Menu/MenuBar.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    // { path: '/cart', component: UserCart },
    // { path: '/admin', component: ShopAdmin },
    // { path: '/AuthPage', component: LoginPage },
    // { path: '/', redirect: '/AuthPage' },
    // { path: '/', redirect: '/CoachMainPage' }
  ]
});

export default router;