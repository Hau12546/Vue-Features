import { createRouter, createWebHistory } from "vue-router";
import CoachList from '../Pages/CoachPage/CoachList/CoachList.vue'
import MenuBar from '../Pages/Menu/MenuBar.vue'

const router =  createRouter({
	history:createWebHistory(),
	routes:[
		{path:'/coach-list',components:{default:CoachList, 'menu':MenuBar}},
	]
});

export default router;