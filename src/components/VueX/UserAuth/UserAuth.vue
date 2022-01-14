<template>
	<base-button v-if="!ToggleDisplay" @click="LogIn({LoginStatus:true})"><template #customButton>LogIn</template></base-button>
	<base-button v-if="ToggleDisplay" @click="LogOut({LoginStatus:false})"><template #customButton>LogOut</template></base-button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import BaseButton from "../../Learning Resource App/UI/BaseButton/BaseButton.vue"
export default {
	components:{
		BaseButton
	},
	computed:{
		...mapGetters(['ToggleDisplay'])
		},
	methods:{
		...mapActions(['LogIn','LogOut'])
	}
}
</script>



<style scoped>

</style>