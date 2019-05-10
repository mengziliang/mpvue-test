<template>
  <div>

    <swiper class="swiper1">
      <block v-for="(item, index) in imgUrls" :key="index">
        <swiper-item>
          <image :src="item" class="image1" />
        </swiper-item>
      </block>
    </swiper>

    <van-button type="danger"  @click="toList">去列表</van-button>

  </div>
</template>

<script>

export default {
  data () {
    return {
      imgUrls: [
        'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6',
        'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/coursePicture/0fbcfdf7-0040-4692-8f84-78bb21f3395d',
        'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/management-school-picture/7683b32e-4e44-4b2f-9c03-c21f34320870'
      ]
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    toList () {
      this.$router.push({
        path: '/pages/list/index',
        query: {
          id: 198,
          name: '小米商城'
        }
      })
    }
  }
}
</script>

<style scoped lang="stylus">
  .swiper1
    .image1
      width 100%;
</style>
