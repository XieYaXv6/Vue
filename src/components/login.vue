<template>
  <div class="container">
    <div class="box">
      <!-- 头像 -->
      <div class="avatar">
        <img src="../assets/logo.png" alt="" />
      </div>
      <!-- 表单 -->
      <el-form
        ref="loginformref"
        :model="loginform"
        :rules="loginformrules"
        label-width="0px"
        class="from"
      >
        <el-form-item prop="uid">
          <el-input
            placeholder="请输入身份证号码"
            v-model="loginform.uid"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            placeholder="请输入用户密码"
            v-model="loginform.password"
            prefix-icon="el-icon-lock"
            type="password"
            @keyup.enter.native="login"
          ></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="login" >登录</el-button>
          <el-button type="info" @click="resetloginform">重置</el-button>
          <el-button type="success" @click="regist">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginform: {
        uid: "admin",
        password: "admin",
      },
      loginformrules: {
        username: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          {
            min: 1,
            max: 10,
            message: "长度在 1 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          {
            min: 1,
            max: 15,
            message: "长度在 1 到 15 个字符",
            trigger: "blur",
          },
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
    login() {
      //表单验证
      this.$router.replace("/home");
      // this.$refs.loginformref.validate(async valid=>{

      //     if(!valid) return;
          
      //     const result=await this.$http.get('/l/login?user='+this.loginform.uid+'&password='+this.loginform.password);
    
      //     if(result.data==0) {
      //         return this.$message.error("登录失败!")
      //     }else{
              
      //         window.sessionStorage.setItem("token",result.data.token)
      //         window.sessionStorage.setItem("uid",this.loginform.uid)
      //         this.$router.replace("/home");
      //         return this.$message.success("登录成功!")
              

      //     }
      // })
            
    },
    regist() {
      this.$router.push("/regist");
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
  height: 300px;
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