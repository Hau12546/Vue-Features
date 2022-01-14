<template>
	<h1 v-if="Type.h1">
		<slot name="h1"></slot>
	</h1>
	<h2 v-if="Type.h2">
		<slot name="h2"></slot>
	</h2>
	<h3 v-if="Type.h3">
		<slot name="h3"></slot>
	</h3>
	<h4 v-if="Type.h4">
		<slot name="h4"></slot>
	</h4>
	<h5 v-if="Type.h5">
		<slot name="h5"></slot>
	</h5>
	<h6 v-if="Type.h6">
		<slot name="h6"></slot>
	</h6>
</template>

<script>
	export default {
		props: {
			HeaderType: {
				type: String,
				required: true,
				default: 'h1'
			}
		},
		data() {
			return {
				HeadingType: {
					h1: false,
					h2: false,
					h3: false,
					h4: false,
					h5: false,
					h6: false,
				}
			}
		},
		watch:{
			HeaderType(){
				this.SetHeaderTag();
			}
		},
		computed: {
			Type() {
				return this.HeadingType;
			}
		},
		methods:{
			SetHeaderTag(){
					if (this.HeaderType.length>0) {
					for (const key of Object.keys(this.HeadingType)) {
						if (key == this.HeaderType) {
							this.HeadingType[key] = true;
						}
						else{
							this.HeadingType[key] = false;
						}
					}
				}
			}
		},
		beforeMount(){
			this.SetHeaderTag();
		},
	}
</script>

<style scoped>
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		display: flex;
		align-items: center;
		width: max-content;
		min-height: .2rem;
		padding: .5em;
		font-size: 1.5rem;
		font-weight: 600;
		text-decoration-style: wavy;
		text-transform: uppercase;
		letter-spacing: .5em;
		color: #FFFF;
		background-color: rgba(58, 56, 56, 0.835);
		box-shadow: 1px 1px rgba(126, 123, 123, 0.753);
	}
</style>