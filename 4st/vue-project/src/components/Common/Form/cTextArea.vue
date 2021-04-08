<template>
  <div class="textarea-box">
    <textarea
      v-bind:value="value"
      v-bind:maxlength="maxlength"
      v-on:input="updateValue"
    ></textarea>
    <p>{{ textLength }} / {{ maxlength }}</p>
  </div>
</template>

<script>
export default {
  name: "cTextArea",
  props: {
    value: String,
    maxlength: String,
  },
  data() {
    return {
      textLength: this.value.length ? this.value.length : 0,
    };
  },
  methods: {
    updateValue: function(event) {
      event.target.value = event.target.value.substring(
        0,
        Number(this.maxlength)
      );
      this.$emit("input", event.target.value);
      this.textLength = event.target.value.length;
    },
  },
};
</script>

<style lang="scss" scoped>
.textarea-box {
  width: 400px;
  margin: 0 auto;
  textarea {
    width: 100%;
  }
  p {
    text-align: right;
  }
}
</style>
