<template>
	<sub-layout>
		
		<c-input
			v-model="formData.id"
			placeholder="아이디를 입력해주세요"/>
		<!--데이터는 formData.id 에 바인딩함-->
		
		<br>
		
		<c-radio
			v-model="formData.gender"
			name="gender"
			val="여"
			v-bind:checked="true"/>
		<c-radio
			v-model="formData.gender"
			name="gender"
			val="남"/>
		<br>
		
		<c-check
			v-model="formData.checkList"
			val="js"
			v-bind:checked="true"/>
		<c-check
			v-model="formData.checkList"
			val="css"
			v-bind:checked="true"/>
		<c-check
			v-model="formData.checkList"
			val="html"/>
		<c-check
			v-model="formData.checkList"
			val="vue"/>
		
		<br>
		
		<c-check
			v-model="formData.agreeCheck"
			val="동의"
			v-bind:checked="true"/>
		
		<br>
		
		<button v-on:click="submit">전송</button>
		
		<hr>
		
		<p>{{formData.id}}</p>
		<p>{{formData.gender}}</p>
		<p>{{formData.checkList}}</p>
		<p>{{formData.agreeCheck}}</p>
	
	</sub-layout>
</template>
<script>
import SubLayout from '@/components/Layout/Sub/Index';
import cInput from '@/components/Common/Form/cInput';
import cRadio from '@/components/Common/Form/cRadio';
import cCheck from '@/components/Common/Form/cCheck';

export default {
	name: 'Form',
	data: function() {
		return {
			formData: {
				id: 'young',
				gender:'',
				checkList:[],
				agreeCheck:false,
			},
		};
	},
	methods: {
		submit() {
			let sendData = {
				id:this.formData.id,
				gender:this.formData.gender,
				check:this.formData.checkList,
				agree:this.formData.agreeCheck,
			};
			console.log(sendData);
		}
	},
	components: {
		SubLayout,
		cInput,
		cRadio,
		cCheck,
	},
};
</script>

<style lang="scss" scoped>
</style>