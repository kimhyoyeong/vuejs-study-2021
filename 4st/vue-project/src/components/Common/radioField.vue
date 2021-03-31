<template>
	<span class="radio-field">
		<label v-bind:for="val">{{val}}</label>
		<input
				type="radio"
				v-bind:id="val"
				v-bind:name="name"
				v-bind:checked="updateValue"
				v-on:change="updateRadio"
		>
	</span>
</template>

<script>
export default {
	name: 'radioField',
	model: {
		// 현재 값을 value가 아니라 current로 할당하고 싶은 경우
		props: 'modelValue',
		// 이벤트를 change로 사용하고 싶은 경우
		event: 'change',
	},
	//v-model의 사용자 정의
	//본래 v-model은 value 보조변수로 input 이벤트를 사용
	//체크/라디오같이 입력타임은 다른목적으로 value 속성을 사용할수있음 model 옵션을 사용하면 충돌 피할수있음
	props: {
		val: {
			type: null,
			default: true
		},
		name: {
			type: String,
			required: true
		},
		falseValue: {
			type: null,
			default: false,
		},
	},
	data() {
		return {
			checked: false
		}
	},
	methods: {
		updateRadio(event) {
			this.checked = event.target.checked;
			this.$emit('change', event.target.checked ? this.val : this.falseValue);
		}
	},
	computed:{
		updateValue:function(){
			this.$emit('change',this.val);
			return this.val;
		}
	}
};
</script>

<style scoped>

</style>