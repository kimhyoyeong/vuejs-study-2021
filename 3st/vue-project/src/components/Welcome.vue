<template>
	<div>
		Welcome
		<v-link href="/about">about</v-link>
	</div>
</template>

<script>
import VLink from "@/components/VLink"

export default {
	name: 'Welcome',
	components:{
		VLink
	}
};
</script>

<style scoped>

</style>