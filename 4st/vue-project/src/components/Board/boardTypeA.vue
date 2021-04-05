<template>
	<div class="board-type1">
		<table>
			<thead>
			<tr>
				<th scope="col" style="width:8%;">번호</th>
				<th scope="col">제목</th>
				<th scope="col" style="width:10%;">글쓴이</th>
				<th scope="col" style="width:15%;">날짜</th>
				<th scope="col" style="width:10%;">조회수</th>
			</tr>
			</thead>
			<tbody>
			<tr v-for="(list, index) in boardData" v-bind:key="index">
				<td>{{list.no}}</td>
				<td class="sbj"><a href="#" v-on:click.prevent="$emit('modal',list)">{{list.subject}}</a></td>
				<td>{{list.name}}</td>
				<td>{{list.date}}</td>
				<td>{{list.views}}</td>
			</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	name: 'boardTypeA',
	props: ['boardData'],
};
</script>

<style lang="scss" scoped>

</style>