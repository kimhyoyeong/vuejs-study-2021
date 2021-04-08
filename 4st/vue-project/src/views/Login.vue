<template>
  <sub-layout>
    <div class="form-box">
      <input-field
        v-model="formData.id"
        type="text"
        label="id01"
        title="아이디"
        placeholder="ID"
      />
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
        placeholder="PW"
      />
    </div>

    <div class="form-box">
      <input-field
        v-model="formData.emailId"
        type="text"
        label="email"
        title="이메일"
        placeholder="이메일"
      />
      <select-field
        v-bind:options="formData.emailList"
        v-model="formData.selectEmail"
      />
    </div>

    <div class="form-box">
      <radio-field
        v-model="formData.gender"
        val="female"
        name="gender"
        false-value="true"
      />
      <radio-field v-model="formData.gender" val="male" name="gender" />
    </div>

    <div class="form-box">
      <check-field v-model="formData.checkList" val="밥" />
      <check-field v-model="formData.checkList" val="국" />
      <check-field v-model="formData.checkList" val="반찬" />
      <check-field v-model="formData.checkList" val="물" />
    </div>

    <hr />

    <p>입력된 값 :</p>
    <p>
      ID <em>{{ formData.id }}</em>
    </p>
    <p>
      PW <em>{{ formData.pw }}</em>
    </p>
    <p>
      email <em>{{ formData.emailId }}{{ formData.selectEmail }}</em>
    </p>
    <p>
      gender <em>{{ formData.gender }}</em>
    </p>
    <p>
      checkList <em>{{ formData.checkList }}</em>
    </p>
  </sub-layout>
</template>

<script>
import SubLayout from "@/components/Layout/Sub/Index";
import InputField from "@/components/Common/inputField";
import SelectField from "@/components/Common/selectField";
import CheckField from "@/components/Common/checkField";
import RadioField from "@/components/Common/radioField";

export default {
  name: "Login",
  data: function() {
    return {
      formData: {
        id: "",
        pw: "",
        gender: "",
        emailId: "",
        selectEmail: "",
        emailList: ["@gmail.com", "@hanmail.net", "@naver.net"],
        checkList: [],
      },
    };
  },
  methods: {},
  components: {
    CheckField,
    SubLayout,
    InputField,
    SelectField,
    RadioField,
  },
};
</script>

<style lang="scss" scoped></style>
