<template>
  <div>

    <card :text="motto"></card>
    <van-button type="info" @click="toLog">去往Log示例页面</van-button>

  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'miniprograme'
    }
  },
  components: {
    card
  },
  methods: {
    toLog () {
      this.$router.push({
        path: '/pages/logs/index',
        isTab: true
      })
    }
  },
  created () {
    let app = getApp()
    console.log(app)
  },
  mounted () {
  }
}
</script>

<style scoped lang="stylus">
</style>
