<template>
  <div class="container">
    <UserData @user-data="AddUser" />
    <ul class="nav-list">
      <li class="list-item" v-for="(user, index) in userList" :key="index">
        <p>{{ user.username }}</p>
        <p>{{ user.age }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { UserData } from "./Assignment6/UserData";
export default {
  components: [UserData],
  data() {
    return {
      userList: [],
    };
  },
  methods: {
    AddUser(userData) {
      this.userList.push(userData);
    },
  },
};
</script>
