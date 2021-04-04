<template>
	<transition name="pop">
		<div class="pop-wrap"
			v-if="visible"
			v-bind:listItem="listItem"
			v-bind:visible="visible">
			<div class="pop-inner">
				<div class="pop-content">
					<div>{{listItem.no}} {{listItem.name}}</div>
					<div class="img-box"><img v-bind:src="listItem.imgUrl" alt=""></div>
					<div>{{listItem.subject}}</div>
					<div>{{listItem.description}}</div>
				</div>
				<a href="#" class="pop-close" v-on:click.prevent="close">닫기</a>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'boardPopup',
	props: ['listItem', 'visible'],
	data() {
		return {};
	},
	methods: {
		close: function() {
			this.$emit('close');
		},
	},
};
</script>

<style lang="scss" scoped>
	.pop-wrap{
		&:before{
			content:'';
			position:fixed;top:0;left:0;
			width:100%;height:100%;
			background:rgba(0, 0, 0, 0.65);
		}
		.pop-inner{
			position:fixed;top:50%;left:50%;
			transform:translate(-50%, -50%);
			width:500px;
			padding:50px 20px 20px;
			background:#fff;
			border-radius:30px;
		}
		.pop-content{
			overflow:hidden;
			overflow-y:auto;
			height:600px;
			text-align:left;
			&::-webkit-scrollbar{
				display:none;
			}
		}
		.pop-close{
			display:inline-block;
			position:absolute;top:20px; right:20px;
			width:20px; height:20px;
			font-size:0;
			&:before, &:after{
				content:'';
				position:absolute; top:50%; left:50%;
				width:26px; height:2px;
				background-color:#000;
			}
			&:before{
				transform:translate(-50%, -50%) rotate(45deg);
			}
			&:after{
				transform:translate(-50%, -50%) rotate(135deg);
			}
		}
		.img-box{
			img{
				width:100%;height:600px;
			}
		}
	}
	.pop-enter-active, .pop-leave-active {
		transition:.5s;
	}
	.pop-leave-active {
		position:absolute;
	}
	.pop-enter, .pop-leave-to {
		opacity:0;
	}
</style>