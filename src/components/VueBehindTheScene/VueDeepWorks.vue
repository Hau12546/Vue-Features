<template>
    <div class="container" id="app1">
        <div class="item-container">
            <input type="text" class="form-input" placeholder="Enter Message" ref="UserMessage">
            <button class="btn btn-primary" type="button" v-on:click="SendMessage()">Send Message</button>
        </div>
        <p class="catch-phrase">
            {{sentMessage}}
        </p> 
    </div>
</template>

<script>
export default{
    data(){
        return {
            inputedMessage:'',
            sentMessage:''
        }
    },
    methods:{
        SaveInput(e){
            this.inputedMessage = e.target.value;
        },
        SendMessage(){
            // this.sentMessage = this.inputedMessage;
            this.sentMessage = this.$refs.UserMessage.value;
        },
    }
}


</script>