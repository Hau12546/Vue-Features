<template >
		<div :class="Style">
				<slot name="customContainer"></slot>
		</div>
</template>

<script>
export default {
	props:['customStyle'],
	computed:{
		Style(){
			if(this.customStyle!=undefined){
				return this.customStyle;
			}
			return 'container';
		}
	},
	beforeMount(){
		// console.log(this.$props.customStyle)
	}
}
</script>


<style  scoped>
	.container{
	padding: .5em;
	background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwS6Ni1u2io9MvqTPLM-kFycG_SwSyfmf_VxLhQK45hLqtmpW1GWrzsA3gGCOsQ67ybak&usqp=CAU');
	background-repeat: no-repeat;
	background-size: cover;
	}
</style>