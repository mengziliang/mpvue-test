import Fly from 'flyio/dist/npm/wx'
import qs from 'qs'
import common from './common'

const fly = new Fly()
fly.config.headers = {
  'X-Requested-With': 'XMLHttpRequest',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}
fly.config.baseURL = common.g_restUrl
fly.config.timeout = 10000

// 請求攔截
fly.interceptors.request.use(config => {
  mpvue.showLoading({
    title: '加载中'
  })
  return config
}, error => {
  return Promise.reject(error)
})

// 響應攔截
fly.interceptors.response.use(response => {
  mpvue.hideLoading()
  if (response && response.data) {}
  return response
}, error => {
  mpvue.hideLoading()
  return Promise.resolve(error.response)
})

// 請求成功
function checkStatus (response) {
  if (response && (response.status === 200 || response.status === 304)) {
    return response.data
  } else {
    return {
      retCode: -404,
      msg: '网络异常, 请稍后!'
    }
  }
}

// 請求失敗，格式: retCode接口狀態(200、500), returnObj返回信息, code錯誤碼, msg錯誤信息
function checkCode (res) {
  if (res && (res.retCode !== '200')) {
    let msg = res.msg ? res.msg : '网络异常, 请稍后!'
    mpvue.showToast({
      title: msg,
      icon: 'warn',
      duration: 2000
    })
  }
  return res
}

export default {
  post (url, data) {
    return fly.post(
      url,
      qs.stringify(data)
    ).then(
      (response) => {
        return checkStatus(response)
      }
    ).catch(
      (res) => {
        return checkCode(res)
      }
    )
  },
  get (url, data) {
    return fly.get(
      url,
      data
    ).then(
      (response) => {
        return checkStatus(response)
      }
    ).catch(
      (res) => {
        return checkCode(res)
      }
    )
  }
}
