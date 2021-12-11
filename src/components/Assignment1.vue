	<template>
		<div class="card text-white bg-primary">
				<!-- <img class="card-img-top" src="" alt=""> -->
				<div class="card-body">
						<h4 class="card-title">Name: {{UserInfo.name}}</h4>
						<p class="card-text">Age: U{{UserInfo.age}}</p>
						<p class="card-text">Next {{GetFutureYearsAge() - UserInfo.age}} Years: {{GetFutureYearsAge()}}</p>
						<p class="card-text">Lucky Number: {{GetLuckyNumber()}}</p>
						<div>
								<input type="text" v-model="UserInfo.name" >
						</div>
				</div>
		</div>
		<img v-bind:src="avatar" class="img-fluid" alt="">
</template>

<style scoped>

</style>

<script>
export default {
		data(){
				return {
						UserInfo:{
							name:'HauNT',
							age:23,
							avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt9DZKrj_ZJD2EPmds05DCPmPdXht9oG-PmYytmlbajeltPyRJXxhoepGbXsbwBjc6Cl0&usqp=CAU'
						}
				}
		},
		methods:{
			GetFutureYearsAge(years=5){
				return this.UserInfo.age+years
			},
			GetLuckyNumber(){
				return Math.round((Math.random()*10)+1)
			}
		}
}
</script>
