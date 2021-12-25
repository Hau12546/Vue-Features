<template>
  <base-button type="button" class="myButton" @click="NavigateToTeams()"><template #commonButton>Move to teams</template></base-button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem';

export default {
  components: {
    UserItem,
  },
  beforeRouteEnter (to, from, next) {
    console.log('Before Component Enter');
    next();
  },
  beforeRouteLeave (to, from, next) {
    // check if all valids are true then you can leave the page
    console.log("Before Component Leaves");
    const iAllValid = confirm('Do you want to leave');
    if(iAllValid){
      next();
    }else{
      next(false);
    }
  },
  inject: ['users'],
  methods:{
    NavigateToTeams(){
      this.$router.push('/teams');
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>