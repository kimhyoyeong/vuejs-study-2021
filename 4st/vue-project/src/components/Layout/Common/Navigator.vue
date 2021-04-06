<template>
	<div id="nav">
		<ul>
			<li v-for="(item, index) of routes" :key="index">
				<router-link :to="item.path">{{ item.name }}</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Navigator',
	computed: {
		routes: function() {
			return this.$router.getRoutes().filter(item => {
				return item.path !== '';
			});
		},
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
