<template>
	<header class="header-wrap">
		<h1 class="logo">HYO</h1>
		<nav>
			<ul>
				<li><v-link href="/">welcome</v-link></li>
				<li><v-link href="/about">about</v-link></li>
				<li><v-link href="/photo">photo</v-link></li>
			</ul>
		</nav>
	</header>
</template>

<script>
import VLink from "@/components/VLink"

export default {
	name: 'Header',
	components:{
		VLink
	}
};
</script>

<style lang="scss" scoped>
	*{padding:0;margin:0;}
	.header-wrap{
		text-align:center;
	}
	nav{
		ul{
			display:flex;
			justify-content:center;
			list-style:none;
			li{
				a{
					display:block;
					padding:20px;
				}
			}
		}
	}
</style>