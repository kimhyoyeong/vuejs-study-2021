<template>
	<sub-layout>
		<board-type v-bind:boardData="boardData"/>
	</sub-layout>
</template>

<script>
import SubLayout from "@/components/Layout/Sub/Index"
import boardType from '@/components/Board/boardType';

export default {
	name: 'Board',
	data: function() {
		return {
			boardData: [
				{no:1,subject:'제목',description:'내용내용',imgUrl:require('@/assets/img/img01.jpg'),name:'김효영',date:'2021-04-04',views:0},
				{no:2,subject:'제목',description:'내용내용',imgUrl:require('@/assets/img/img02.jpg'),name:'김효영',date:'2021-04-04',views:0},
				{no:3,subject:'제목',description:'내용내용',imgUrl:require('@/assets/img/img03.jpg'),name:'김효영',date:'2021-04-04',views:0},
				{no:4,subject:'제목',description:'내용내용',imgUrl:require('@/assets/img/img01.jpg'),name:'김효영',date:'2021-04-04',views:0},
				{no:5,subject:'제목',description:'내용내용',imgUrl:require('@/assets/img/img02.jpg'),name:'김효영',date:'2021-04-04',views:0},
				{no:6,subject:'제목',description:'내용내용',imgUrl:require('@/assets/img/img03.jpg'),name:'김효영',date:'2021-04-04',views:0},
			]
		};
	},
	components: {
		SubLayout,
		boardType,
	},
};
</script>
