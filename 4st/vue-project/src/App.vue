<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
import CommonNavigator from '@/components/Layout/Common/Navigator';

export default {
	components: {
		CommonNavigator,
	},
};
</script>
