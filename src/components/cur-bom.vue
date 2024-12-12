

<script setup>
import { onMounted, ref } from 'vue';
const stringA = ref('');
const stringB = ref('');
stringB.value = '这是一个很长的字符串，用来展示动态效果';         
function print() {
  // console.log(stringA.value.length, stringB.value.length);
  if (stringA.value.length >= stringB.value.length) {
  // 退出递归
    return;
  } else {
  // stringA仍然比stringB短，进入下一次等待和递归
    setTimeout(()=>{
      stringA.value += stringB.value.charAt(stringA.value.length);
      print(stringA, stringB);
    }, 50);
  }
}
onMounted(() => {
  print();
});
</script>

<template>
  <main>
    <p class="text">{{ stringA }}</p>
    <!-- <el-button type="primary" @click="print"><p class="text">点击开启动态效果</p></el-button> -->
  </main>
</template>

<style scoped>
  .text {
    font-size: 30px;
  }
</style>

