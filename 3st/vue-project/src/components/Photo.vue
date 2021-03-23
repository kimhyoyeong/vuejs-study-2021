<template>
	<div>
		<Header></Header>
		<div class="content-wrap">Photo</div>
	</div>
</template>

<script>
import Header from "@/components/Header"

export default {
	name: 'Photo',
	components:{
		Header
	}
};
</script>

<style lang="scss" scoped>
	.content-wrap{
		background:#4229bc;
	}
</style>