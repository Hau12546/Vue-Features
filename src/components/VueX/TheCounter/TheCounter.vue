<template>
	 <h3>{{CounterUpperLimit}}</h3>
</template>


<script>
import { mapGetters } from "vuex";
export default {
	computed:{
		// Couter(){
		// 	return this.$store.getters.CounterUpperLimit;
		// }
		...mapGetters('Counter',['CounterUpperLimit','FinalCounter'])
	},
}
</script>


<style scoped>

</style>