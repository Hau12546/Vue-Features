<template>
  <FriendInfo v-on:friend-data="AddFriend"/>
  <div class="container">
    <div class="item-container">
      <h1>Friend List</h1>
    </div>
    <!-- v-for="(friend, index) in FriendList" v-bind:key="index" -->
    <!-- :name="friend.name"
        :phone="friend.phone"
        :email="friend.email"
        :isFavourite="friend.like" -->
    <div class="list">
      <FriendDetail
        v-for="(friend, index) in FriendList"
        v-bind:key="index"
        :id="index"
        :="friend"
        v-on:friend-ID="DeleteFriend"        
        v-on:toggle-checked="ToggleBestFriend"
      />
    </div>
  </div>
</template>

<style>
.container {
  max-width: 100%;
  margin-inline: 30%;
}
.item-container {
  background-color: blueviolet !important;
}

.list {
  display: block;
  position: relative;
  height: 300px;
  padding: 0.5em;
  scrollbar-width: thin;
}
.list-item-people {
  max-width: 100%;
  margin-inline: 10%;
  margin-block: 1em;
  padding-bottom: 0.5em;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, 1fr);
  box-shadow: 3px 3px 3px 3px rgba(199, 183, 183, 0.664);
  border-radius: 10px;
  border: 1px solid rgb(224, 215, 215);
}

.info-list {
  display: grid;
  -webkit-margin-collapse: collapse;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(2, 1fr);
}

.info {
  margin-block: 0 !important;
}

h1 {
  font-weight: 900;
  color: #ffff;
}

h3 {
  font-weight: 700;
  font-size: 2rem;
  color: rgb(130, 23, 218);
  border-bottom: 3px solid rgb(130, 23, 218);
}

p {
  font-weight: 500;
  font-size: 1.5rem;
  margin-block: 0.5em;
}

.btn[class~="btn-primary"]:hover {
  background-color: rgb(130, 23, 218);
  color: yellow;
}
</style>

<script>
import FriendDetail from "./FriendDetail.vue";
import FriendInfo from "./FriendInfo.vue";

export default {
  components: {
    FriendDetail,
    FriendInfo,
  },
  data() {
    return {
      FriendList: [
        {
          id: 0,
          name: "John Connor",
          phone: "0379564044",
          email: "John4044@gmail.com",
          like: true,
        },
        //   Sara82821@gmail.com
        {
          id: 1,
          name: "Sara Connor",
          phone: "01678282821",
          email: "",
          like: false,
        },
      ],
    };
  },
  methods: {
    ToggleBestFriend(friendID) {
        this.FriendList.find((value)=>value.id == friendID).like != true;
    },
    AddFriend(friendData){
      this.FriendList.push(friendData);
    },

    DeleteFriend(friendID){
      const TargetIndex = this.FriendList.findIndex((value)=>value.id == friendID);
      this.FriendList.splice(TargetIndex,1);
    },
  },
  computed:{
  },
  beforeMount() {
    //   this.FriendDetail.push();
  },
};
</script>
