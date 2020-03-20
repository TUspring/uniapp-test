<template>
  <view class="content">
    <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
      :duration="duration">
      <swiper-item v-for="(item ,index) in info" :key="index">
        <view class="swiper-item">
          <img :src="item.url" alt="" style="width: 100%;height: 200px;">
        </view>
      </swiper-item>
    </swiper>

    <!-- <view>
      <uni-swiper-dot :info="info" :current="current" field="content" :mode="mode">
        <swiper class="swiper-box" @change="change">
          <swiper-item v-for="(item ,index) in info" :key="index">
            <view class="swiper-item">
              <img :src="item.url" alt="" style="width: 100%;height: 200px;">
            </view>
          </swiper-item>
        </swiper>
      </uni-swiper-dot>
    </view> -->
    <!-- <view>
      <uni-calendar :insert="true" :lunar="true" :start-date="'2019-3-2'" :end-date="'2019-5-20'"
        @change="calendarChange">
      </uni-calendar>
    </view> -->
    <view>
      <button @click="calendarChange">提交</button>
    </view>
    <uni-popup ref="popup" type="center">
      <view style="width: 150px;height:80px;text-align: center;background: #fff;line-height: 80px;border-radius: 6px;">提交成功</view>
    </uni-popup>
  </view>
</template>

<script>
  import { uniSwiperDot, uniCalendar, uniPopup  } from '@dcloudio/uni-ui';
  export default {
    components: { uniSwiperDot, uniCalendar, uniPopup },
    data() {
      return {
        background: ['color1', 'color2', 'color3'],
        indicatorDots: true,
        autoplay: true,
        interval: 2000,
        duration: 500,
        info: [{
          content: '内容 A',
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584011410852&di=fc966a87b512b9860a80692bb592e8e4&imgtype=0&src=http%3A%2F%2Fpic77.nipic.com%2Ffile%2F20150908%2F9448607_120108567000_2.jpg'
        }, {
          content: '内容 B',
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584013168581&di=e9b9444d7463e5017755abcd50631d4b&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F22b9ae7c92c4fb189a45ac70d4369671d44ab6415c9c1-DBR6V9_fw658'
        }, {
          content: '内容 C',
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584011527233&di=44061c04c40075a6ec3c5dc47f8c6d9c&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fa50f4bfbfbedab64074a9e5dfd36afc379311e76.jpg'
        }],
        current: 0,
        mode: 'default',
      }
    },
    onLoad() {

    },
    methods: {
      changeIndicatorDots(e) {
        this.indicatorDots = !this.indicatorDots
      },
      changeAutoplay(e) {
        this.autoplay = !this.autoplay
      },
      intervalChange(e) {
        this.interval = e.target.value
      },
      durationChange(e) {
        this.duration = e.target.value
      },

      calendarChange(e) {
        console.log('提交接口')
        uni.request({
          url: 'http://localhost:8888/login?username=亚索&password=abc123&age=19', //仅为示例，并非真实接口地址。
          method: 'GET',
          success: (res) => {
            console.log(res.data);
            this.$refs.popup.open()
          }
        });
      }
    }
  }
</script>

<style>
  .content {
    text-align: center;
  }

  .logo {
    height: 200upx;
    width: 200upx;
    margin-top: 200upx;
  }

  .title {
    font-size: 36upx;
    color: #8f8f94;
  }
  .swiper{
    height: 200px;
  }
  .swiper-box {
    height: 200px;
  }
</style>