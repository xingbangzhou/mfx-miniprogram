import Taro from "@tarojs/taro";
import { isEmpty } from "lodash";
import { FUNCTION_LOGIN } from "src/constants/functions"
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

/**
 * 把用户登录数据写入数据库
 * @param data
 */
export const cloudLogin = (data: Taro.UserInfo) => {
  return Taro.cloud.callFunction({
    name: FUNCTION_LOGIN,
    data: {
      userInfo: data,
    },
  }) as Promise<CloudFunctionResult<UserDb>>;
};
