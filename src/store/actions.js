// 異步執行方法
const actions = {
  asynAddCount (context) {
    setTimeout(() => {
      context.commit('addCount')
    }, 3000)
  }
}

export default actions
