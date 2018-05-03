<template>
 <div style='50px'>
     <el-button @click="getData()">刷新</el-button> 


  <el-table :data="tableData_pass" style="width: 90%;margin:auto" max-height="600">
     <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column fixed prop="markStatus" label="标记状态" width="150">
    </el-table-column>
    <el-table-column prop="name" label="姓名" width="120">
    </el-table-column>
    <el-table-column prop="sex" label="性别" width="120">
    </el-table-column>
    <el-table-column prop="phone" label="电话" width="120">
    </el-table-column>
    <el-table-column prop="age" label="年龄" width="120">
    </el-table-column>
    <el-table-column prop="buiness" label="商圈" width="120">
    </el-table-column>
    <el-table-column prop="canTing" label="餐厅" width="120">
    </el-table-column>
    <el-table-column prop="trade_status" label="付款状态" width="120">
    </el-table-column>
    <el-table-column prop="SignInStatus" label="签到状态" width="120">
    </el-table-column>
    <!-- <el-table-column fixed="right" label="操作" width="200">
      <template slot-scope="scope">
        <el-button
         type="success"
          size="small" circle @click="successData()">
          通过
        </el-button>
        <el-button
          type="warning"
          size="small" circle>
          待定
        </el-button>
        <el-button
          type="danger"
          size="small" circle  @click.native.prevent="deleteRow(scope.$index, tableData)">
          淘汰
        </el-button>
      </template>
    </el-table-column> -->
  </el-table>
 </div>
</template>

<style lang="scss">
.el-table th {
    text-align: center !important;
}
</style>



<script>
export default {
  name:'userOut',
    methods:{
      //系统自动获取已经通过的数据
      getData: function(){
          var that = this;
           this.$http.get("http://localhost:3333/outData").then(function(response){
             console.log('postdata')
             console.log("result:"+response.data.data)
             
            var  data = JSON.stringify(response.data)
             console.log('data:'+data)
             data = JSON.parse(data)
             console.log('data[0]:'+data[0].id)
            console.log('this'+that.tableData_pass)
           that.tableData_pass = data;
           })
      }
    },
   data() {
      return{
        tableData_pass:''
      }
    }
}
</script>
