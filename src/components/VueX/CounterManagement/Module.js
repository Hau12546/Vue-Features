import { CounterAction } from "./Action";
import { CounterGetters } from "./Getters";
import { CounterMutation } from "./Mutation";
import { CounterState } from "./State";

export const CounterModule = {
	namespaced:true,
	state: CounterState,
	mutations:CounterMutation,
	actions: CounterAction,
	getters: CounterGetters
}