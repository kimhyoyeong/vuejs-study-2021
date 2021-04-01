<template>
	<span class="check-filed">
		<label v-bind:for="val">{{val}}</label>
		<input
				type="checkbox"
				v-bind:id="val"
				v-bind:value="val"
				v-bind:checked="falseValue"
				v-on:change="updateChecked"
		>
	</span>
</template>

<script>
export default {
	name: 'checkField',
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
			default: true,
		},
		falseValue: {
			type: null,
			default: false,
		},
		value: { // v-model과 매칭되는 value
			type: [String, Array, Boolean],
		},
	},
	data() {
		return {
		}
	},
	methods: {
		updateChecked: function(event) {
			
			/*console.log(this.value)//배열에 바인딩 되어있으니! 빈 배열 값을 가져옴
			let checkArr = this.value
			checkArr.push(this.val)
			this.$emit('change', checkArr);
			console.log(checkArr)*/
			
			if(this.value instanceof Array) {
				// 다중선택 체크박스인 경우 값을 배열로 반환
				
				// v-model과 연결된 value(Array)를 checkArr 배열에 할당
				let checkArr = this.value
				
				// 선택된 체크박스의 값을 checkArr에 push
				if (event.target.checked) {
					checkArr.push(this.val)
				} else {
					// 선택된 체크박스를 해제한 경우 checkArr에서 현재 체크박스의 값을 삭제
					checkArr.splice(checkArr.indexOf(this.val), 1)
				}
				this.$emit('input', checkArr);
			} else {
				// 다중선택이 아닌경우 true / false 반환
				this.$emit('input', event.target.checked);
			}
			
			
			
		/*	if(this.value instanceof Array) {
				let checkArr = this.value
				checkArr.push(this.val)
				this.$emit('change', checkArr);
				console.log(checkArr)
			}*/
			
			
			
			
			/*let data = this.$attrs.value;//props에 안넣고 바로 접근하기 위해서
			
			if (event.target.checked) {
				data.push(this.val);
				this.$emit('change', data);
			} else {
				this.$emit('change',
						data.filter(f => f !== this.val),
				);
			}*/
		},
	},
};
</script>

<style scoped>

</style>