<template>
  <div class="app-container">
    <div class="line">
        <el-input v-model="filePath" placeholder="文件的绝对路径"/>
        <el-button @click="handleRead">读取</el-button>
    </div>
    <pre v-text="content"/>
  </div>
</template>

<script>
import fs from 'fs'

export default {
  data() {
    return {
      filePath: '',
      content: ''
    }
  },
  methods: {
    handleRead() {
        const { filePath } = this
        fs.stat(filePath, (err, statObj) => {
            if(err) {
                this.content = err.message
                return
            }

            if(statObj.isFile()) {
                this.content = fs.readFileSync(filePath, 'utf8')
            } else {
                this.content = `${filePath} not a file`
            }
        })
    }
  }
}
</script>

<style scoped>
.line{
  display: grid;
  grid-template-columns: 8fr 1fr;
  grid-gap: 20px;
}
</style>

