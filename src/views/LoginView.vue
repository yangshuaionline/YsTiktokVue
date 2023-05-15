<template>
  <div class="login">
    <div class="common-layout">
      <el-container>
        <el-header>
          <h1>运营后台</h1>
        </el-header>
        <el-main>
          <!-- 外层包裹内容区域 -->
          <el-container class="container">

            <!-- 输入手机号 -->
            <el-container class="container_input">
              <el-input v-model="phone" placeholder="请输入手机号" class="input_style" type="number"></el-input>
              <el-button type="primary" :disabled="isCounting" @click="sendCode" class="login_btn">{{ buttonText }}</el-button>
            </el-container>
            <!-- 输入验证码 -->
            <el-container class="container_input">
              <el-input v-model="code" placeholder="请输入验证码" class="input_style" type="number"></el-input>
            </el-container>
            <!--登录按钮  -->
            <el-container class="container_input">
              <el-button type="primary" :disabled="!(phone && code)" @click="login" class="login_btn">登录</el-button>
            </el-container>
          </el-container>

        </el-main>
      </el-container>
    </div>

  </div>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { ElMessage } from 'element-plus'
import PhoneUtils from '@/utils/PhoneUtils'
import router from '@/router'
export default defineComponent({
  name: 'LoginView',
  setup() {
    const phone = ref<string>('')
    const code = ref<string>('')
    const isCounting = ref<boolean>(false)
    const countDown = ref<number>(60)
    const buttonText = ref<string>('发送验证码')

    const sendCode = () => {
      const text = phone.value
      if (!phone.value) {
        ElMessage.warning('请输入手机号')
      } else if (PhoneUtils.isValidPhoneNumber(phone.value)) {
        // 发送短信验证码
        isCounting.value = true
        let timer = setInterval(() => {
          countDown.value--
          if (countDown.value === 0) {
            clearInterval(timer)
            isCounting.value = false
            countDown.value = 60
            buttonText.value = '重新发送'
          } else {
            buttonText.value = `${countDown.value}s`
          }
        }, 1000)
      } else {
        ElMessage.warning('请输入正确手机号')
      }
    }

    const login = () => {
      if (!phone.value) {
        ElMessage.warning('请输入手机号')
      } else if (!PhoneUtils.isValidPhoneNumber(phone.value)) {
        ElMessage.warning('请输入正确手机号')
      } else if (!code.value) {
        ElMessage.warning('请输入验证码')
      } else if (code.value.length < 6) {
        ElMessage.warning('请输入完整验证码')
      } else {
        // 处理登录逻辑
        ElMessage.success('登录成功')
        //储存token
        localStorage.setItem('Authorization', '123')
        router.push({ path: '/' })
      }
    }

    return {
      phone,
      code,
      isCounting,
      countDown,
      buttonText,
      sendCode,
      login,
    }
  },
  watch: {
    // 限制手机号只能输入11位
    phone(value, oldValue) {
      this.phone = value.slice(0, 11)
    },
    // 限制手机号只能输入6位
    code(value, oldValue) {
      this.code = value.slice(0, 6)
    },
  },
})
</script>
<style scoped>
/* input为数字的时候，去掉增减箭头 */
::v-deep input::-webkit-outer-spin-button,
::v-deep input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
}

::v-deep input[type='number'] {
  -moz-appearance: textfield; /* 此处写不写都可以 */
}

/* 输入框外层得container样式 */
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
}
/* 每个输入框得container样式 */
.container_input {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 20vh;
  width: 50vw;
}
/* 设置提示文字的大小和颜色 */
.input_style {
  height: 50px;
  /* 占满宽度 */
  flex-grow: 1;
}
/* 登录按钮 */
.login_btn {
  min-width: 156px;
  height: 50px;
  /* 占满宽度 */
  flex-grow: 1;
}
</style>
  