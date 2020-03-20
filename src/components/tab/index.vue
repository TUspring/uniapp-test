<template>
  <view class="tab-content">
    <text @click="tabChange(index)" class="tab-item" :class="curIndex === index ? 'cur-tab':''" v-for="(item,index) in tabList" :key="index">{{item}}</text>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        curIndex: 0,
        tabList: ['文章','图片' ]
      }
    },
    onLoad() {

    },
    methods: {
      tabChange(_index){
        this.curIndex = _index;
        this.$emit('change', _index)
      }
    }
  }
</script>

<style lang="scss">
  .tab-content{
    .tab-item{
      color: #333;
      margin-right: 20px;
      height: 100%;
      display: inline-block;
      padding: 0px 6px;
      &:nth-last-child(1){
        margin-right: 0px;
      }
    }
    .cur-tab{
      color: #409eff;
      box-shadow: 0px -2px 0px #409eff inset;
    }
  }
</style>