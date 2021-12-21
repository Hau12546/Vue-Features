<template>
  <section>
    <BaseCard>
      <template v-slot:header>
        <div>
        <h3>{{ fullName }}</h3>
        <p>{{ infoText }}</p>
      </div>
      </template>
      <template v-slot:default><BaseBage :type="role" :caption="role.toUpperCase()"></BaseBage></template>
    </BaseCard>
  </section>
</template>

<script>
import BaseBage from "./BaseBage";
import BaseCard from "./BaseCard";

export default {
  components: {
    BaseBage,
    BaseCard,
  },
  props: ["fullName", "infoText", "role"],
};
</script>

<style>
section {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
