<template>
	<span class="check-filed">
		<label v-bind:for="label">{{title}}</label>
		<input
				ref="input"
				v-bind:id="label"
				v-bind:type="type"
				v-bind:value="value"
				v-bind:name="name"
				v-bind:checked="checked"
				v-on:input="checkValid($event.target.id)"
		>
	</span>
</template>

<script>
export default {
	name: 'checkField',
	props: ['value', 'type', 'name', 'checked', 'label', 'title'],//부모로 부터 받아올 속성들을 넣음
	methods: {
		checkValid: function(id) {
			this.$emit('input', id);//부모로 보내는 id 값
		},
	},
};
</script>

<style scoped>

</style>