<template>
	<ul>
		<li :class="{'focused':Focused==item}" v-for="(item,index) in RatingList" :key="index">
			<button type="button" @click="SetFocused(item)">{{item}}</button>
			</li>
	</ul>
</template>

<script>
export default {
	props:['modelValue'],
	emits:['Updated:modelValue'],
		data(){
			return {
				RatingList:['Poor','Normal','Great'],
				selectedObj:this.modelValue,
			}
		},
		computed:{
			Focused(){
				return this.modelValue;
			}
		},
		methods:{
			SetFocused(focusedObject){
				this.selectedObj = focusedObject;
				this.$emit('Updated:modelValue',focusedObject)
			}
		}
}
</script>

<style scoped>
ul{
	padding: 0;
	margin-block: .5em;
	list-style: none;
	max-width: 100%;
	display: grid;
	column-gap: .5em;
	grid-template-columns: repeat(3,20%);
	grid-template-rows: repeat(1,1fr);
}

li{
	padding: 1em;
	text-align: center;
}

button{
	outline: none;
	background-color: transparent;
	border: none;
	padding: 1.25em;
}
.focused{
	background-color: burlywood;
	box-shadow: 3px 3px orange, 1px 1px orange, 3px 3px orange;
}
</style>