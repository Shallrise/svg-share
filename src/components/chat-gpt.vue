<template>
  <div ref="lottieContainer" class="lottie-animation"></div>
</template>

<script>
import { ref, onMounted } from 'vue';
import lottie from 'lottie-web'; // 导入 lottie-web 库
import animationData from '@/assets/json/chat-gpt.json'; // 引入 JSON 动画文件

export default {
  name: 'LottieAnimation',
  setup() {
    const lottieContainer = ref(null); // 用来容纳动画的容器

    onMounted(() => {
      // 确保 lottieContainer 已经渲染出来
      if (lottieContainer.value) {
        lottie.loadAnimation({
          container: lottieContainer.value, // 绑定动画容器
          renderer: 'svg', // 使用 svg 渲染
          loop: false, // 是否循环播放
          autoplay: true, // 是否自动播放
          animationData: animationData, // 引入的动画数据
        });
      }
    });

    return {
      lottieContainer,
    };
  },
};
</script>

<style scoped>
.lottie-animation {
  width: 100%;
  height: 100%;
}
</style>
