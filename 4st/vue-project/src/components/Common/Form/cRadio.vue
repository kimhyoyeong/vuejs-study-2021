<template>
	<span>
		<label>
			<input type="radio"
				v-bind:name="name"
				v-bind:value="val"
				v-bind:checked="checked"
				v-on:change="checkValue"/>
			{{val}}
		</label>
	</span>
</template>

<script>
export default {
	name: 'cRadio',
	model: {
		//prop:'current',
		//value가 아닌 current로 할당하고 싶은 경우
		event:'change'
		//이벤트를 change로 사용하고 싶은 경우
	},
	props: {
		val: [String, Number],
		name: [String, Number],
		value: [String],
		checked: {
			default: false,
			type: Boolean,
		},
	},
	methods: {
		checkValue: function() {
			this.$emit('change', this.val);//체크된 값 넘겨줌
		},
	},
	created() {//로드시
		if (this.checked) {//체크된 값만
			this.$emit('change', this.val);//값이름 넘겨줌
		}
	},
};
</script>

<style scoped>

</style>
