<template>
	<div id="nav">
		<ul>
			<li v-for="(item, index) of listItem" :key="index">
				<router-link :to="item.link">{{ item.name }}</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Navigator',
	data() {
		return {
			listItem: [
				{
					name: 'Home',
					link: '/',
				},
				{
					name: 'About',
					link: '/about',
				},
				{
					name: 'Form',
					link: '/form',
				},
			],
		};
	},
};
</script>
<style lang="scss">
	#nav{
		padding:30px;
		ul{
			display:inline-flex;
		}
		a{
			padding:20px;
			font-weight:bold;
			color:#2c3e50;
			&.router-link-exact-active{
				color:#42b983;
			}
		}
	}
</style>
