import Taro from "@tarojs/taro"
import { FUNCTION_PRODUCT } from "src/constants/functions"


// 获取产品列表
export const queryProductList = () => {
  return Taro.cloud.callFunction({
    name: FUNCTION_PRODUCT,
    data: {
      $url: "product/list",
    },
  }) as Promise<CloudFunctionResult<ProductDb[]>>
}
