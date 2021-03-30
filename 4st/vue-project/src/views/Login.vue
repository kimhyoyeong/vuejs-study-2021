<template>
	<sub-layout>
		<div class="form-box">
			<input-field
					v-model="formData.id"
					type="text"
					label="id01"
					title="아이디"
					placeholder="ID"/>
			<!--
			자식으로 보낼속성 v- 붙이면 데이터
			안붙임 속성그대로 넘어감
			v-model은 $emit된 값 받아옴 즉, 리턴된값 선언되어잇어야함
			-->
		</div>
		
		<div class="form-box">
			<input-field
					v-model="formData.pw"
					type="password"
					label="pw01"
					title="비밀번호"
					placeholder="PW"/>
		</div>
		
		<div class="form-box">
			<input-field
					v-model="formData.emailId"
					type="text"
					label="email"
					title="이메일"
					placeholder="이메일"/>
			<selectField v-bind:options="formData.emailList" v-model="formData.selectEmail"/>
		</div>
		
		<div class="form-box">
			<check-field
					type="radio"
					name="gender"
					v-for="(item,key) in formData.genders"
					v-bind:key="key"
					v-model="formData.gender"
					v-bind:title="item.option"
					v-bind:label="item.label"
					v-bind:checked="item.checked"
			/>
		</div>
		
		
		<hr>
		
		<p>입력된 값 :</p>
		<p>ID <em>{{formData.id}}</em></p>
		<p>PW <em>{{formData.pw}}</em></p>
		<p>email <em>{{formData.emailId}}{{formData.selectEmail}}</em></p>
		<p>gender <em>{{formData.gender}}</em></p>
	
		
	</sub-layout>
</template>

<script>
import SubLayout from '@/components/Layout/Sub/Index';
import InputField from '@/components/Common/InputField';
import selectField from '@/components/Common/selectField';
import CheckField from '../components/Common/checkField';

export default {
	name: 'Login',
	data: function() {
		return {
			formData:{
				id: '',
				pw: '',
				gender: '',
				emailId: '',
				selectEmail: '',
				genders: [
					{'option': '여', 'label': 'female', 'checked': true},
					{'option': '남', 'label': 'male', 'checked': false},
				],
				emailList: [
					'@gmail.com',
					'@hanmail.net',
					'@naver.net',
				],
			},
		};
	},
	methods:{
	},
	components: {
		CheckField,
		SubLayout,
		InputField,
		selectField,
	},
};
</script>

<style lang="scss" scoped>
</style>