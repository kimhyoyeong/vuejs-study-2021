<template>
	<span>
		<label>
			<input type="radio"
				v-bind:name="name"
				v-bind:checked="checked"
				v-on:input="checkValue"/>
			{{val}}
		</label>
	</span>
</template>

<script>
export default {
	name: 'cRadio',
	props: {
		val: [String, Number],
		name: [String, Number],
		checked: {
			default: false,
			type: Boolean,
		},
	},
	methods: {
		checkValue: function() {
			this.$emit('input', this.val);
			
		},
	},
	created: function() {
		if (this.checked) {
			this.$emit('input', this.val);
		}
	},
};
</script>

<style scoped>

</style>