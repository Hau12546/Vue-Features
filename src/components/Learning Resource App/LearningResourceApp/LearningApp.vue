<template>
  <the-header></the-header>
  <TheResources/>
</template>



<script>
import StoreReosurce from "../StoreResources/StoreReosurce";
import TheHeader from '../TheHeader/TheHeader.vue';
import TheResources from "../The Resources/TheResources.vue";


export default {
  components:{
    'the-header':TheHeader,
    TheResources,
  },
};
</script>
