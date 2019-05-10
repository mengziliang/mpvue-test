/**
 * 所有接口
 * ==========接口前綴==========
 * 澳門接口 card
 * 福根接口 member
 * 趙鵬接口 eshop
 * ==========接口前綴==========
 */
let card = 'card'
// let member = 'member'
let eshop = 'eshop'
export default {
  // 獲取信用卡列表
  getCreditCardList: card + '/creditCard/getCreditCardList',
  // 商品详情信息页
  getGoodsDetailInfo: eshop + '/goods/getGoodsDetailInfo'
}
