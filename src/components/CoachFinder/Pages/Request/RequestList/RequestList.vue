<template>
	<base-container>
		<template #customContainer>
			<base-heading :HeaderType="'h1'"><template #h1>Request Logs</template></base-heading>
			<ul v-if="HasRequests">
				<request v-for="(request,index) in GetRequestList" :key="index" :Request="request">
				</request>
			</ul>
			<base-heading v-if="!HasRequests"  :HeaderType="'h3'"><template #h3>No Requests Found</template></base-heading>
		</template>
	</base-container>
</template>
<script>
	import {
		mapGetters
	} from 'vuex';
	import RequestDetail from "../RequestDetail/RequestDetail.vue";
	export default {
		components: {
			'request': RequestDetail
		},
		data() {
			return {

			}
		},
		computed: {
			...mapGetters('RequestStore', ['GetRequestList','HasRequests'])
		},
		methods: {},
		beforeCreate(){
			this.$store.state.CoachStore.TargetTrainerID = JSON.parse(localStorage.getItem('TRAINER_ID') || '{}');
			this.$store.dispatch('SaveAuthInfo');
		},
		created(){
				this.$store.dispatch('LoadRequestFromDB',null,{root:true});
		},
	}
</script>

<style scoped>
	ul {
		list-style: none;
		margin-inline: 20%;
		padding-block: 1em;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(auto,1fr);
		row-gap: 1em;
		overflow-y: auto;
	}

	
</style>