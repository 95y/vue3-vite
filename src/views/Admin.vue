<template>
  <el-container class="wrapper">
    <el-aside
      :width="asideWidth"
      class="left-aside transition-all"
    >
      <div class="aside-logo">
        <div class="text">
          {{ collapse ? '无' : '后台模板' }}
        </div>
      </div>
      <div class="aside-menus">
        <el-menu
          :collapse="collapse"
          :collapse-transition="false"
          @select="handleMenuChange"
        >
          <el-menu-item index="1">
            <el-icon><setting /></el-icon>
            <span>控制面板</span>
          </el-menu-item>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><user-filled /></el-icon>
              <span>用户管理</span>
            </template>
            <!-- <el-menu-item-group> -->
            <el-menu-item index="2-1">
              用户列表
            </el-menu-item>
            <!-- </el-menu-item-group> -->
          </el-sub-menu>
        </el-menu>
      </div>
    </el-aside>
    <el-container class="right-wrapper">
      <el-header class="right-header">
        <div class="header-left">
          <div
            @click="handleAsideChange"
            v-if="asideWidth === '200px'"
          >
            <app-icon
              icon="ant-design:menu-fold-outlined"
              class="text-xl cursor-pointer"
            />
          </div>
          <div
            @click="handleAsideChange"
            v-else
          >
            <app-icon
              icon="ant-design:menu-unfold-outlined"
              class="text-xl cursor-pointer"
            />
          </div>
        </div>
        <div class="header-right">
          <el-dropdown trigger="click">
            <div class="avatar cursor-pointer">
              <el-avatar
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                alt="Avatar"
              />
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>修改密码</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>
      <el-main class="right-main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Setting, UserFilled } from '@element-plus/icons-vue'
import { computed } from '@vue/reactivity'
import { useRouter } from 'vue-router'

const asideWidth = ref('200px')

const handleAsideChange = () => {
  asideWidth.value = asideWidth.value === '200px' ? '60px' : '200px'
}

const collapse = computed(() => {
  return asideWidth.value !== '200px'
})
const router = useRouter()

const handleMenuChange = (index: string) => {
  switch (index) {
    case '1':
      router.push({ name: 'Dashboard' })
      break
    case '2-1':
      router.push({ name: 'UserList' })
      break
  }
}

</script>

<style scoped lang="scss">
.wrapper {
  @apply w-full h-full;
}
.left-aside {
  @apply h-full bg-gray-100 flex flex-col;
  .aside-logo {
    @apply text-center h-10 select-none;
    .text {
      @apply text-center text-base font-bold py-2 px-4 bg-gray-700 text-white;
    }
  }
  .aside-menus {
    height: calc(100% - 2.5rem);
    overflow-y: auto;
    overflow-x: hidden;
  }
}
.right-wrapper {
  @apply flex-1;
}
.right-header {
  @apply bg-indigo-200 flex items-center justify-between;
  .header-left {
    @apply flex;
  }
  .header-right {

  }
}
.right-main {
  @apply bg-green-300;
}
</style>
