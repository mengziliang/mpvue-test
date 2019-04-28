// 从 store 中的 state 中派生出一些狀態

const getters = {
  getUserInfo: state => state.userInfo,
  getCount: state => state.count + '$'
}

export default getters
