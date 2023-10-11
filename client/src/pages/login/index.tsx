import { useEffect } from 'react'
import { Button, Image, View } from "@tarojs/components"
import Taro, { useDidHide, useDidShow, useReady } from '@tarojs/taro'
import Router from "tarojs-router-next"

import { user } from 'src/stores'
import LogoPng from "src/assets/logo.png"

import "./index.scss"

interface Props {}

const Login: React.FC<Props> = () => {
  // React Hooks
  useEffect(() => {}, [])

  // 对应 onReady
  useReady(() => {})

  // 对应 onShow
  useDidShow(() => {})

  // 对应 onHide
  useDidHide(() => {})

  const onLogin = () => {
    user.login().then(isLogin => {
      if (isLogin) {
        const {checkUrl} = Router.getParams<{checkUrl: string}>()
        if (checkUrl) {
          Taro.switchTab({
            url: checkUrl
          })
          return
        }
      }
      Router.back()
    })
  }

  return (
    <View className="login-page">
      <Image src={LogoPng} className="logo" />
      <Button className="btn" type="primary" onClick={onLogin}>用户一键登录</Button>
    </View>
  );
};

export default Login;

definePageConfig({
  navigationBarTitleText: '登录'
});
