<template>
  <div>
    <el-card>
      <!-- 头部搜索添加 -->
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入内容" v-model="queryinfo.query" clearable @clear="getuserlist">
            <el-button slot="append" icon="el-icon-search" @click="getuserlist"></el-button>
          </el-input>
        </el-col>
      </el-row>
      <!-- 用户信息列表 -->
      <el-table :data="userlist" border stripe>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="账户" prop="user"></el-table-column>
        <el-table-column label="账户状态" prop="status"></el-table-column>
        
        <el-table-column label="操作" width="180px">
          <template slot-scope="scope">
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
              @click="showeditdialog(scope.row.id)"
            >修改</el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              @click="removeuserbyid(scope.row.id)"
            >删除</el-button>
           
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryinfo.pagenum"
        :page-sizes="[1, 2, 5, 10]"
        :page-size="queryinfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </el-card>

    
    <!-- 修改密码的对话框 
    prop是校验规则
    -->
    <el-dialog title="修改密码" :visible.sync="editdialogVisible" width="50%" @close="editdialogclose">
      <el-form :model="editform" :rules="editformrules" ref="editformref" label-width="70px">
        <el-form-item label="账户">
          <el-input v-model="editform.user" disabled></el-input>
        </el-form-item>
        <el-form-item label="原始密码" prop="password">
          <el-input v-model="editform.password"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="password">
          <el-input v-model="editform.password"></el-input>
        </el-form-item>
        
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editdialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="edituserinfo">确 定</el-button>
      </span>
    </el-dialog>
   
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      queryinfo: {
        query: "",
        pagenum: 1,
        pagesize: 2,
      },
      userlist: [
          {user:1,
          status:"冻结"}
      ],
      total: 0,
      adddialogVisible: false,
      editdialogVisible: false,
      
      editform: {
          user:1,
          password:1,
      },
      editformrules: {
      },
      setroledialogVisible: false,
      userinfo: {},
      rolelist: [],
      selectroleid:''
    };
  },
  created() {
    this.getuserlist();
  },
  methods: {
    // 获取用户信息
    async getuserlist() {
      // const { data: res } = await this.$http.get("users", {
      //   params: this.queryinfo,
      // });
      // if (res.meta.status !== 200)
      //   return this.$message.error("获取用户列表失败！");
      // this.userlist = res.data.users;
      // this.total = res.data.total;
    },
    // 每页显示多少个用户
    handleSizeChange(newsize) {
      //console.log(newsize);
      this.queryinfo.pagesize = newsize;
      this.getuserlist();
    },
    // 总页数
    handleCurrentChange(newpage) {
      //console.log(newpage);
      this.queryinfo.pagenum = newpage;
      this.getuserlist();
    },
    // 修改用户状态
    async statechange(userinfo) {
      //console.log(userinfo);
      // const { data: res } = await this.$http.put(
      //   `users/${userinfo.id}/state/${userinfo.mg_state}`
      // );
      if (res.meta.status !== 200) {
        userinfo.mg_state = !userinfo.mg_state;
        return this.$message.error("更新用户状态失败！");
      }
      this.$message.success("更新用户状态成功！");
    },
    //关闭添加用户
    adddialogclosed() {
      this.$refs.addformref.resetFields();
    },
    
    //根据id查询用户
    async showeditdialog(id) {
      //console.log(id)
      //const { data: res } = await this.$http.get("users/" + id);
      // if (res.meta.status !== 200) {
      //   return this.$message.error("查询用户信息失败！");
      // }

      //this.editform = res.data;
      this.editdialogVisible = true;
    },
    //关闭修改用户对话框
    editdialogclose() {
      this.$refs.editformref.resetFields();
    },
    //提交修改用户信息请求
    edituserinfo() {
      //表单预校验
      this.$refs.editformref.validate(async (valid) => {
        if (!valid) return;
        // const { data: res } = await this.$http.put(
        //   "users/" + this.editform.id,
        //   {
        //     email: this.editform.email,
        //     mobile: this.editform.mobile,
        //   }
        // );
        if (res.meta.status !== 200)
          return this.$message.error("更新用户信息失败！");

        this.editdialogVisible = false;
        this.getuserlist();
        this.$message.success("更新用户信息成功！");
      });
    },
    //删除用户
    async removeuserbyid(id) {
      const result = await this.$confirm(
        "此操作将永久删除该用户, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).catch((err) => {
        return err;
      });

      if (result !== "confirm") {
        return this.$message.info("已取消删除");
      }

      //const { data: res } = await this.$http.delete("users/" + id);

      if (res.meta.status !== 200) {
        return this.$message.error("删除用户失败！");
      }

      this.$message.success("删除用户成功！");
      this.getuserlist();
    },
    
  },
};
</script>

<style>
</style>