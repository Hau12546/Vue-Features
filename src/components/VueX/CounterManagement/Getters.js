export const CounterGetters = {
	//getters prevent duplicate format data before rendering
	FinalCounter(state,_,rootState, rootGetters){
		console.log(rootState);
		console.log(rootGetters);
		return state.counter * 3;
	},
	CounterUpperLimit(state,getters){
		let CounterLimit;
		if(getters.FinalCounter>100 || getters.FinalCounter<=0){
			CounterLimit = state.counter;
		}else{
			CounterLimit = getters.FinalCounter;
		}
		
		if(CounterLimit<=0){
			state.counter = 0;
			return 0;
		}
		if(CounterLimit>100){
			state.counter = 100;
			return 100;
		}
		return CounterLimit;
	},
}