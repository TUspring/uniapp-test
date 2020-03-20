<template>
  <view class="content">
    <uni-nav-bar style="width: 100%;" :fixed="true" :status-bar="true">
      <view style="text-align: center;display: flex; justify-content: center;width: 100%;">
        <tab @change="tabChange"></tab>
      </view>
    </uni-nav-bar>

    <view class="segment-list-wrap" v-if="tab_index === 0">
      <view v-for="(item,index) in lists" :key="index" class="list-item">
        <view class="list-item__left">
          <view class="segment">{{item.str}}</view>
          <view class="info">{{item.type}} 浏览 {{item.count}}</view>
        </view>
        <view class="list-item__right">
          <img class="img" :src="item.url" alt="">
        </view>
      </view>
    </view>

    <view class="photo-list-wrap" v-if="tab_index === 1">
      <view v-for="(item,index) in lists" :key="index" class="item-cell">
        <view class="photo-box">
          <img class="img" :src="item.url" alt="">
        </view>
        <view class="photo-type">{{item.type}}</view>
      </view>
    </view>
  </view>
</template>

<script>
  import { uniNavBar } from '@dcloudio/uni-ui';
  import Tab from '../../components/tab';
  export default {
    components: { uniNavBar, Tab },
    data() {
      return {
        tab_index: 0,
        lists: [{
          str: '人生有太多的不情愿，和太多的无可奈何。',
          type: '唯美图片',
          count: 12,
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584020481947&di=ffacfe6d888771370f967762bb23cf72&imgtype=0&src=http%3A%2F%2F00.minipic.eastday.com%2F20170330%2F20170330180658_9fc8c1179c37d3803b5394c58b91f134_2.jpeg'
        },
        {
          str: '遥遥无期 却次次着迷。',
          type: '生活',
          count: 102,
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584074696809&di=c1ea6c19e4d1bd2010b2c19e3a6f6513&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180302%2F14%2F1519972905-KGASUsnQRi.jpg'
        },
        {
          str: '每个人都是一个孤岛，可每个人还是渴望依靠。',
          type: '个性',
          count: 9,
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584074723113&di=7041bbca5cc8723643d0210782e8c7f4&imgtype=0&src=http%3A%2F%2Fwww.vikilife.com%2Fwp-content%2Fuploads%2F2013%2F05%2F05196-1.jpg'
        },
        {
          str: '时间从来不语，却回答了所有问题。',
          type: '唯美图片',
          count: 26,
          url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=397602323,3454988974&fm=26&gp=0.jpg'
        },
        {
          str: '所有念念不忘都是一厢情愿，所有事与愿违都是理所当然。',
          type: '意境',
          count: 5,
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584074762914&di=12295308e8fbaccbef8bfa926926e968&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fa%2F538e7694e6edd.jpg'
        },
        {
          str: '人生有太多的不情愿，和太多的无可奈何。',
          type: '生活百态',
          count: 7,
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584074792393&di=d2a89421da72b13ce9fb481f9fc5733c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201510%2F06%2F20151006180656_HNu3B.thumb.700_0.jpeg'
        },
        {
          str: '人生那么长，遗忘又漫长。',
          type: '意境',
          count: 5,
          url: 'http://attachments.gfan.net.cn/forum/201611/17/232431ebmed8dmmgbciex0.jpg'
        },
        {
          str: '希望你所追逐的最后都会反过来拥抱你。',
          type: '唯美图片',
          count: 26,
          url: 'http://attach.bbs.miui.com/forum/201507/28/163036x2t21wvwufryx2ty.jpg'
        },
        {
          str: '无论今天有多糟糕，明天空中还会有新的棉花糖。',
          type: '生活百态',
          count: 7,
          url: 'http://attach.bbs.miui.com/forum/201304/25/195151szk8umd8or8fmfa5.jpg'
        },
        {
          str: '人生有太多的不情愿，和太多的无可奈何。',
          type: '唯美图片',
          count: 54,
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584074668269&di=bd49acc1bb7fcfdae1da24f673a0d449&imgtype=0&src=http%3A%2F%2Fwww.diyimei.net%2Fupload%2F2018%2F1523884888352906.jpg'
        }]
      }
    },
    onLoad() {

    },
    methods: {
      tabChange(_index) {
        this.tab_index = _index;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    width: 100%;
    height: 100%;
    overflow: auto;
    text-align: center;
  }

  .title {
    font-size: 36upx;
    color: #8f8f94;
  }

  .segment-list-wrap {
    height: 100%;
    padding-left: 10px;

    .list-item {
      width: 100%;
      display: flex;
      padding: 10px 10px 10px 0;
      box-sizing: border-box;
      justify-content: space-between;
      border-bottom: 1px solid #eee;

      .list-item__left {
        text-align: left;

        .segment {
          color: #636363;
          font-size: 18px;
        }

        .info {
          font-size: 14px;
          color: #999;
        }
      }

      .list-item__right {
        width: 100px;
        height: 80px;
        margin-left: 5px;
        flex-shrink: 0;

        .img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .photo-list-wrap {
    padding: 6px;

    .item-cell {
      width: 50%;
      height: 120px;
      float: left;
      padding-right: 3px;
      box-sizing: border-box;
      margin-bottom: 5px;
      position: relative;
      &:nth-of-type(2n){
        padding-right: 0px;
        padding-left: 3px;
      }
      .photo-box {
        width: 100%;
        height: 100%;

        .img {
          width: 100%;
          height: 100%;
        }
      }

      .photo-type {
        left: 0;
        bottom: 0;
        width: 100%;
        height: 30px;
        line-height: 30px;
        color: #333;
        text-align: left;
        padding: 0px 10px;
        background-color: rgba(255, 255, 255, 0.7);
        position: absolute;
      }
    }
  }
</style>