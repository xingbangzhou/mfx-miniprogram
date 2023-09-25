import Taro from "@tarojs/taro";
import { FUNCTION_LOGIN } from "src/constants/functions"

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
