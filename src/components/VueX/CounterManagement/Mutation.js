export const CounterMutation = {
	Increment(state,payload){
		//state is used for accessing the value of the target argument
		//payload is used for receiving the value you want to manipulate, prevent duplicate code value has to be changed
		state.counter +=payload.value;
	},
	Decrement(state,payload){
		state.counter -=payload.value;
	},
}