export const RootAction = {
	LogIn(context,payload){
		context.commit('LogIn',payload);
	},
	LogOut(context,payload){
		context.commit('LogOut',payload);
	}
}