<template>
  <div class="menu">
    <el-menu default-active="/progress-bar" class="el-menu-vertical-demo" router>
      <el-sub-menu index="/progress-bar">
        <template #title>
          <span>进度条</span>
        </template>
        <el-menu-item index="/progress-bar">线性进度条</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="/cursor">
        <template #title>
          <span>参考特效</span>
        </template>
        <el-menu-item index="/cursor">鼠标悬浮特效</el-menu-item>
        <el-menu-item index="/cursor-bom">打字</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="/svg">
        <template #title>
          <span>前端操作svg</span>
        </template>
        <el-menu-item index="/svg/wave">浮动波纹</el-menu-item>
        <el-menu-item index="/svg/sun">自转太阳</el-menu-item>
        <el-menu-item index="/svg/star">闪烁星星</el-menu-item>
        <el-menu-item index="/svg/computer">旋转电脑设置</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="/lottie">
        <template #title>
          <span>lottie动画</span>
        </template>
        <el-menu-item index="/lottie/chat-gpt">chat-gpt</el-menu-item>
        <el-menu-item index="/lottie/vue-button">vue-button</el-menu-item>
        <el-menu-item index="/lottie/ping-button">类似拼多多动画</el-menu-item>
        <el-menu-item index="/lottie/scatter-flowers">撒花</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>
