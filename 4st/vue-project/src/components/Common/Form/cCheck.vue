<template>
  <span>
    <label>
      <input
        type="checkbox"
        v-bind:value="val"
        v-bind:checked="checked"
        v-on:input="checkValue"
      />
      {{ val }}
    </label>
  </span>
</template>

<script>
export default {
  name: "cCheck",
  props: {
    val: [String, Number], //각각의 value 값
    value: [Array, Boolean], //v-model 바인딩 되는 값(즉 배열 또는 단일 체크)
    checked: {
      default: false,
      type: Boolean,
    },
  },
  methods: {
    checkValue: function(event) {
      let valArr = this.value; //바인딩된 배열을 받아옴
      if (this.value instanceof Array) {
        //배열형태이면
        if (event.target.checked) {
          //체크가되면
          valArr.push(this.val); //배열에 해당 값 추가
        } else {
          valArr.splice(valArr.indexOf(this.val), 1); //배열해 해당 값 제거
        }
        this.$emit("input", valArr); //배열 부모에게 던짐
      } else {
        this.$emit("input", event.target.checked); //단일 속성일 경우 boolean값 던져줌
      }
    },
  },
  created() {
    //부모로부터 체크된값 받아서
    if (this.value instanceof Array) {
      //배열이면
      if (this.checked) {
        //체크된 것들만
        let varArr = this.value; //배열받아와서
        varArr.push(this.val); //배열에 값추가
      }
    } else {
      this.$emit("input", this.checked); //단일 속성일 경우 boolean값 던져줌
    }
  },
};
</script>

<style scoped></style>
