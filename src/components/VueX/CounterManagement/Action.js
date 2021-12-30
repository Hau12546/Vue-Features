export const CounterAction = {
	// actions prevent instance update of data of mutation that can break the code
	Increment(context,payload){
		context.commit('Increment',payload);
	},
	Decrement(context,payload){
		context.commit('Decrement',payload);
	},
}