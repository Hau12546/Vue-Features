<template>
    <div class="container">
        <h3>User Form</h3>
        <form action="">
            <div>
                <label for="">User name</label>
                <input type="text" class="form-input" placeholder="User name" ref="username" >
            </div>
            <div>
                <label for="">User age</label>
                <input type="text" class="form-input" ref="age" placeholder="User age">
            </div>
            <div>
                <button type="button" class="btn btn-primary">Add User</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    emits:['user-data'],
    data(){
    },
    methods:{
        GetUserData(){
            let UserData = {
                username:this.$ref.username.value,
                age:this.$ref.age.value
            };
            this.$emit('user-data',UserData);
        }
    },
}
</script>