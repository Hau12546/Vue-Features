<template>
  <header>
    <h1>Friend Info Form</h1>
  </header>
  <div class="container">
    <form action="" @submit.prevent="">
      <div class="personal-info">
        <div class="form-inline">
          <label for="" class="text text-title"> Name: </label>
          <input
            type="text"
            class="form-input"
            ref="name"
            placeholder="Name"
          />
        </div>
        <div class="form-inline">
          <label for="" class="text text-title"> Phone: </label>
          <input
            type="text"
            class="form-input"
            ref="phone"
            placeholder="Phone"
          />
        </div>
        <div class="form-inline">
          <label for="" class="text text-title"> Email: </label>
          <input
            type="text"
            class="form-input"
            ref="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div class="btn-inline">
          <button class="btn btn-primary" @click=" SubmitFriendInfo()" type="submit">Add Friend List</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
header {
  padding: 50px;
  background-color: rgb(63, 60, 60);
  color: #ffff;
  font-weight: 900;
}

.container {
  margin-inline: 0 !important;
  padding-block: .5em;
  border: 1px solid rgb(148, 139, 139);
  background-color: rgb(148, 139, 139);
  color: #ffff;
}
.btn-inline{
    display: flex;
    margin-block: .5em;
    padding-inline: 8em;
    justify-content: space-between;
    align-items: center;
    gap: .5em;
}

.personal-info {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: repeat(1, 1fr);
  column-gap: 0.5em;
}

.form-inline {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: .5em;
}
</style>

<script>
export default {
  emits: ["friend-data"],
  data() {
    return {
      id:0,
      name: "",
      phone: "",
      email: "",
    };
  },
  methods: {
    SubmitFriendInfo() {
      let FriendData = {
        id: Number(new Date().getMinutes()),
        name: this.$refs.name.value,
        phone: this.$refs.phone.value,
        email: this.$refs.email.value,
      };
      console.log(FriendData)
      this.$emit('friend-data',FriendData);
    },
  },
};
</script>
