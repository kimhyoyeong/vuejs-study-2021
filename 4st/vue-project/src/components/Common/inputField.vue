<template>
	<span class="input-filed">
		<label v-bind:for="label">{{title}}</label>
		<input
				ref="input"
				v-bind:id="label"
				v-bind:type="type"
				v-bind:placeholder="placeholder"
				v-bind:value="value"
				v-on:input="valid($event.target.value)"
		>
	</span>
</template>

<script>
export default {
	name: 'inputField',
	props: ['value', 'type', 'placeholder','label', 'title'],//부모로 부터 받아올 속성들을 넣음
	methods: {
		valid: function(value) {
			this.$emit('input', value);//부모로 보내는 value 값
		},
		updateValue: function(value) {
			let formattedValue = value.trim().slice(
					0,
					value.indexOf('.') === -1
							? value.length
							: value.indexOf('.') + 3,
			);
			
			if (formattedValue !== value) {
				this.$refs.input.value = formattedValue;
			}
			this.$emit('input', Number(formattedValue));
		},
	},
};
</script>

<style lang="scss" scoped>
	.input-filed{
		display:inline-flex;
		align-items:center;
		padding:5px 0;
		label{
			padding-right:5px;
		}
	}
</style>