<template>
	<div>
		<Header></Header>
		<div class="content-wrap">Welcome</div>
	</div>
</template>

<script>
import Header from "@/components/Header"

export default {
	name: 'Welcome',
	components:{
		Header
	}
};
</script>

<style lang="scss" scoped>
	.content-wrap{
		background:#d0a7db;
	}
</style>