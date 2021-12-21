<template>
  <header>
    <slot name="header">
    </slot>
  </header>
</template>

<script>
export default {
  data() {
    return {
      headerflg: false,
    };
  },
  beforeCreated() {
      console.log(this.$slots.header)
    if (this.$slots.header) {
      this.headerflg = true;
      return;
    }
    this.headerflg = false;
  },

};
</script>
