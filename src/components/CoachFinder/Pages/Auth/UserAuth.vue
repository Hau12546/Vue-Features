<template>
	<div>
		<base-dialog :show="!!error" :title="error" @close="closeErrorDialog">
			<template v-if="ModeText=='SignUp'" #default>Can Not SignUp</template>
			<template v-else #default>Can Not Login</template>
		</base-dialog>
		<base-dialog :show="isLoading">
			<template #default>Loading...</template>
		</base-dialog>
		<base-container>
			<template #customContainer>
				<form action="" @click.prevent>
					<div class="form-control">
						<label for="">Email</label>
						<input type="email" placeholder="@abc.com" v-model.trim="email.value">
						<p v-if="email.isError ">Incorrect Email</p>
					</div>
					<div class="form-control">
						<label for="">Password</label>
						<input type="text" placeholder="password" v-model.trim="password.value">
						<!-- <p v-if="password.value">Incorrect Password</p> -->
					</div>
					<base8-button @click="onSubmit()"><template #customButton>{{UserMode}}</template></base8-button>
					<base8-button @click="SwitchMode()"><template #customButton>Switch Mode</template></base8-button>
				</form>
			</template>
		</base-container>
	</div>

</template>


<script>
	export default {
		data() {
			return {
				email: {
					value: '',
					isError: false
				},
				password: {
					value: '',
					isError: false
				},
				IsFormValid: false,
				ModeText: 'SignUp',
				isLoading: false,
				error: null,
			};
		},
		computed: {
			UserMode() {
				if (this.ModeText == 'SignUp') {
					return "Sign Up";
				} else {
					return "Sign In";
				}
			}
		},

		methods: {
			ValidateForm() {
				if (this.email.value == '' || !this.email.value.split('').includes('@')) {
					this.email.isError = true;
					this.IsFormValid = false;
				} else {
					this.email.isError = false;
					this.IsFormValid = true;
				}

				if (this.password.value == '') {
					this.password.isError = true;
					this.IsFormValid = false;
				} else {
					this.password.isError = false;
					this.IsFormValid = true;
				}
			},
			async onSubmit() {
				this.isLoading = true;
				this.ValidateForm();
				if (!this.IsFormValid) {
					this.isLoading = false;
					return;
				}
				
				try {
					const UserInfo = {
						email: this.email.value,
						password: this.password.value
					};
					if (this.ModeText == 'SignUp') {
							await this.$store.dispatch('SignUp', UserInfo);
					} else {
						console.log(this.$router)
						await this.$store.dispatch('Login', UserInfo);
						this.$router.push({path:'/coach-list'});
					}
				} catch (error) {
					this.error = error.message || 'Authentication Fail';
				}
				this.isLoading = false;
			},
			SwitchMode() {
				if (this.ModeText == 'SignUp') {
					this.ModeText = "SignIn";
				} else {
					this.ModeText = "SignUp";
				}
			},
			closeErrorDialog() {
				this.error = null;
			}
		}
	}
</script>


<style scoped>
	button {
		margin-inline: .5em !important;
	}

	form {
		margin: 1rem;
		border: 1px solid #ccc;
		border-radius: 12px;
		padding: 1rem;
	}

	.form-control {
		margin: 0.5rem 0;
	}

	label {
		font-weight: bold;
		margin-bottom: 0.5rem;
		display: block;
	}

	input,
	textarea {
		display: block;
		width: 100%;
		font: inherit;
		border: 1px solid #ccc;
		padding: 0.15rem;
	}

	input:focus,
	textarea:focus {
		border-color: #3d008d;
		background-color: #faf6ff;
		outline: none;
	}

	.errors {
		font-weight: bold;
		color: red;
	}

	.actions {
		text-align: center;
	}

	.lds-roller {
		display: inline-block;
		position: relative;
		width: 80px;
		height: 80px;
	}

	.lds-roller div {
		animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
		transform-origin: 40px 40px;
	}

	.lds-roller div:after {
		content: " ";
		display: block;
		position: absolute;
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: #fff;
		margin: -4px 0 0 -4px;
	}

	.lds-roller div:nth-child(1) {
		animation-delay: -0.036s;
	}

	.lds-roller div:nth-child(1):after {
		top: 63px;
		left: 63px;
	}

	.lds-roller div:nth-child(2) {
		animation-delay: -0.072s;
	}

	.lds-roller div:nth-child(2):after {
		top: 68px;
		left: 56px;
	}

	.lds-roller div:nth-child(3) {
		animation-delay: -0.108s;
	}

	.lds-roller div:nth-child(3):after {
		top: 71px;
		left: 48px;
	}

	.lds-roller div:nth-child(4) {
		animation-delay: -0.144s;
	}

	.lds-roller div:nth-child(4):after {
		top: 72px;
		left: 40px;
	}

	.lds-roller div:nth-child(5) {
		animation-delay: -0.18s;
	}

	.lds-roller div:nth-child(5):after {
		top: 71px;
		left: 32px;
	}

	.lds-roller div:nth-child(6) {
		animation-delay: -0.216s;
	}

	.lds-roller div:nth-child(6):after {
		top: 68px;
		left: 24px;
	}

	.lds-roller div:nth-child(7) {
		animation-delay: -0.252s;
	}

	.lds-roller div:nth-child(7):after {
		top: 63px;
		left: 17px;
	}

	.lds-roller div:nth-child(8) {
		animation-delay: -0.288s;
	}

	.lds-roller div:nth-child(8):after {
		top: 56px;
		left: 12px;
	}

	@keyframes lds-roller {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
</style>