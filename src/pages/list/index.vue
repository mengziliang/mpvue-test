<template>
  <div>

    <van-cell-group>
      <van-cell v-for="(d, index) in cardData.allList" :key="index" @click="getDetail">
        <div slot="title">
          <rich-text :nodes="d.name"></rich-text>
        </div>
        <rich-text :nodes="d.description"></rich-text>
      </van-cell>
    </van-cell-group>

  </div>
</template>

<script>
  import http from '@/utils/http'
  import api from '@/utils/api'

  export default {
    data () {
      return {
        query: {},
        cardData: {}
      }
    },
    created () {
    },
    mounted () {
      this.query = this.$route.query
      mpvue.setNavigationBarTitle({
        title: this.query.name
      })
      this.getCard()
    },
    methods: {
      getCard () {
        http.get(api.getCreditCardList, {
          pageNum: 1,
          pageSize: 10,
          identity: 1
        }).then(res => {
          this.cardData = res.returnObj
        })
      },
      getDetail () {
        http.post(api.getGoodsDetailInfo, {
          goodsId: 'H0180809001303'
        }).then(res => {
          console.log(res)
        })
      }
    }
  }
</script>

<style scoped lang="stylus">
</style>
