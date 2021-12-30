export const RooMutation = {
		LogIn(state, payload) {
			if (payload.LoginStatus) {
				state.isLogin = payload.LoginStatus;
				return;
			}
		},

		LogOut(state, payload) {
			if (!payload.LoginStatus) {
				state.isLogin = payload.LoginStatus;
				return;
			}
		}
	}