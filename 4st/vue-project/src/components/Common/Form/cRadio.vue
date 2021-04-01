<template>
	<span>
		<label>
			<input type="radio"
				v-bind:name="name"
				v-bind:checked="falseValue"
				v-on:input="checkValue"/>
			{{val}}
		</label>
	</span>
</template>

<script>
export default {
	name: 'cRadio',
	props: {
		val: String,
		name: String,
		checked: String,
	},
	data() {
		return {
			falseValue: this.checked ? true : false,
		};
	},
	methods: {
		checkValue: function() {
			this.$emit('input', this.val);
		},
	},
	created: function() {
		if (this.falseValue) {
			this.$emit('input', this.val);
		}
	},
};
</script>

<style scoped>

</style>