<template>
  <div>
    <el-card>
      <!-- 头部搜索添加 -->

      <el-row :gutter="0">
        <el-col :span="8">
          <el-select
            v-model="form.region"
            placeholder="请选择查询类型"
            style="width: 80%"
          >
            

            <el-option label="交易编号" value="bianhao" ></el-option>
            <el-option label="账户" value="zhanghao"></el-option>
            <el-option label="时间" value="time" ></el-option>
          </el-select>
        </el-col>

        <el-col :span="8">
          <el-date-picker
          v-if="form.region=='time'"
            v-model="form.info"
            type="date"
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd"
            clearable
           
          >
          </el-date-picker>

          <el-input v-else placeholder="请输入内容" v-model="form.info" style="width:80%" clearable>
          </el-input>
            <el-button  icon="el-icon-search" @click="submit"></el-button>

        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        region: "",
        info: "",
      },
      flag: false,
    };
  },
 
  methods: {
    
    submit(){
      console.log(this.form.info)
    }
  },
};
</script>

<style>
</style>