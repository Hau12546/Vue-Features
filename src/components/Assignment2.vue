<template>
		<button class="btn btn-danger" v-on:click="ShowMessage()" type="button">Show Alert</button>
		<div class="item-container">
			<p>{{message}}</p>
		</div>
		<hr>
		<input class="form-input" v-on:keydown="SetOutput1($event)">
		<div class="item-container">
			<p>{{output1}}</p>
		</div>
		<hr>
		<input class="form-input" v-on:keyup.enter="SetOutput2($event)">
		<div class="item-container">
			<p>{{output2}}</p>
		</div>
</template>
<style>

</style>


<script>
export default {
			data(){
				return {
					output1:'',
					output2:'',
					message:''
				}
			},
			methods:{
				ShowMessage(){
					this.message = 'Question1 done'
				},
				SetOutput1(e){
						this.output1 = e.target.value;
				},

				SetOutput2(e){
						this.output2 = e.target.value;
				},
			},
}
</script>