<template>
  <div>
    <el-form :model="form" :rules="formrules" ref="formref" label-width="80px">
      <el-form-item label="账户">
        <el-select
          v-model="form.region"
          placeholder="请选择账户"
          style="width: 30%"
        >
          <el-option
            v-for="item in ciddata"
            :key="item.cid"
            :label="item.cid"
            :value="item.cid"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="金额" prop="money">
        <el-input
          type="number"
          v-model.number="form.money"
          style="width: 30%"
        ></el-input>
      </el-form-item>

      <el-form-item label="转入账户" prop="id">
        <el-input v-model="form.id" style="width: 30%"></el-input>
      </el-form-item>

      <el-form-item label="户名" prop="name">
        <el-input v-model="form.name" style="width: 30%"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submit">转账</el-button>
        <el-button @click="reset">取消</el-button>
      </el-form-item>
    </el-form>

    <el-dialog title="支付密码" :visible.sync="show">
      <el-input
        v-model="form.pwd"
        type="password"
        autocomplete="off"
      ></el-input>
      <div slot="footer" class="dialog-footer">
        <el-button @click="show = false">取 消</el-button>
        <el-button type="primary" @click="add">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      uid: 123,
      ciddata: [],
      form: {
        region: "",
        money: 0,
        id: "",
        name: "",
        pwd:"",
      },
      formrules: {
        money: [
          { required: true, message: "金额不能为空", trigger: "blur" },
          {
            pattern: /^[1-9]\d*(\.\d+)?$/,
            message: "请输入有效的金额",
            trigger: "blur",
          },
        ],
        id: [{ required: true, message: "账户不能为空", trigger: "blur" }],
        name: [{ required: true, message: "姓名不能为空", trigger: "blur" }],
      },
    };
  },
  created() {
    this.getcid();
  },
  methods: {
    async getcid() {
      const result = await this.$http
        .get("/search?uid=" + this.uid)
        .then((response) => {
          this.ciddata = response.data.responseData;
        });
    },
    submit() {
      this.$refs.formref.validate(async (valid) => {
        if (!valid) {
          return this.$message.error("请填写必要的表单项！");
        }
        const result = await this.$http
          .get("/transcheck?cid1=" + this.form.region + "&cid2=" + this.form.id)
          .then((response) => {
            this.show =!this.show;
            return this.$message.warn("请输入支付密码")
          })
          .catch((error) => {
            this.show=false
            return this.$message.error("账户异常");
          });
      });
    },
    reset() {
      this.$refs.formref.resetFields();
    },
    async add(){
      const result = await this.$http
          .get("/trans?cid="+this.form.region+"&friend="+this.form.id+"&number="+this.form.money+"&uname="+this.form.name+"&pwd="+this.form.pwd)
          .then((response) => {
            console.log(response)
            this.show=!this.show

            return this.$message.success("success");
          })
          .catch((error) => {
            this.show=!this.show

            return this.$message.error("fail"
            );
          });
    }
  },
};
</script>

<style>
</style>