<template>
<div class="item-container d-flex">
	<button class="btn btn-primary" v-on:click="AddFive()">Add 5</button>
	<button class="btn btn-primary" v-on:click="Addone()">Add 1</button>
</div>
<hr>
<div class="item-container">
	<p>{{StatusTracking}}: {{counter}}</p>
</div>
</template>


<style>

</style>


<script>
export default{
	data(){
		return {
			counter:0,
		}
	},
	watch:{
		counter(value){
			if(value>37){
				const that = this;
				setTimeout(() => {
					that.counter=0;
				}, 2000);
			}
		}
	},

	methods:{
		AddFive(){
			this.counter+=5;
		},
		AddOne(){
			this.counter+=1;
		}
	},
	computed:{
		StatusTracking(){
			if(this.counter<37) return 'Not there yet';
			return 'Too Much';
		},
	}
}
</script>
