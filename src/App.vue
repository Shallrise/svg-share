<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px" class="menu">
        <MenuIndex />
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import MenuIndex from './components/menu-index.vue'
</script>

<style scoped>
.menu {
  height: 100vh;
}
</style>