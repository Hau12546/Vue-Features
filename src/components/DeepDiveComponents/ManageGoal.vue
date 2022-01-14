<template>
    <h3>Manage Goal</h3>
    <input type="text" class="form-input" placeholder="Enter Your Goal..." ref="content">
    <button type="button" class="btn btn-primary" @click="CheckGoal()">Check goal</button>
    <teleport to="body"><ErrorModal :messageTitle="ErrorMessage" @closem-modal="HideError" v-if="ShowError"></ErrorModal></teleport>
</template>


<script>
import ErrorModal from "./ErrorModal";
export default {
    components:{
        ErrorModal
    },
    data(){
        return {
            ErrorComponent:"",
            ErrorMessage:'Should Be Valid',
            ShowError:false
        }
    },

    methods:{
        CheckGoal(){
            const GoalContent = this.$refs.content.value;    
            if(GoalContent.trim().length==0) {
                this.ShowError = true;
                console.log(this.ShowError);
                return;
            }
            this.ErrorComponent = '';
        },

        HideError(value){
            this.ShowError = value;
        }
    },
}
</script>