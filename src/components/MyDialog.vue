<template>
  <el-dialog v-model="dialogVisible" title="提示">
    <el-container>
      <span class="text_content">{{ content }}</span>
    </el-container>
    <el-container>
      <span class="text_bt">
        <el-button type="primary" @click="handleConfirm" class="text_bt">确定</el-button>
      </span>
    </el-container>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElDialog, ElButton } from 'element-plus'

export default defineComponent({
  components: {
    ElDialog,
    ElButton,
  },
  data() {
    return {
      dialogVisible: false,
      content: '',
    }
  },
  methods: {
    // 打开弹窗
    showDialog(content: string) {
      console.log(content)
      this.dialogVisible = true
      this.content = content
    },
    // 确认按钮点击事件
    handleConfirm() {
      this.dialogVisible = false
    },
  },
})
</script>
<style scoped>
.text_content {
  width: 100%;
  height: 50px;
  /* 占满宽度 */
  flex-grow: 1;
}

.text_bt {
  width: 100%;
  height: 40px;
  /* 占满宽度 */
  flex-grow: 1;
}
</style>