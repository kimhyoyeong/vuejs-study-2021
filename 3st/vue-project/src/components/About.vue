<template>
	<div>
		<Header></Header>
		<div class="content-wrap">about</div>
	</div>
</template>

<script>
import Header from "@/components/Header"

export default {
	name: 'About',
	components:{
		Header
	}
};
</script>

<style lang="scss" scoped>
	.content-wrap{
		background:#ddddff;
	}
</style>
