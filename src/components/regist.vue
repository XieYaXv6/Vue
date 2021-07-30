<template>
  <div class="container">
    <div class="box">
      <!-- 头像 -->
      <div class="avatar">
        <img src="../assets/logo.png" alt="" />
      </div>
      <!-- 表单 -->
      <el-form
        ref="registformref"
        :model="registform"
        :rules="formrules"
        label-width="0px"
        class="from"
      >
        <el-form-item prop="username">
          <el-input
            placeholder="请输入用户名"
            v-model="registform.username"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            placeholder="请输入用户密码"
            v-model="registform.password"
            prefix-icon="el-icon-lock"
            type="password"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item prop="password2">
          <el-input
            placeholder="请确认用户密码"
            v-model="registform.password2"
            prefix-icon="el-icon-lock"
            type="password"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item prop="paypass">
              <el-input
                placeholder="请输入支付密码"
                type="password"
                v-model="registform.paypass"
                prefix-icon="el-icon-lock"
                autocomplete="off"
              ></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item prop="paypass2">
              <el-input
                placeholder="请确认支付密码"
                type="password"
                v-model="registform.paypass2"
                prefix-icon="el-icon-lock"
                autocomplete="off"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item class="btns">
          <el-button type="primary" @click="regist">注册</el-button>
          <el-button type="info" @click="resetloginform">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.registform.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }

    var validatepayPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.registform.paypass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }

    return {
      registform: {
        username: "",
        password: "",
        password2: "",
        paypass: "",
        paypass2: "",

      },
      formrules: {
        username: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
        password2: [
          { required: true, message: "请再次输入登录密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
          { required: true, validator: validatePass, trigger: 'blur' }
        ],
        paypass: [
          { required: true, message: "请输入支付密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
        paypass2: [
          { required: true, message: "请再次输入支付密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
          { required: true, validator: validatepayPass, trigger: 'blur' }
        ],
      },
    };
  },
  methods: {
    resetloginform() {
      //重置表单
      //console.log(this)
      this.$refs.loginformref.resetFields();
    },

    regist() {
      this.$router.push("/login")
      //     //表单验证
      //     this.$refs.loginformref.validate(async valid=>{
      //         //console.log(valid)
      //         if(!valid) return;
      //         //调用接口注册
      //         const result=await this.$http.post('login',this.loginform);
      //         //console.log(result);
      //         if(result.data.meta.status!==200) {
      //             return this.$message.error("登录失败!")
      //         }else{
      //             this.$message.success("登录成功!")
      //             window.sessionStorage.setItem("token",result.data.data.token)
      //             this.$router.push('/home')
      //             //console.log(result)
      //         }
      //     })
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  background-color: #2b4b6b;
  height: 100%;
}
.box {
  width: 450px;
  height: 450px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .avatar {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px;
    position: absolute;
    left: 50%;
    background-color: #fff;
    transform: translate(-50%, -50%);
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }

  .from {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .btns {
    display: flex;
    justify-content: flex-end;
  }
}
</style>