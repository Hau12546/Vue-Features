import UsersList from "./components/Routing/users/UsersList.vue";
import TeamsList from "./components/Routing/teams/TeamsList.vue"
import TeamMembers  from "./components/Routing/teams/TeamMembers.vue";
import TeamFooter from "./components/Routing/teams/TeamFooter.vue";
import UserFooter from "./components/Routing/users/UserFooter.vue";
import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
    history:createWebHistory(),
    routes:[
        // {path:'/',redirect:'/teams'}, //redirect to default path when no page found
        {name:'teams',path:'/teams',components: {default:TeamsList, footer:TeamFooter},//name: property replace the name in the path
        children:[
            {name:'team-members',path:':teamId',components: {default:TeamMembers,footer:TeamFooter}, props:true}, // props:true => set params transfer as props
        ],
        // meta:{needAuth:confirm('Do you want to leave ?')},
        },// alias:'/' is not redirect but rather load the same route with different alias
        {name:'users',path:'/users',components:{default:UsersList,footer:UserFooter},
        beforeEnter(to, from, next){
            console.log('Before Enter');
            next();
        }},
        {path:'/:notFound(.*)', redirect:'/teams'}, // check for wild routes '/:notFound(.*)' to redirect to default
    ],
    linkActiveClass:'active',
    scrollBehavior(to, from, savedPosition){
        if(savedPosition){
            return savedPosition;
        }
        return {left:0,top:0};
    },
});
router.beforeEach((to,from,next)=>{
    console.log('Before Each');
    // if(to.meta.needAuth){
    //     next();
    // }else{
    //     next(false);
    // }
    // if(to.name=='team-members'){
    //     next(); if next(true) allow navigation to the target page, next(false) cancel navigate to the target page
    // }else{
    //     next({name:'team-members',params:{teamId:'t2'}}); // act as the default route
    // }
    next();
});

router.afterEach((to,from,next)=>{
    //use to send data to server
    console.log('After Each');
})

export default router;