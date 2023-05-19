<template>
  <el-container>
    <el-header>
      <div class="title">运营后台</div>
    </el-header>
    <el-main>
      <div class="content">
        <el-menu :default-active="activeIndex" mode="vertical" @select="handleMenuSelect">
          <el-menu-item index="1">菜单项 1</el-menu-item>
          <el-menu-item index="2">菜单项 2</el-menu-item>
        </el-menu>
        <el-main>
          <div class="content" v-show="activeIndex === '1'">内容 1</div>
          <div class="content" v-show="activeIndex === '2'">内容 2</div>
        </el-main>
      </div>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
// import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import { defineComponent, ref } from 'vue'
export default defineComponent({
  components: {
    // HelloWorld,
  },
  name: 'HomeView',
  setup() {
    const activeIndex = ref<string>('1')
    const handleMenuSelect = (index: string) => {
      activeIndex.value = index
    }
    return {
      activeIndex,
      handleMenuSelect,
    }
  },
})
</script>
<style scoped>
.title {
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 24px;
  color: #fff;
  background-color: #409eff;
}
.content {
  margin-top: 20px;
}
</style>