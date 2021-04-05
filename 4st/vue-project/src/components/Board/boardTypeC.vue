<template>
	<div class="board-type3">
		<ul>
			<li v-for="(list, index) in boardData" v-bind:key="index">
				<a href="#" v-on:click.prevent="$emit('modal',list)">
					<div>{{list.no}}</div>
					<div>{{list.name}}</div>
					<div class="img-box"><img v-bind:src="list.imgUrl" alt=""></div>
					<div>{{list.subject}}</div>
					<div class="desc">{{list.description}}</div>
					<div>{{list.views}}</div>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>

export default {
	name: 'boardTypeC',
	props: ['boardData'],
};
</script>

<style lang="scss" scoped>

</style>