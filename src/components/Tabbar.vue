<template>
  <div class="tabberWarp">
    <div class="warp">
      <Item
        :txt="item.txt"
        :page="item.page"
        @change="getVal"
        v-for="item in tabbarDes"
        :sel="selected"
      >
        <img :src="item.normalImg" slot="normalImg">
        <img :src="item.activeImg" slot="activeImg">
      </Item>
    </div>
  </div>
</template>
<script type="text/javascript">
import Item from "./Item.vue";
export default {
  components: {
    Item
  },
  data: function() {
    return {
      selected: "home",
      tabbarDes: [
        {
          txt: "部门首页",
          page: "home",
          normalImg: require("../assets/home.png"),
          activeImg: require("../assets/home.png")
        },
        {
          txt: "学院活动",
          page: "activity",
          normalImg: require("../assets/software.png"),
          activeImg: require("../assets/software.png")
        },
        {
          txt: "工作申请",
          page: "workapply",
          normalImg: require("../assets/workapply.png"),
          activeImg: require("../assets/workapply.png")
        },
        {
          txt: "设置",
          page: "setup",
          normalImg: require("../assets/setup.png"),
          activeImg: require("../assets/setup.png")
        }
      ]
    }
  },
  methods: {
    getVal: function (res) {
      this.selected = res
    }
  }
}
</script>
<style type="text/css">
.warp {
  width: 100%;
  border-top: 1px solid #eee;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 0;
}
.warp img {
  width: 20px;
  height: 20px;
}
.tabberWarp img {
  margin-top: 10px;
  margin-bottom: 5px;
}
.tabberWarp {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding-bottom: 5px;
  background: #fff;
}
</style>
