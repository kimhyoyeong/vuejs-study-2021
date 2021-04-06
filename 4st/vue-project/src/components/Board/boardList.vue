<template>
	<div class="board-wrap">
		<div class="type-box">
			<a href="#" v-on:click="viewChange('boardTypeA')" v-bind:class="{'active': selected === 'boardTypeA'}">리스트</a>
			<a href="#" v-on:click="viewChange('boardTypeB')" v-bind:class="{'active': selected === 'boardTypeB'}">갤러리</a>
			<a href="#" v-on:click="viewChange('boardTypeC')" v-bind:class="{'active': selected === 'boardTypeC'}">웹젠</a>
		</div>
		
		<transition name="board">
			<component
				v-bind:is="currentView"
				v-bind:board-data="boardData"
				v-on:modal="modalOpen"/>
		</transition>
		
		<board-popup
			v-bind:list-item="listItem"
			v-bind:visible="visible"
			v-on:close="modalClose"/>
	</div>
</template>

<script>
import boardTypeA from '@/components/Board/boardTypeA';
import boardTypeB from '@/components/Board/boardTypeB';
import boardTypeC from '@/components/Board/boardTypeC';
import boardPopup from '@/components/Board/boardPopup';

export default {
	name: 'boardList',
	props: ['boardData'],
	data() {
		return {
			selected: '',
			listItem: {},
			visible: false,
			currentView: 'boardTypeA',
		};
	},
	components: {
		boardTypeA,
		boardTypeB,
		boardTypeC,
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
		viewChange: function(type) {
			this.currentView = type;
			this.selected = type;
		},
	},
	mounted: function() {
		this.selected = this.currentView;
		return this.boardData.reverse();
	},
};
</script>

<style lang="scss">
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
				&.active{
					background:#eee;
					font-weight:700;
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
							width:100%;height:200px;
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
	
	.board-enter-active, .board-leave-active{
		transition:opacity .5s;
	}
	
	.board-leave-active{
		position:absolute;
	}
	
	.board-enter, .board-leave-to{
		opacity:0;
	}
</style>
