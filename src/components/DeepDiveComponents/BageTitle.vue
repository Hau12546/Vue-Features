<template>
  <Bageheader>
    <template v-slot:header>
        <h2>{{title}}</h2>
    </template>
  </Bageheader>
</template>

<script>
import Bageheader from "./Bageheader";
export default {
    data(){
        return {
            title:'Available Badges'
        }
    },
  components: {
    Bageheader,
  },
};
</script>
