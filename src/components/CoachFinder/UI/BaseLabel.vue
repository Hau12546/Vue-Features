<template>
	<div for=""><span>
			<slot></slot>
		</span></div>
</template>

<style scoped>
	div {
		display: flex;
		align-items: center;
		min-height: .2rem;
		padding: .5em;
		font-size: 1.5rem;
		font-weight: 800;
		text-decoration-style: wavy;
		color: rgb(73, 70, 70);
		background-color: rgba(221, 215, 215, 0.527);
		box-shadow: 1px 1px rgba(149, 135, 135, 0.527);
		
	}
</style>