export const RootGetters = {
	ToggleDisplay(state,getters){
		if(state.isLogin){
			return true;
		}
		return false;
	}

}