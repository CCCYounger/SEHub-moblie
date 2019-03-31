<template>
  <div id="setup">
    <mt-header title="设置"></mt-header>
    <mt-field label="昵称" placeholder="请输入昵称" v-model="username"></mt-field>
    <mt-field label="原密码" placeholder="请输入原密码" type='passsword' v-model="password"></mt-field>
    <mt-field label="新密码" placeholder="请输入新密码" type='passsword' v-model="password"></mt-field>
    <mt-field label="确认密码" placeholder="请再次输入新密码" type='passsword' v-model="password"></mt-field>
    <mt-button size='large' type='text'>更改个人信息</mt-button>
  </div>
</template>

<script>
export default {
  name: "setup",
  components: {}
};
</script>
