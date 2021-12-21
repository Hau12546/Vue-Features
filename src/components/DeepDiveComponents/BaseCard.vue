<template>
  <div class="myStyle">
    <header><slot name="header"></slot></header>
    <slot name="default"></slot>
  </div>
</template>

<style scoped>


 .myStyle {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1em;
}
</style>

<script>
export default {};
</script>
