<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <!-- <router-link to="/teams/t2">Team2</router-link> -->
  </section>
</template>

<script>
import UserItem from "../users/UserItem";

export default {
  inject: ["users", "teams"],
  props:{
    teamId:{
      type:String,
      require:true,
      default:'t1',
      validate:(value)=>{
        console.log(value);
        return true;
      }
    }
  },
  components: {
    UserItem,
  },
  data() {
    return {
      teamName: "Test",
      members: [
        { id: "u1", fullName: "Max Schwarz", role: "Engineer" },
        { id: "u2", fullName: "Max Schwarz", role: "Engineer" },
      ],
    };
  },
  watch:{
    teamId(newValue){
      this.LoadTeamsDetails(newValue);
    }
  },
  methods: {
    LoadTeamsDetails(ID,route = this.$route) {
      let teamID = route.params["teamId"]; //Get value through params
      if(!ID || typeof(ID)!='string') return;
      let TargetTeam = this.teams.find((value) => value.id == teamID);
      this.teamName = TargetTeam.name;
      this.members = [];
      for (const value of TargetTeam.members) {
        if (this.users.find((value) => value === value)) {
          this.members.push(this.users.find((value) => value === value));
        }
      }
    },
  },
  created() {
    this.LoadTeamsDetails(this.teamId);
    console.log(this.$route.query) // query params are only accessible through $route
    //params can be accessible through props with props:true property
  },
  
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
