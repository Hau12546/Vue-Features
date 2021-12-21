<template>
    <button type="button" class="btn btn-primary" @click="SetGoalstatus('ActiveGoal')">Set Active Goals</button>
    <button type="button" class="btn btn-primary" @click="SetGoalstatus('ManageGoal')">Set Manage Goals</button>
    <!-- <ActiveGoal v-if="selectedGoal=='Active'"/>
    <ManageGoal v-if="selectedGoal=='Manage'"/> -->
    <keep-alive>
        <component :is="selectedGoal"></component>
    </keep-alive>
</template>


<script >
import ActiveGoal from "./ActiveGoal";
import ManageGoal from "./ManageGoal";
export default{
    components:{
        ActiveGoal,
        ManageGoal
    },
    data(){
        return {
            activeGoal:'ActiveGoal',
            manageGoal:'ManageGoal',
            selectedGoal:'ActiveGoal'
        }
    },
    methods:{
        SetGoalstatus(value){
            switch (value) {
                case this.activeGoal:
                    this.selectedGoal=value;
                    break;
                case this.manageGoal:
                    this.selectedGoal=value;
                    break;
                default:
                    this.selectedGoal = 'ActiveGoal';
                    break;
            }
        }
    }
}
</script>