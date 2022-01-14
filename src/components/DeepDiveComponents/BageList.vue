<template>
  <section>
    <Bageheader></Bageheader>
    <ul>
      <li>
        <BaseBage type="admin" caption="ADMIN"></BaseBage>
      </li>
      <li>
        <BaseBage type="author" caption="AUTHOR"></BaseBage>
      </li>
    </ul>
  </section>
</template>

<style>
section h2 {
  margin: 0.5rem 0;
  color: #3a3a3a;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

li {
  margin-right: 1rem;
}
</style>

<script>
import  BaseBage  from "./BaseBage";
import  Bageheader  from "./Bageheader";

export default {
  components:{
    BaseBage,
    Bageheader
  }
}
</script>