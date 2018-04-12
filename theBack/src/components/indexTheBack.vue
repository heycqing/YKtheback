<template>

    <el-container>
        <el-header>
            <div>
                <h3>YK后台管理系统</h3>
            </div>
        </el-header>

        <el-main> 
            <el-tabs :tab-position="tabPosition" >
                <el-tab-pane label="用户管理">
                    <user></user>
                </el-tab-pane>
                <el-tab-pane label="通过管理">
                    <userPass></userPass>
                </el-tab-pane>
                <el-tab-pane label="待定管理">
                    <userDaiDing></userDaiDing>
                </el-tab-pane>
                <el-tab-pane label="淘汰管理">
                    <userOut></userOut>
                </el-tab-pane>
                
            </el-tabs>
        </el-main>
       
    

    </el-container>


</template>

<style lang='scss'>
.el-container{
    color: #303133;
    .el-header{
        background: #909399;
    }
    .el-icon-arrow-down:before {
        content: "";
    }
    .content{
        display: flex;
        .el-main{
            margin:auto;
            text-align: center;
        }
    }
}

</style>

<script>
import user from "@/components/user.vue"
import userPass from "@/components/userPass"
import userDaiDing from "@/components/userDaiDing"
import userOut from "@/components/userOut"

  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item),
        tabPosition: 'left'
      }
    },
    components:{
        user,
        userPass,
        userDaiDing,
        userOut
    }
  };
</script>