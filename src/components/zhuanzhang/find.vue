<template>
  <div>
    <el-card>
      <!-- 头部搜索添加 -->

      <el-row :gutter="0" >
        <el-col :span="8">
            <el-select   placeholder="请选择查询类型" style="width: 80%">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
        </el-col>
        

        <el-col :span="8" >
          <el-input placeholder="请输入内容" >
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>