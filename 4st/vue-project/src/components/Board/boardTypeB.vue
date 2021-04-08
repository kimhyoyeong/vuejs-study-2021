<template>
  <div class="board-type2">
    <ul>
      <li v-for="(list, index) in boardData" v-bind:key="index">
        <a href="#" v-on:click.prevent="$emit('modal', list)">
          <div class="img-box"><img v-bind:src="list.imgUrl" alt="" /></div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "boardTypeB",
  props: ["boardData"],
};
</script>

<style lang="scss" scoped></style>
