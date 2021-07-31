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
            <el-option label="交易编号" value="bianhao"></el-option>
            <el-option label="账户" value="zhanghao"></el-option>
            <el-option label="时间" value="time"></el-option>
          </el-select>
        </el-col>

        <el-col :span="8">
          <el-date-picker
            v-if="form.region == 'time'"
            v-model="form.info"
            type="date"
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd"
            clearable
          >
          </el-date-picker>
          <el-input
            v-else
            placeholder="请输入内容"
            v-model="form.info"
            style="width: 80%"
            clearable
          >
          </el-input>
          <el-button icon="el-icon-search" @click="submit"></el-button>
        </el-col>
      </el-row>
    </el-card>

    <el-table :data="data" style="width: 100%">
      <el-table-column prop="rid" label="流水编号"> </el-table-column>
      <el-table-column prop="cid" label="银行卡号"> </el-table-column>
      <el-table-column prop="mark" label="流水标志"> </el-table-column>
      <el-table-column prop="friend" label="对方卡号"> </el-table-column>
      <el-table-column prop="number" label="交易金额"> </el-table-column>
      <el-table-column prop="time" label="交易时间"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      form: {
        region: "",
        info: "",
      },
    };
  },

  methods: {
    async submit() {
      if (this.form.region == "bianhao") {
        const result = await this.$http
          .get("/record/queryByRid/" + this.form.info)
          .then((response) => {
            this.data=[response.data]
          });
        
      } else if (this.form.region == "zhanghao") {
        const result = await this.$http
          .get("/record/queryByCid/" + this.form.info)
          .then((response) => {
            this.data=response.data   
          });
      } else {
        const result = await this.$http
          .get("/record/queryByDate/" + this.form.info)
          .then((response) => {
            this.data = response.data;
          });
      }
    },
  },
};
</script>

<style>
</style>