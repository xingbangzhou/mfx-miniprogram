import Taro from "@tarojs/taro"
import isEmpty from "lodash/isEmpty"
import { USER_INFO_STORAGE } from "src/constants/storages"

/**
 * 检查是否登录
 */
export const isLogin = () => {
  return !isEmpty(Taro.getStorageSync<UserDb>(USER_INFO_STORAGE))
}

/**
 * 微信登录
 */
export const wxLogin = () => {
  return Taro.getUserProfile({
    desc: "用于绑定打印账户用户信息",
  });
};
