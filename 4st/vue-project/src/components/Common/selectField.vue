<template>
  <span>
    <select v-on:change="selectValid($event.target.value)">
      <option v-for="(option, key) in options" v-bind:key="key">
        {{ option }}
      </option>
    </select>
  </span>
</template>

<script>
export default {
  name: "selectField",
  props: ["options"],
  methods: {
    selectValid: function(value) {
      this.$emit("input", value); //부모로 보내는 value 값
    },
  },
};
</script>

<style scoped></style>
