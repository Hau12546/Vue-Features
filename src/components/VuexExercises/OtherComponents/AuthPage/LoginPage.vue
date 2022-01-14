<template>
		<div class="container">
			<header>
				<h1><span class="badge bg-warning">Welcome to AOA Online Shop</span></h1>
			</header>
			<section id="user-info">
			<form action="">
				<div class="mb-3">
					<label for="" class="form-label">UserName</label>
					<input type="text" ref="name" @blur="SetUserName()"
							:value="$store.state.userInfo.name"
							class="form-control" name="" id="" aria-describedby="helpId" placeholder="">
					<!-- <small id="helpId" class="form-text text-muted">Help text</small> -->
			</div>
			<div class="mb-3">
					<label for="" class="form-label">Password</label>
					<input type="text" ref="password" @blur="SetUserPassword()"
							:value="$store.state.userInfo.password"
							class="form-control" name="" id="" aria-describedby="helpId" placeholder="">
					<!-- <small id="helpId" class="form-text text-muted">Help text</small> -->
			</div>
			</form>
			</section>
		</div>
</template>

<script>
export default {
	data(){
		return {
		}
	},
	methods:{
		SetUserName(){
			if(this.$refs.name.value){
				this.$store.state.userInfo.name = this.$refs.name.value;
				return;
			}
			this.$store.state.userInfo.name='';
		},
		SetUserPassword(){
			if(this.$refs.password.value){
				this.$store.state.userInfo.password = this.$refs.password.value;
				return;
			}
			this.$store.state.userInfo.password='';
		},
	}
}
</script>