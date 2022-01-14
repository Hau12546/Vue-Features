<template>
			<split-container>
				<router-view name="menu"></router-view>
				<router-view v-slot="slotProps">
					<transition name="route" mode="out-in">
						<component :is="slotProps.Component"></component>
					</transition>
				</router-view>
			</split-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	computed:{
		...mapGetters(['GetAutoLogout']),
	},
	watch:{
		GetAutoLogout(newValue, oldValue){
			if(newValue && newValue != oldValue){
				this.$router.push({path:'/coach-list'});
			}
		}
	}
}
</script>

<style  scoped>
	.main-component{
		overflow-y: auto;
		overflow-x: hidden;
		height: 100vh;
		padding: 0;
		display: grid;
		grid-template-columns: 15% 85%;
		grid-auto-rows: repeat(1,fr);
		font-family: 'Courier New', Courier, monospace;
		font-weight: 300;
		font-size: 20px;
	}

.route-enter-active{
		animation: Show 1s ease-in-out;
}

.route-leave-active{
	animation: Show 1s ease-in-out;
	animation-direction: reverse;
}

@keyframes Show {
		from{
			opacity: 0;
		}

		to{
			opacity: 1;
		}
}

</style>