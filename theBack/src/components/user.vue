<template>
  <el-table
    :data="tableData4"
    style="width: 90%;margin:auto"
    max-height="600">
    <el-table-column
      fixed
      prop="date"
      label="标记状态"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="性别"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="电话"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="商圈"
      width="120">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="餐厅"
      width="120">
    </el-table-column>
    <el-table-column
      prop="pay"
      label="付款状态"
      width="120">
    </el-table-column><el-table-column
      prop="getThen"
      label="签到状态"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData4)"
          type="text"
          size="small">
          移除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<style lang="scss">
.el-table th {
    text-align: center !important;
}
</style>



<script>
export default {
  name:'user',
  methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
   data() {
      return{

      }
    }
}
</script>
