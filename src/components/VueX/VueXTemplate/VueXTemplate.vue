<template>
		<base-container title="VueX" v-if="ToggleDisplay">
		<the-counter></the-counter>
			<base-button @click="inc({value:10})"><template #customButton>Increase Counter</template></base-button>
			<base-button @click="dec({value:5})"><template #customButton>Decrease Counter</template></base-button>
		</base-container>
		<base-container>
			<user-auth></user-auth>
		</base-container>
</template>


<script>
import BaseContainer from "../UI/BaseContainer.vue";
import BaseButton from "../../Learning Resource App/UI/BaseButton/BaseButton.vue"
import TheCounterVue from '../TheCounter/TheCounter.vue';
import UserAuth from '../UserAuth/UserAuth.vue'
import { mapActions, mapGetters } from "vuex";
export default {
		components:{
			BaseContainer,
			'base-button':BaseButton,
			'the-counter':TheCounterVue,
			'user-auth':UserAuth
		},
		data(){
			return {

			};
		},
		computed:{
		...mapGetters(['ToggleDisplay'])
		},
		methods:{
			// IncreaseCounter(){
			// 	this.$store.dispatch('Increment',{value:10});
			// },
			// DecreaseCounter(){
			// 	this.$store.dispatch('Decrement',{value:5});
			// }
			...mapActions('Counter',['Increment','Decrement']),
			...mapActions('Counter',{inc:'Increment',dec:'Decrement'})
		}
}
</script>


<style scoped>

</style>