export const RequestModule = {
	namespaced:true,
	state(){
		return {
			RequestList:[]
		}
	},
	mutation:{
		AddRequest(state,payload){
			state.RequestList.push(payload);
		},
	},
	action:{
		AddRequestAction(context,payload){
			const NewRequest = {
				id: new Date().getSeconds(),
				coachID:payload.coachID,
				userEmail:payload.email,
				userMessage:payload.message
			};
			context.commit('AddRequest',NewRequest);
		},
	},
	getters:{
		GetRequestList(state,getters,rootState){
			const CoachID = rootState.CoachStore.TargetTrainerID;
			return state.RequestList.filter((value)=>value.coachID === CoachID);
		},
		HasRequests(state,getters){
			return getters.GetRequestList && getters.GetRequestList.length>0;
		}
	}
}