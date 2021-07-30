<template>
  <div>

    <el-form  :model="form" :rules="formrules" ref="formref" label-width="80px">
 
  <el-form-item label="账户">
    <el-select v-model="form.region" placeholder="请选择账户" style="width: 30%;">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>

  <el-form-item label="金额"  prop="money" >
    <el-input type="number" v-model.number="form.money" style="width: 30%;"></el-input>
  </el-form-item>

  <el-form-item label="转入账户" prop="id">
    <el-input v-model="form.id" style="width: 30%;"></el-input>
  </el-form-item>

 <el-form-item label="户名" prop="name">
    <el-input v-model="form.name" style="width: 30%;"></el-input>
  </el-form-item>

  
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
    </el-form-item>
</el-form>

  </div>
</template>

<script>
export default {
   data() {
      return {
        form: {  
          region:'',
          money:0,
          id:'',
          name:'',
        },
        formrules: {
        money: [
          { required: true, message: '金额不能为空',trigger: "blur"},
          { pattern: /^[1-9]\d*(\.\d+)?$/, message: '请输入有效的金额',trigger: 'blur'}, 
        ],
         id:[
           { required: true, message: '账户不能为空',trigger: "blur"},
        ],
        name:[
           { required: true, message: '姓名不能为空',trigger: "blur"},
        ]

      },
      }
    },
    methods: {
      onSubmit() {
       this.$refs.formref.validate(async (valid) => {
        if (!valid) {
          return this.$message.error("请填写必要的表单项！");
        }


        });
      },
     
    }

}
</script>

<style>

</style>