<template>
		<base-card>
			<base-button @click="SetResources('StoreResources')" type="button" mode="FlatMode.normal"><template v-slot:customButton>Learning Resources</template></base-button>
			<base-button  @click="SetResources('AddResources')" type="button" mode="FlatMode.flat"><template v-slot:customButton>Add Resources</template></base-button>
		</base-card>
		<!-- <StoreResources v-if="selectedComponents == 'StoreResources'" />
		<AddResources v-if="selectedComponents == 'AddResources'" /> -->
 	<keep-alive ><component :is="selectedComponents"></component></keep-alive>
</template>


<script>
import StoreResources from "../StoreResources/StoreReosurce.vue"
import AddResources from "../AddResources/AddResources.vue"

export default {
	components:{
			StoreResources,
			AddResources
	},
	data(){
		return {
			selectedComponents:'StoreResources',
			resource:{
				id:'',
				title:'',
				description:'',
				link:''
			},
			StoreResources: [
        {
          id: 0,
          title: "Vue For Beginer",
          description: "The Progressive JavaScript Framework",
          link:'https://vuejs.org/'
        },
    ],
		}
	},
	computed:{
		FlatMode(){
			const Mode = {
				flat:'',
				normal:''
			};
			if(this.selectedComponents == 'StoreResources')
			{
					Mode.flat = 'flat';
					Mode.normal = null;
			}
			if(this.selectedComponents == 'AddResources')
			{
					Mode.flat = null;
					Mode.normal = 'flat';
			}
			return Mode;
		},
	},
	methods:{
		SetResources(value){
			if(value.trim().length>0){
				this.selectedComponents = value;
				return;
			}
		},
		AddResource(newResource){
				this.id = Number(new Date().getSeconds());
			 this.resource.title = newResource.title;
				this.resource.description = newResource.description;
				this.resource.link = newResource.url;
				this.StoreResources.unshift(this.resource);
				const ClearObj= setTimeout(()=>{
					Object.keys(this.resource).forEach((key)=>{
					this.resource[key]='';
				});
				},5000);
				clearTimeout(ClearObj);
		},
		RemoveResource(validId){
			const Index = this.StoreResources.findIndex((value)=>value.id == validId);
			if(Index>-1) this.StoreResources.splice(Index,1);
		},
	},
	provide(){
    return {
					ResourceList:this.StoreResources,
					AddResource:this.AddResource,
					RemoveResource:this.RemoveResource,
				}
  },
}
</script>