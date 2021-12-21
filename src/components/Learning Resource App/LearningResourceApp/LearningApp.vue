<template>
  <StoreReosurce :ResourceList="StoreResources"/>
</template>



<script>
import StoreReosurce from "../StoreResources/StoreReosurce";
export default {
  components:{
    StoreReosurce
  },
  data() {
    return {
      StoreResources: [
        {
          id: 0,
          title: "Vue For Beginer",
          description: "The Progressive JavaScript Framework",
          link:'https://vuejs.org/'
        },
      ],
    };
  },
};
</script>
