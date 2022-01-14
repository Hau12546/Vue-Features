<template>
    <div>
        <form action="">
            <h1>My Course Goals</h1>
            <div class="item-container d-flex">
                <input type="text" class="form-input" placeholder="Enter Goals"  v-model="NewGoal">
                <button class="btn btn-secondary" type="button" v-on:click="SetGoal()">Add Goals</button>
            </div>
            <ul class="nav-list"  v-for="(item,index) in GoalList" v-bind:key="index">
                <li class="list-item" v-on:click="RemoveGoal(index)">{{item.id}} - {{item.title}}</li>
            </ul>
        </form>
    </div>
</template>


<style>
.nav-list{
    display: block;
    position: relative;
    max-height: 200px;
    padding: .5em;
    margin-inline: 40%;
    max-width: 100%;
    list-style-type: disc;
    background-color: #8ea094;
    color: #FFFF;
    overflow: auto;
}

.list-item{
    font-size: 1.25rem;
    font-weight: 600;
    font-family: 'Times New Roman', Times, serif;
    max-width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    background-color: rgb(42, 45, 202)!important;
}

</style>


<script>
export default {
    data(){
        return {
            GoalList:[{title:'No Goals Yet!'}],
            NewGoal:'',
        }
    },
    methods:{
        SetGoal(){
            if(this.GoalList[0].title == 'No Goals Yet!') this.GoalList.splice(0,1);
            let Goal = {id:0,title:''};
            Goal.title = this.NewGoal;
            Goal.id = this.GoalList.length+1;
            this.GoalList.push(Goal);
        },
        RemoveGoal(index){
            this.GoalList.splice(index,1);
            this.GoalList.forEach((value,index)=>{
                value.id = index+1;
            });
            if(this.GoalList.length==0) this.GoalList = [{title:'No Goals Yet!'}];
        },
    },

    computed: {
    },
}
</script>