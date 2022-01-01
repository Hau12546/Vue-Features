<template >
	<header>
			<div class="heading">
				<h3>Find Coach</h3>
			</div>
			<section class="container">
					<div class="finder">
						<label for="">Search Your Topics</label>
						<input type="text" placeholder="Enter your topics" id="finder-input" />
					</div>
					<div class="category">
							<ul>
								<li>Coach List</li>
								<li>Requests</li>
							</ul>
					</div>
			</section>
	</header>
</template>

<script>
export default {
	
}
</script>

<style lang="scss" scoped>
	header{
			display: block;
			padding: .5em;
			background-color: rgb(65, 65, 66);
			color: #FFFF;
			.heading{
				margin-block: 1em;
				h3{
					max-width: 100%;
					// color: #FFFF;
					font-weight: 900!important;
				}
			}
			.container{
				max-width: 100%;
				padding: .5em;
				.finder{
					label{
						color: rgb(223, 238, 11);
						text-transform: uppercase;
					}
					#finder-input{
						width: 100%;
						size: 1fr;
						border: 1px solid #FFFF;
						border-radius: 10px;
						color: rgb(226, 44, 44);
						box-shadow: 3px -3px #FFFF;
					}
				}

				.category{
					padding: .5em;
					ul{
						display: grid;
						position: relative;
						list-style-type: none;
						row-gap: .5em;
						grid-template-columns: repeat(1,1fr);
						grid-template-rows: repeat(2,1fr);
						li{
								color: #000000;
								background-color: #FFFF;
								border: 1px solid #000000;
								box-shadow: 3px -3px #FFFF, 1px -1px #FFFF, 3px -3px #FFFF;
						}
					}
				}
			}
	}
</style>