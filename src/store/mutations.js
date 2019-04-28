// 定义修改操作

const mutations = {
  addCount: (state) => {
    state.count += 1
  },
  minusCount: (state) => {
    state.count -= 1
  },
  updateUserInfo: (state, data) => {
    state.userInfo = data
  }
}

export default mutations
