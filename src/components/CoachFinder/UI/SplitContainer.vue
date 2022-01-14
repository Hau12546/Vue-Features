<template>
	<div class="main-component">
				<slot></slot>
			</div>
</template>


<script>
export default {
	
}
</script>

<style scoped>
.main-component{
		overflow-y: auto;
		overflow-x: hidden;
		height: 100vh;
		padding: 0;
		display: grid;
		max-width: 100%;
		grid-template-columns: 15% 85%;
		grid-auto-rows: repeat(1,fr);
		font-family: 'Courier New', Courier, monospace;
		font-weight: 300;
		font-size: 20px;
	}
</style>

