<template>
  <div id="workapply">
    <mt-header title="工作申请"></mt-header>
    <mt-field label="活动名称" placeholder="请输入活动名称" v-model="actname"></mt-field>
    <mt-field label="活动地点" placeholder="请输入活动地点" v-model="actplace"></mt-field>
    <mt-field label="活动时间" placeholder="请输入活动时间" type="date" v-model="birthday"></mt-field>
    <mt-field label="备注" placeholder="请输入备注" v-model="beizhu"></mt-field>
  </div>
</template>

<script>
export default {
  name: "workapply",
  components: {}
};
</script>
