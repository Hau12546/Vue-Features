<template>
	<base-container>
		<template #customContainer>
			<section class="personal-info">
				<div class="image">
					<img :src="Detail.avatar" alt="">
				</div>
				<div class="personal-data">
					<base-label>Trainer Name: {{Detail.firstName}} - {{Detail.lastName}}</base-label>
					<base-label>Trainer Country: {{Detail.avatar}}</base-label>
					<base-label>Date of Birth:</base-label>
					<base-label>Years of Experience:</base-label>
					<base-label>Majoring: {{Detail.major[0]}}</base-label>
					<base-label>Certificate:</base-label>
					<base-label>Current Occupation:</base-label>
					<base-label>Wages Per Hour: {{Detail.wages}}</base-label>
				</div>
			</section>
			<section class="technnical-info">
				<base-heading :HeaderType="'h3'"><template #h3>Programming Language</template></base-heading>
				<div class="programming">
					<div class="inline">
						<transition-group name="carouser" >
							<div class="carouser" v-for="(item,index) in GetTrendingIT" :key="index" >
								<img :src="item.link" :key="index" alt="">
							</div>
						</transition-group>
					</div>
					<div class="next">
						<button @click="Next()" type="button" class="btn-carouser next"><i class="fa fa-arrow-right"
								aria-hidden="true"></i></button>
					</div>
					<div class="previous">
						<button @click="Prev()" type="button" class="btn-carouser  prev"><i
								class="fa-solid fa-angles-left"></i></button>
					</div>
				</div>
			</section>
		</template>
	</base-container>
</template>


<script>
	import {
		mapGetters
	} from 'vuex'
	// import {
	// 	mapGetters
	// } from 'vuex'
	export default {
		data() {
			return {
				Detail:null,
				List:this.$store.state.CoachStore.Trending,
			}
		},
		computed: {
			...mapGetters('CoachStore', ['GetTrendingIT','GetTrainerDetailID'])
		},
		methods: {
			Next() {
				let first = this.List[0];
				this.List.splice(0,1);
				this.List.push(first);
			},
			Prev() {
				let last = this.List[this.List.length-1];
				this.List.splice(this.List.length-1 ,1);
				this.List.unshift(last);
			},
			// enter: function (el) {
			// 	console.log(el)
			// },
			// leave: function (el) {
			// 	console.log(el)
			// }
		},
		beforeMount(){
				this.Detail = this.GetTrainerDetailID;
		},
	}
</script>


<style scoped>
	/* .container {
		padding: .5em;
		display: block;
		position: relative;
	} */

	.personal-info {
		display: grid;
		column-gap: .5em;
		grid-template-rows: repeat(1, 1fr);
		grid-template-columns: 15% 75%;
	}

	.image>img {
		width: 100%;
		min-height: 150px;
		object-fit: cover;
		object-position: top left;
	}

	.personal-data {
		display: grid;
		grid-template-rows: repeat(5, 20%);
		grid-template-columns: repeat(2, 1fr);
		column-gap: .5em;
		row-gap: 1em;
	}

	.programming {
		max-width: 100%;
		height: 100%;
		position: relative;
		margin: auto;
		padding-block: .5em;
		/* border: 1px solid red; */
		overflow: hidden;
	}

	.inline{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
		column-gap: .1em;
		overflow: hidden;
		/* display: grid;
		grid-auto-flow: column;
		grid-template-columns: repeat(2 ,1fr);
		overflow: hidden; */
	}

	.btn-carouser {
		margin: .5em;
		padding: 1em;
		position: absolute;
		top: 40%;
		z-index: 100;
		line-height: .5em;
		background-color: transparent;
		border: 1px solid rgba(189, 179, 179, 0.582);
		transition: all 300ms ease-in-out;
	}

	.next {
		right: 0;
	}

	.previous {
		left: 0;
	}

	.btn-carouser:hover {
		transform: scale(1.2);
		background-color: rgb(216, 195, 195);
	}

	.carouser {
		display: block;
		height: 200px;
		padding: .5em;
		top: 10%;
		bottom: 10%;
		left: 0;
		/* margin-inline: 1em; */
		/* border: 1px solid red; */
	}

	.carouser img {
		object-fit: cover;
		object-position: top left;
		width: 200px;
		height: 200px;
	}

	.carouser-enter-active {
		animation: right-in 2s ease-in-out;
	}

	.carouser-leave-active {
		animation: left-out 1s ease-in-out;

	}

	@keyframes right-in {
		from {
			opacity: 0;
			transform: translateX(100%);
		}

		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	@keyframes left-out {
		from {
			opacity: 1;
			transform: translateY(0);
		}

		to {
			opacity: 0;
			transform: translateY(-100%);
		}
	}
</style>