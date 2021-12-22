<template>
	<teleport to="body"><alert-modal v-if="ErrorInput" title="Wrong Input" @close="close">
		<template #title>Wrong Input !!!</template>
		<template ><p>There are errors on the inputed contente</p></template>
		<template v-slot:action><base-button type="button" mode="flat" @click="ConfirmError" ><template #customButton>X</template></base-button></template>
	</alert-modal></teleport>
	<base-card>
		<h1>Add Resources</h1>
		<form action="" @click.prevent>
			<div class="form-control ">    
				<label for="">Title:</label>
				<input type="text" class="form-input" placeholder="Resources Title" ref="titleInput">
			</div>
			<div class="form-control ">
				<label for="">Description:</label>
				<textarea placeholder="Resources contents" rows="3" ref="descInput"></textarea>
			</div>
			<div class="form-control">
				<label for="">Resources Link:</label>
				<input type="url" class="form-input" placeholder="Resources Link" ref="urlInput">
			</div>
			<div class="form-control">
				<base-button @click="SubmitResources()" type="submit" mode="flat"><template v-slot:customButton>Create Resources</template></base-button>
			</div>
		</form>
	</base-card>
</template>

<script>
import AlertModal from '../UI/Dialog/AlertModal.vue'
export default {	
	components:{
		AlertModal
	},
	inject:['AddResource'],
	data(){
		return {
			Resource:{
				title:'NgClass',
				description:'Adds and removes CSS classes on an HTML element.',
				url:'https://angular.io/api/common/NgClass#ngclass',
			},
			ErrorInput:false,
		}
	},
	methods:{
		SubmitResources(){
			this.Resource.title = this.$refs.titleInput.value;
			this.Resource.description = this.$refs.descInput.value;
			this.Resource.url = this.$refs.urlInput.value;
			for (const key in this.Resource) {
				if (Object.hasOwnProperty.call(this.Resource, key)) {
						if(this.Resource[key].trim().length==0)
						{
							this.ErrorInput = true;
							console.log(this.ErrorInput);
							return;
						}
				}
			}
			this.ErrorInput = false;
			this.AddResource(this.Resource);
		},
		ConfirmError(){
			this.ErrorInput = false;
		},
	}
}
</script>


<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>