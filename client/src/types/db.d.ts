/********** users 表字段 **********/
declare interface UserDb extends CloudDatabase {
  _openid: string; // 用户唯一id
  avatarUrl: string; // 头像地址
  city: string; // 城市
  country: string; // 国家
  gender: number; // 性别
  language: string; // 语言
  nickName: string; // 昵称
  province: string; // 省份
}

declare interface ProductDb extends CloudDatabase {
  thumbnail: string
}
