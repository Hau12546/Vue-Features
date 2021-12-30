import { createStore } from "vuex";
import { Rootstate } from "../AuthManagement/State";
import { RooMutation } from "../AuthManagement/Mutation";
import { RootGetters } from "../AuthManagement/Getters";
import { RootAction } from "../AuthManagement/Action";
import { CounterModule } from "../CounterManagement/Module";

const Store = createStore({
	modules:{
		Counter:CounterModule
	},
	state:Rootstate,
	mutations:RooMutation,
	actions: RootAction,
	getters: RootGetters
});


export default Store;