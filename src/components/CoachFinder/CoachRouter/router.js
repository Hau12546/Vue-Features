import { createRouter, createWebHistory } from "vue-router";
import CoachList from '../Pages/CoachPage/CoachList/CoachList.vue'
import CoachRegister from '../Pages/CoachPage/CoachRegister/CoachRegister.vue'
import CoachDetail from '../Pages/CoachPage/CoachDetail/CoachDetail.vue'
import CoachContact from '../Pages/Request/CoachContact/CoachContact.vue'
import RequestList from '../Pages/Request/RequestList/RequestList.vue'
import UserAuth from '../Pages/Auth/UserAuth.vue'

import MenuBar from '../Pages/Menu/MenuBar.vue'

const CoachRouter =  createRouter({
	history:createWebHistory(),
	routes:[
		{path:'/coach-list',components:{default:CoachList, 'menu':MenuBar,}},
		{path:'/coach-detail',components:{default:CoachDetail, 'menu':MenuBar}},
		{name:'contact' ,path:'/coach-contact',components:{default:CoachContact, 'menu':MenuBar}},
		{path:'/coach-register',components:{default:CoachRegister,'menu':MenuBar}},
		{path:'/request-list',components:{default:RequestList, 'menu':MenuBar}},
		{path:'/authentication',components:{default:UserAuth,'menu':MenuBar}},
		{path:'/',redirect:'/authentication'},
		{path:'/:notFound(.*)',redirect:'/authentication'}	
	]
});

export default CoachRouter;