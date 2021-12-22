<template>
  <ul>
    <Resource :title="item.title" 
    :id="item.id"
    :description="item.description" 
    :link="item.link" v-for="(item,index) in ResourceList"
    :key="index"></Resource>
  </ul>
</template>


<script>
  import Resource from "../ResourceDetail/Resource"
  export default {
    components: {
      Resource
    },
    // props:['ResourceList'],
    inject: ['ResourceList'],
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  * {
    box-sizing: border-box;
  }

  html {
    font-family: 'Roboto', sans-serif;
  }

  body {
    margin: 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    margin: auto;
    max-width: 40rem;
  }
</style>