<template>
  <el-container class="container">
    <!-- 头部 -->
    <el-header>
      <div @click="tohome" class="wenzi">TenBank</div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>

    <!-- 主体 -->
    <el-container>
      <!-- 侧边栏收缩或放大 -->
      <el-aside :width="iscollapse?'110px':'200px'">
        <div class="togglebtn" @click="toggle">|||</div>
        <!-- 侧边栏 -->
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#50D2F3"
          unique-opened
          
          :collapse="iscollapse"
          :collapse-transition="false"
          :router="true"
          :default-active="activepath"
        >
         
          <el-menu-item 
           :index="item.path"
          v-for="item in $router.options.routes[3].children" 
          :key="item.id" >
           <i class="el-icon-document"></i>
              &nbsp;&nbsp;&nbsp;{{item.name}}
          </el-menu-item>

        </el-menu>
      </el-aside>

      <el-main>
        
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  
  data() {
    return {
      menulist: [],
      icons: {
        125: "el-icon-user-solid",
        103: "el-icon-s-cooperation",
        101: "el-icon-s-shop",
        102: "el-icon-s-order",
        145: "el-icon-s-data",
      },
      iscollapse: false,
      activepath: "",
    };
  },
  created() {
    //this.getMenuList();
    //console.log(this.)
    console.log(window.sessionStorage.getItem('uid'))
    this.activepath = window.sessionStorage.getItem("activepath");
  },
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    
    toggle() {
      this.iscollapse = !this.iscollapse;
    },
    //记录当前选中的列表项
    savenavstate(activepath) {
      window.sessionStorage.setItem("activepath", activepath);
      this.activepath = activepath;
    },
    tohome(){
      this.$router.push('/home')
      this.activepath=''
    },
  },
};
</script>

<style lang="less" scoped>
.wenzi{
  margin-left: 40px;
  cursor: pointer;
}
.container {
  height: 100%;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;

  align-items: center;
  color: #fff;
  font-size: 20px;
  > span {
    display: flex;
    align-items: center;
  }
}
.el-aside {
  background-color: #333744;
  .el-menu {
    border-right: none;
  }
}
.el-main {
  background-color: #fff;
}
.togglebtn {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>