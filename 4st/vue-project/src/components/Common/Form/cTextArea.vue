<template>
	<div>
		<textarea
			v-bind:value="value"
			v-on:input="updateValue($event.target.value)"></textarea>
	</div>
</template>

<script>
export default {
	name: 'cTextArea',
	props:{
		value:String
	},
	methods:{
		updateValue:function(value){
			this.$emit('input',value)
		}
	}
};
</script>

<style scoped>

</style>