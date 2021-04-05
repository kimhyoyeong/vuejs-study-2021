<template>
	<div class="board-wrap">
		<div class="type-box">
			<a href="#" v-on:click="boardView('A')">리스트</a>
			<a href="#" v-on:click="boardView('B')">갤러리</a>
			<a href="#" v-on:click="boardView('C')">웹젠</a>
		</div>
		<transition name="board">
			<div v-if="type==='A'" key="A" class="board-type1">
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
					<tr v-for="(list, index) in dataOrder" v-bind:key="index">
						<td>{{list.no}}</td>
						<td class="sbj"><a href="#" v-on:click.prevent="modalOpen(list)">{{list.subject}}</a></td>
						<td>{{list.name}}</td>
						<td>{{list.date}}</td>
						<td>{{list.views}}</td>
					</tr>
					</tbody>
				</table>
			</div>
			<div v-else-if="type==='B'" key="B" class="board-type2">
				<ul>
					<li v-for="(list, index) in dataOrder" v-bind:key="index">
						<a href="#" v-on:click.prevent="modalOpen(list)">
							<div class="img-box"><img v-bind:src="list.imgUrl" alt=""></div>
						</a>
					</li>
				</ul>
			</div>
			<div v-else="type==='C'" key="C" class="board-type3">
			<ul>
				<li v-for="(list, index) in dataOrder" v-bind:key="index">
					<a href="#" v-on:click.prevent="modalOpen(list)">
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
		</transition>
		
		<board-popup
			v-bind:listItem="listItem"
			v-bind:visible="visible"
			v-on:close="modalClose"/>
	</div>
</template>

<script>
import boardPopup from '@/components/Board/boardPopup';

export default {
	name: 'boardType',
	props: ['boardData'],
	data() {
		return {
			listItem: {},
			visible: false,
			type: 'A',
		};
	},
	components: {
		boardPopup,
	},
	methods: {
		modalOpen: function(item) {
			this.listItem = item;
			this.visible = true;
			item.views++;
		},
		modalClose: function() {
			this.visible = false;
		},
		boardView: function(type) {
			this.type = type;
		},
	},
	computed: {
		dataOrder: function() {
			return this.boardData.reverse();
		},
	},
};
</script>

<style lang="scss" scoped>
	.board-wrap{
		position:relative;
		width:960px;
		margin:0 auto;
		padding-bottom:80px;
		.type-box{
			margin-bottom:20px;
			text-align:left;
			a{
				display:inline-block;
				margin:0 4px;
				padding:5px 10px;
				border:1px solid #ddd;
				border-radius:5px;
				&:first-child{
					margin-left:0;
				}
			}
		}
		[class^='board-type']{
			width:100%;
		}
		.board-type1{
			table{
				width:100%;
				th, td{
					padding:8px;
					border:1px solid #ddd;
					vertical-align:middle;
				}
				td{
					&.sbj{
						text-align:left;
					}
				}
			}
		}
		.board-type2{
			ul{
				display:flex;
				flex-wrap:wrap;
				margin:{
					left:-2%;
				}
				li{
					overflow:hidden;
					width:23%;
					margin:{
						bottom:2%;
						left:2%;
					}
					border:1px solid #ddd;
					border-radius:30px;
					a{
						display:block;
						
						.img-box{
							overflow:hidden;
							width:100%;height:250px;
							img{
								display:block;
								width:100%;
							}
						}
					}
				}
			}
		}
		.board-type3{
			ul{
				display:flex;
				flex-wrap:wrap;
				margin:{
					left:-2%;
				}
				li{
					width:23%;
					margin:{
						bottom:2%;
						left:2%;
					}
					border:1px solid #ddd;
					border-radius:30px;
					a{
						display:block;
						padding:20px;
						.img-box{
							overflow:hidden;
							width:100%;height:200px;
							img{
								display:block;
								width:100%;
							}
						}
						.desc{
							text-overflow:ellipsis;
							white-space:nowrap;
							word-wrap:normal;
							width:100%;
							overflow:hidden;
						}
					}
				}
			}
		}
	}
	.board-enter-active, .board-leave-active {
		transition: opacity .5s;
	}
	.board-leave-active {
		position: absolute;
	}
	.board-enter, .board-leave-to {
		opacity: 0;
	}
</style>