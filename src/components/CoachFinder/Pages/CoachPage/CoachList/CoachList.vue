<template>
		<main class="container">
				<base8-button @click="Reload(true)"><template #customButton>Reload</template></base8-button>
				<filter-panel @SelectedSuject="FilterTrainer"></filter-panel>
				<!-- <spinner v-if="GetLoading"></spinner> -->
				<base-dialog :show="ISError" @close="Disable">
				<template #header>Load Data</template>
				<template #default>SomeThing Went Wrong</template>
				</base-dialog>
			<section class="Instrutor-list" v-if=" !ISError && TrainerList.length>0">
				<coach-item  :TrainerProfile="trainer" v-for="(trainer,index) in TrainerList" :key="index"></coach-item>
			</section>
		</main>
</template>

<script>
import { mapGetters } from 'vuex';
import CoachItem from "../CoachDetail/CoachItem.vue";
import FilterOptions from './FIlterOptions.vue'
export default {
	components:{
		'coach-item':CoachItem,
		'filter-panel':FilterOptions,
		},
		data(){
			return {
				filteredList:[],
				
			}
		},
		computed:{
			...mapGetters('CoachStore',['GetITSubjectList','GetTrainerList']),
			...mapGetters(['GetLoading','ISError',]),
			TrainerList(){
				if(this.filteredList.length > 0){
					return this.filteredList;
				}
				return this.GetTrainerList;
			}
		},
		methods:{
			FilterTrainer(subject){
				this.filteredList =  this.GetTrainerList.filter((value)=>value.major.includes(subject));
			},
			Disable(){
				this.$store.state.isError = false;
			},
			Reload(load = false){
				this.$store.dispatch('LoadTrainerFromDB',{forceRefresh:load});
				this.filteredList = [];
			}
		},
		beforeCreate(){
			this.$store.dispatch('SaveAuthInfo');
		},
		created(){
			this.$store.commit('Reload');
			this.$store.dispatch('LoadTrainerFromDB',null);
		}
}
</script>

<style scoped>
.container{
	max-width: 100%;
	padding: .1em;
	background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwS6Ni1u2io9MvqTPLM-kFycG_SwSyfmf_VxLhQK45hLqtmpW1GWrzsA3gGCOsQ67ybak&usqp=CAU');
	background-repeat: no-repeat;
	background-size: cover;
}

.Instrutor-list{
	max-width: 100%;
	max-height: 500px;
	display: block;
	position: relative;
	margin-block: .5em;
	margin-inline: 20%;
	padding: 1em;
	border: 10px solid rgb(74, 19, 226);
	border-radius: 20px;
	overflow-y: auto;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background:  transparent; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #b6b4b4; 
		border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(190, 20, 20); 
}
</style>
