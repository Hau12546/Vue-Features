<template>
			<div class="main-component">
				<router-view name="menu"></router-view>
				<router-view></router-view>
			</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
	.main-component{
		display: grid;
		column-gap: .5em;
		grid-template-columns: 10% 90%;
		grid-auto-rows: repeat(1,fr);
		font-family: 'Courier New', Courier, monospace;
		font-weight: 300;
		font-size: 20px;
	}
</style>