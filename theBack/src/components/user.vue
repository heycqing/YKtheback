<template>
 <div style='50px'>
     <el-button @click="getData()">刷新</el-button> 


  <el-table :data="tableData" style="width: 90%;margin:auto" max-height="600">
   
    <el-table-column fixed prop="markStatus" label="标记状态" width="150">
    </el-table-column>
    <el-table-column prop="name" label="姓名" width="120">
    </el-table-column>
    <el-table-column prop="sex" label="性别" width="120">
    </el-table-column>
    <el-table-column prop="phone" label="电话" width="120">
    </el-table-column>
    <el-table-column prop="date" label="日期" width="120">
    </el-table-column>
    <el-table-column prop="BusinessCircle" label="商圈" width="120">
    </el-table-column>
    <el-table-column prop="restaurant" label="餐厅" width="120">
    </el-table-column>
    <el-table-column prop="payStatus" label="付款状态" width="120">
    </el-table-column>
    <el-table-column prop="SignInStatus" label="签到状态" width="120">
    </el-table-column>
    <el-table-column fixed="right" label="操作" width="200">
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
    </el-table-column>
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
  name:'user',
  // mounted:{
 

  // },
  updated: {
      
      // },
      // changeRow(index,rows){
      //   rows
      // }
    },
  // computed:{
  //     getData();
  // },
    methods:{
      // 删除一行数据，是指定的一行数据吗？
      deleteRow(index, rows) {
        var that = this;
        console.log('tableData:'+that.tableData)
        rows.splice(index, 1);
      },
      //系统自动获取数据
      getData: function(){
          var that = this;
           this.$http.get("http://localhost:3333/postData").then(function(response){
             console.log('postdata')
             console.log("result:"+response.data.data)
             
            var  data = JSON.stringify(response.data)
             console.log('data:'+data)
             data = JSON.parse(data)
             console.log('data[0]:'+data[0].id)
            console.log('this'+that.tableData)
           that.tableData = data;
           })
      },
      //通过之后在当前用户加上成功状态,改变标记状态
      successData(){
         var that = this;
         this.$http.get('').then(function(response){
           
         })
      },
      // 待定之后在当前用户加上待定状态，改变标志状态
      daiDingData(){
        $http({
            method: "post",
            url: "",
            // data:data
             }).then(response => {
            console.log('response:'+response)})
        },
        // 淘汰之后再当前用户加上淘汰状态，改变标志状态
        OutData(){
           $http({
            method: "post",
            url: "",
            // data:data
             }).then(response => {
            console.log('response:'+response)})
        },
        //改变标志状态
        markChange(mark){
          this.markStatus = mark;
        }
    },
   data() {
      return{
        tableData:''
      }
    }
}
</script>
