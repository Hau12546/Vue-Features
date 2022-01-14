import {
	createStore
} from "vuex";
import CoachAppAPI, {
	AuthenAPI
} from "../../Share/API";
import {
	CoachModule
} from "../CoachModule/CoachModule";
import {
	RequestModule
} from "../RequestModule/RequestModule";

export const Store = createStore({
	modules: {
		'CoachStore': CoachModule,
		RequestStore: RequestModule
	},
	state() {
		return {
			TrainerID: [0, 1],
			UserID: 'c3',
			isLoading: false,
			isError: false,
			error: null,
			AuthenInfo: {
				token: null,
				userID: null,
				expiresIn: null
			},
			TimeOut: null,
			DidAutoLogout:false,
		}
	},
	mutations: {
		ToTrainerDetail(state, payload) {
			state.CoachStore.TargetTrainerID = payload.id;
			const route = `/coach-detail`;
			payload.router.push(route);
		},
		AddTrainer(state, payload) {
			state.TrainerID.push(payload.id);
			state.CoachStore.TrainerList.push(payload);
			console.log(state.TrainerID);
		},
		AddRequest(state, payload) {
			state.RequestStore.RequestList.push(payload);
			console.log(state.RequestStore.RequestList)
		},
		GetTrainerFromDB(state, payload) {
			state.CoachStore.TrainerList = payload;
			console.log(state.CoachStore.TrainerList)
			state.isLoading = false;
		},
		GetRequestFromDB(state, payload) {
			console.log(payload)
			state.RequestStore.RequestList = payload;
		},
		Reload(state) {
			state.CoachStore.LastFetch = new Date().getTime();
			console.log(state.CoachStore.LastFetch);
		},
		SetUserAuthen(state, payload) {
			state.AuthenInfo.token = payload.token;
			state.AuthenInfo.userID = payload.localId;
			state.AuthenInfo.expiresIn = payload.expiresIn;
			localStorage.setItem('AUTH_INFO', JSON.stringify(state.AuthenInfo));
		},
		DidAutoLogout(state){
			state.DidAutoLogout = true;
		}
	},
	actions: {
		Test(context) {
			console.log(context);
		},
		ToDetail(context, payload) {
			context.commit('ToTrainerDetail', payload);
		},
		AddTrainerAction(context, payload) {
			context.commit('AddTrainer', payload);
		},
		AddRequestAction(context, payload) {
			const NewRequest = {
				id: new Date().getSeconds(),
				Time: new Intl.DateTimeFormat('en-GB', {
					dateStyle: 'full',
					timeStyle: 'short'
				}).format(new Date()),
				coachID: payload.coachID,
				userEmail: payload.email,
				userMessage: payload.message
			};

			const RequestInserted = new Promise((resolve, reject) => {
				fetch(`https://vue-features-default-rtdb.asia-southeast1.firebasedatabase.app/Requests/${NewRequest.coachID}.json`, {
					method: 'POST',
					body: JSON.stringify(NewRequest),
				}).then((response) => {
					if (response.ok) {
						resolve('Data inserted successfully');
					} else {
						reject('Can not insert Into DB');
					}
				})
			});
			RequestInserted.then((message) => {
				console.log(message);
				context.commit('AddRequest', NewRequest);
			}).catch((message) => {
				console.log(message);
			});
		},
		LoadRequestFromDB(context) {
			let RequestList = [];
			const RequestLoaded = new Promise((resolve, reject) => {
				fetch(`https://vue-features-default-rtdb.asia-southeast1.firebasedatabase.app/Requests/${context.rootState.CoachStore.TargetTrainerID}.json`, {
					method: 'GET'
				}).then((response) => {
					if (response.ok) {
						resolve(response);
					} else {
						reject('Requests Can not Be Loaded');
					}
				})
			});

			RequestLoaded.then((response) => {
				response.json().then((response) => {
					for (const key in response) {
						if (Object.hasOwnProperty.call(response, key)) {
							RequestList.push({
								...response[key]
							});
						}
					}
					context.commit('GetRequestFromDB', RequestList);
				});
			}).catch((message) => {
				console.log(message);
			});
		},
		async LoadTrainerFromDB(context) {

			context.state.isLoading = true;
			let TrainerList = [];
			const TrainerAPI = `${CoachAppAPI.get}?auth=${context.rootState.AuthenInfo.token}`;
			const response = await fetch(TrainerAPI);
			if (response.ok) {
				const TrainerOBject = await response.json();
				for (const key in TrainerOBject) {
					if (Object.hasOwnProperty.call(TrainerOBject, key)) {
						TrainerList.push(TrainerOBject[key]);
					}
				}
			} else {
				console.log('Can not Get Data :<');
				context.state.isError = true;
			}
			context.commit('GetTrainerFromDB', TrainerList)
			context.commit('Reload');
		},
		async Login(context, payload) {
			const AuthPackage = {
				AuthenInfo: {
					email: payload.email,
					password: payload.password,
					returnSecureToken: true
				},
				mode: 'Login'
			};
			context.dispatch('SaveAuthInfo', AuthPackage);
			return context.dispatch('Auth', AuthPackage);
		},
		async SignUp(context, payload) {
			const AuthPackage = {
				AuthenInfo: {
					email: payload.email,
					password: payload.password,
					returnSecureToken: true
				},
				mode: 'SignUp'
			};
			context.dispatch('SaveAuthInfo', AuthPackage);
			return context.dispatch('Auth', AuthPackage);

		},
		async Auth(context, payload) {
			let AuthMode = payload.mode;
			let url;
			if (AuthMode == 'Login') {
				url = AuthenAPI.Login;
			} else {
				url = AuthenAPI.SignUp;
			}
			const AuthenInfo = {
				email: payload.AuthenInfo.email,
				password: payload.AuthenInfo.password,
				returnSecureToken: true
			};
			const LoginResponse = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(AuthenInfo)
			});

			if (LoginResponse.ok) {
				const Success = await LoginResponse.json().then((response) => {
					return response;
				});
				// let expireIns = Number(Success.expireIns) * 1000;
				let expireIns = 7000;
				let expirationDate = new Date().getTime() + expireIns;
				localStorage.setItem('TOKEN_EXPIRATION', JSON.stringify(expirationDate));
				context.rootState.TimeOut = setTimeout(() => {
					context.dispatch('autoLogout');
				}, expireIns)
				context.commit('SetUserAuthen', {
					localId: Success.localId,
					token: Success.idToken,
					expiresIn: Success.expiresIn
				});
			} else {
				context.rootState.error = await LoginResponse.json().then((response) => {
					return response.error.message;
				});
				throw new Error(context.rootState.error);
			}
		},
		SaveAuthInfo(context) {
			const TempAuthInfo = JSON.parse(localStorage.getItem('AUTH_INFO') || "{}");
			const expirationTime  = JSON.parse(localStorage.getItem('TOKEN_EXPIRATION') || "{}");
			let TimeDifference = Number(expirationTime) - new Date().getTime();
			
			if(TimeDifference < 0){
				return;
			}

			setTimeout(()=>{
				context.dispatch('autoLogout');
			},TimeDifference)

			if (Object.values(TempAuthInfo).length > 0) {
				context.rootState.AuthenInfo.token = TempAuthInfo.token;
				context.rootState.AuthenInfo.userID = TempAuthInfo.userID;
				context.rootState.AuthenInfo.expiresIn = TempAuthInfo.expiresIn;
			}
		},
		LogOut(context) {
			clearTimeout(context.rootState.TimeOut);
			context.rootState.TimeOut = null;
			context.commit('SetUserAuthen', {
				localId: null,
				token: null,
				expiresIn: null
			});
		},
		autoLogout(context){
			context.dispatch('LogOut');
			context.commit('DidAutoLogout');
		}
	},
	getters: {
		GetLoading(state) {
			return state.isLoading;
		},
		ISError(state) {
			return state.isError;
		},
		CheckLastFetch(state) {
			const NewFecth = new Date().getTime();
			console.log(NewFecth, state.CoachStore.LastFetch)
			return (NewFecth - state.CoachStore.LastFetch) / 1000 > 60;
		},
		GetToken(state) {
			return state.AuthenInfo.token;
		},
		IsAuthorized(state) {
			return !!state.AuthenInfo.token;
		},
		GetAutoLogout(state){
			return state.DidAutoLogout;
		}
	}
});