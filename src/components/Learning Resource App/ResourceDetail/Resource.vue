<template>
  <li>
    <div>
      <header>
        <h3>{{title}}</h3>
        <button type="button" class="btn btn-danger">Delete</button>
      </header>
    </div>
    <p>{{description}}</p>
    <nav>
        <a :href="link">View Resource</a>
    </nav>
  </li>
</template>

<style >
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


<script>
export default {
    props:{
        title:{
            type:String,
            require:true,
            default:'Relevent Information'
        },
        description:{
            type:String,
            require:true,
            default:'NA'
        },
        link:{
            type:String,
            require:false
        }
    }
};
</script>
