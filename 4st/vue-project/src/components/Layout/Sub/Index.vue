<template>
	<div class="container">
		<common-header/>
		<common-navigator/>
		<div class="content"><slot/></div>
		<common-footer/>
	</div>
</template>

<script>
import CommonHeader from '@/components/Layout/Common/Header';
import CommonFooter from '@/components/Layout/Common/Footer';
import CommonNavigator from '@/components/Layout/Common/Navigator';

export default {
	components: {
		CommonHeader,
		CommonFooter,
		CommonNavigator,
	},
};
</script>
