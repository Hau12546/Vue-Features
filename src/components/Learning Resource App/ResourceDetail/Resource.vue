<template>
  <li>
    <base-card>
      <template v-slot:default>
        <header>
          <h3>{{title}}</h3>
          <base-button @click="Remove(id)" mode="flat" type="button" ><template v-slot:customButton>Delete</template></base-button>
        </header>
        <p>{{description}}</p>
        <nav>
          <a v-bind:href="link">View Resource</a>
        </nav>
      </template>
    </base-card>
  </li>
</template>

<script >
  export default {
    components: {
    },
    inject:['RemoveResource'],
    props:{
      id:{
        type:Number
      },
      title: {
        type: String,
        require: true,
        default: 'Relevent Information'
      },
      description: {
        type: String,
        require: true,
        default: 'NA'
      },
      link: {
        type: String,
        require: false
      }
    },
    methods:{
      Remove(id){
        this.RemoveResource(id);
      },
    }
  };
</script>

<style scoped>
  li {
    margin: auto;
    max-width: 40rem;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h3 {
    font-size: 1.25rem;
    margin: 0.5rem 0;
  }

  p {
    margin: 0.5rem 0;
  }

  a {
    text-decoration: none;
    color: #ce5c00;
  }

  a:hover,
  a:active {
    color: #c89300;
  }
</style>