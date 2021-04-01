<template>
	<span>
		<label>
			<input type="checkbox"
				v-bind:value="value"
				v-bind:checked="falseValue"
				v-on:input="checkValue"/>
			{{val}}
		</label>
	</span>
</template>

<script>
export default {
	name: 'cCheck',
	props: {
		val: [String, Number],//각각의 value 값
		value: [Array, Boolean],//v-model에 바인딩 되는 값(즉 배열 또는 단일 체크)
		checked: {},
	},
	data() {
		return {
			falseValue: this.checked ? true : false,
		};
	},
	methods: {
		checkValue: function() {
			let valArr = this.value;
			if (this.value instanceof Array) {
				if (event.target.checked) {
					valArr.push(this.val);
				} else {
					valArr.splice(valArr.indexOf(this.val), 1);
				}
				this.$emit('input', valArr);
			} else {
				this.$emit('input', event.target.checked);
			}
		},
	},
	created: function() {
		if (this.value instanceof Array) {
			if (this.falseValue) {
				let varArr = this.value;
				varArr.push(this.val);
				this.falseValue = true;
			}
		}else{
			this.$emit('input', this.falseValue);
		}
	},
	
};
</script>

<style scoped>

</style>