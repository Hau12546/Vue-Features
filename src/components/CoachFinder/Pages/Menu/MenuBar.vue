<template >
	<header>
			<div class="heading">
				<h3>Find Coach</h3>
			</div>
			<section class="container">
					<div class="finder">
						<label for="">Search Your Topics</label>
						<input type="text" placeholder="Enter your topics" id="finder-input" />
					</div>
					<div class="category">
							<ul>
								<li v-if="IsAuthorized"><router-link :to="'/coach-list'">Coach List</router-link></li>
								<li v-if="IsAuthorized"><router-link :to="'/request-list'">Requests</router-link></li>
								<li v-if="!IsAuthorized" @click="SetActivity()"><router-link :to="'/authentication'">{{ActivityState}}</router-link></li>
							</ul>
					</div>
			</section>
	</header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	data(){
		return {
			ActivityState:'SignOut'
		}
	},
	computed:{
		...mapGetters(['IsAuthorized'])
	},
	methods:{
		SetActivity(){
			this.$store.dispatch('LogOut');
		}
	}
}
</script>

<style scoped>
	header{
			display: block;
			padding: .5em 1em;
			background-color: rgb(65, 65, 66);
			color: #FFFF;
	}
			.heading{
				margin-block: 1em;
			}
			.heading h3{
					max-width: 100%;
					color: #FFFF;
					font-weight: 900!important;
				}
			.container{
				max-width: 100%;
				}
					label{
						color: rgb(223, 238, 11);
						text-transform: uppercase;
					}
					#finder-input{
						width: 100%;
						padding-block: .5em;
						border: 1px solid #FFFF;
						border-radius: 10px;
						color: rgb(226, 44, 44);
						box-shadow: 3px #FFFF;
						outline: none;
						transition: all 100ms ease-in;
					}
					#finder-input:focus{
						box-shadow: -3px 3px rgb(168, 163, 163), -1px 1px rgb(168, 163, 163), -3px 3px rgb(168, 163, 163);
					}
				.category{
					padding: .5em;
				}
				ul{
						display: grid;
						position: relative;
						padding: 0;
						list-style-type: none;
						row-gap: .5em;
						grid-template-columns: repeat(1,1fr);
						grid-template-rows: repeat(2,1fr);
					}
					li{
								text-align: center;
								padding-block: .5em;
								color: #000000;
								background-color: #FFFF;
								border: 1px solid #000000;
						}
						li:hover{
							background-color: #000000;
							border-color: red;
						}
						li:hover>*{
							color: #FFFF;
						}
</style>