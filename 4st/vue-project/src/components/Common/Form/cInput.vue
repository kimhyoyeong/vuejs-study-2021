<template>
	<span>
		<input
			type="text"
			v-bind:value="value"
			v-bind:placeholder="placeholder"
			v-on:input="updateValue($event.target.value)"/>
		<!--input 이벤트가 발생할때 변경된 value 값을 넘겨줌-->
	</span>
</template>

<script>
export default {
	name: 'cInput',
	props: {//자식 컴포넌트에서 현재값에 접근하려면 받아와야함
		value: String,
		placeholder: String,
	},
	methods: {
		updateValue: function(value) {
			this.$emit('input', value);//value 값을 보내줌
		},
	},
};
</script>

<style scoped>

</style>