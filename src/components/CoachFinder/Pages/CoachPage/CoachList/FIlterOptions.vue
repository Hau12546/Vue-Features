<template>
	<section class="filter">
		<h3>Choose Your Future Specialties</h3>
		<form action="">
			<div class="form-inline" v-for="(subject,index) in GetITSubjectList" :key="index"
				@click="SelectSuject(subject)">
				<label class="label" for="">{{subject}}</label>
				<!-- <input type="checkbox" name="subject" class="custom-checkbox" > -->
			</div>
		</form>
	</section>
</template>

<script>
	import {
		mapGetters
	} from 'vuex'
	export default {
		emits: ['SelectedSuject'],
		data() {
			return {
				FavouriteSubject: ''
			}
		},
		computed: {
			...mapGetters('CoachStore', ['GetITSubjectList', 'GetTrainerList'])
		},
		methods: {
			SelectSuject(subject) {
				this.FavouriteSubject = subject;
				try {
					if (this.FavouriteSubject.length > 0) {
						this.$emit('SelectedSuject', this.FavouriteSubject);
						return;
					}
					throw new Error('No subject found');
				} catch (error) {
					alert(error);
				}
			},
		},
	}
</script>

<style scoped>
	.filter {
		padding: 1em;
		text-align: center;
	}

	.filter>form {
		position: relative;
		max-width: 100%;
		min-height: 2rem;
		padding: .5em;
		margin-inline: 20%;
		/* text-align: initial!important;; */
		border: 5px solid rgb(153, 120, 120);
		border-radius: 10px;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(auto, 1fr);
		row-gap: 1em;
		column-gap: .5em;
	}

	.form-inline {
		padding: .5em;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-content: center;
		column-gap: .5em;
		background-color: rgb(206, 187, 187);
		transition: all 300ms ease-in-out;
	}

	.form-inline:hover {
		background-color: #FFFF;
		transform: scale(1.1);
		color: rgb(172, 136, 136);
	}

	.chosen {
		color: rgb(172, 136, 136);
		background-color: #FFFF;
	}

	.custom-checkbox {
		-ms-transform: scale(2);
		transform: scale(2);
		padding: 10px;
		border: 1px solid rgb(26, 86, 224);
		outline: none;
	}
</style>