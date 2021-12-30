<template>
  <base-button :type="Button" :mode="flat" @click="NavigateAway()">To Teams</base-button>
  <ul>
    <teams-item
      v-for="(team,index) in teams"
      :key="index"
      :name="team.name"
      :member-count="team.members.length"
    ></teams-item>
  </ul>
</template>

<script>
import BaseButton from '../../../../prj-cmp-09-adding-a-modal-dialog/src/components/UI/BaseButton.vue';
import TeamsItem from './TeamsItem.vue';

export default {
  inject:['teams'],
  components: {
    TeamsItem,
    BaseButton,
  },
  methods:{
    NavigateAway(){
      this.$router.push('/teams');
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
</style>