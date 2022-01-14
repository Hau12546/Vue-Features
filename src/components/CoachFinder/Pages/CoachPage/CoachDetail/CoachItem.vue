<template>
	<main class="detail">
		<section class="personal-info">
			<div class="image">
				<img :src="TrainerProfile.avatar" alt="" class="img">
				<span class="rating"><i class="fa fa-star" aria-hidden="true"></i> {{TrainerProfile.rates}}</span>
			</div>
			<div class="form-inline">
				<h3>{{TrainerProfile.firstName}} {{TrainerProfile.lastName}}</h3>
				<p class="self-introduction text-limit">
					{{TrainerProfile.description}}
				</p>
					<div class="contacts">
						<button type="button" @click="ToContacts()" class="btn btn-danger"><span for="">Contacts</span></button>
						<button type="button" v-if="IsAuthorized"  @click="ToRegister()" class="btn btn-warnning"><span for="">Register</span></button>
						<button type="button" @click="ToDetail()" class="btn btn-warnning"><span for="">View Detail</span></button>
					</div>
			</div>
		</section>
	</main>
</template>


<script>
	import {
		mapGetters
	} from 'vuex'
	export default {
		props:['TrainerProfile'],
		data() {
			return {
				Trainer: this.TrainerProfile
			}
		},
		computed: {
			...mapGetters('CoachStore', ['GetTrainerProfile','IsTrainer']),
			...mapGetters(['IsAuthorized'])
		},
		methods:{
			ToContacts(){
				this.$store.state.CoachStore.TargetTrainerID = this.TrainerProfile.id;
				localStorage.setItem('TRAINER_ID',JSON.stringify(this.TrainerProfile.id));
				this.$router.push({name:'contact'});
			},
			ToRegister(){
				const Route = `/coach-register`;
				this.$router.push(Route);
			},
			ToDetail(){
				console.log(this.$store['CoachModule'])
				this.$store.dispatch('ToDetail',{router:this.$router,id:this.Trainer.id});
			},
		},
		beforeMount(){
			console.log(this.TrainerProfile);
		},
	}
</script>


<style scoped>
	.detail {
		display: block;
		padding: .5em;
		margin-block: 1em;
		max-width: 100%;
		min-height: 200px;
		position: relative;
		background-image: url('https://cdn.wallpapersafari.com/85/48/QYjuyg.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: top left;
		border: 1px solid rgb(34, 85, 224);
		box-shadow: -4px 4px rgb(34, 85, 224),
			-1px 1px rgb(34, 85, 224),
			-4px 4px rgb(34, 85, 224);
		overflow: hidden;
	}

	.personal-info {
		height: 250px;
		display: grid;
		padding: .5em;
		column-gap: .2em;
		grid-template-columns: 20% 75%;
		grid-template-rows: repeat(1, 1fr);
	}

	.image {
		display: block;
		position: relative;
	}

	.img {
		width: 100%;
		height: inherit;
		object-fit: cover;
	}

	.rating {
		opacity: 0;
		position: absolute;
		left: 0;
		z-index: 100px;
		padding: .5em;
		background-color: rgba(165, 86, 86, 0.63);
		font-size: 1.75rem;
		font-weight: 700;
		color: rgb(251, 247, 247);
		text-align: center;
		transition: all 300ms ease-in-out;
		transform: translateY(100%);
	}

	.image:hover .rating{
		opacity: 1;
		transform: translateY(0);
	}

	.form-inline {
		display: block;
		position: relative;
	}

	.form-inline>h3,
	p {
		width: 100%;
		padding-inline: .5em;
		font-size: 1.25rem;
		font-weight: 600;
		color: #FFFF;
		word-break: break-all;
	}

	.text-limit {
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}

	.contacts {
		display: grid;
		padding-inline: .5em;
		column-gap: .5em;
		row-gap: 1em;
		grid-template-columns: repeat(3, 20%);
		grid-template-rows: repeat(auto, 1fr);
	}

	.btn {
		padding: .5em;
		font-size: 1.25rem;
		font-family: 'Times New Roman', Times, serif;
		color: #FFFF;
		border: 1px solid #FFFF;
		/* border-radius: 48px; */
		box-shadow: -3px 3px 4px 1px rgb(17, 67, 231);
		background-color: #1042e7;
		transition: all 300ms ease-in-out;
	}

	.btn:hover{
		background-color: rgb(185, 70, 70);
		transform: scale(1.2);
	}
</style>