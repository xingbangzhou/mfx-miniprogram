import { useEffect } from 'react'
import { ButtonProps, Image, View } from "@tarojs/components";
import { useDidHide, useDidShow, useReady } from '@tarojs/taro'
import { Button } from '@antmjs/vantui';
import Router from "tarojs-router-next";

import { userStore } from 'src/store';
import LogoPng from "src/assets/logo.png";

import "./index.scss";

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

  const onGetUserInfo: ButtonProps['onGetUserInfo'] = event => {
    if (event.detail) {
      userStore.login(event.detail as any).then(() => {
        Router.back()
      })
    }
  }

  return (
    <View className="loginPage">
      <Image src={LogoPng} className="logo" />
      <Button className="btn" type="primary" openType="getUserInfo" onGetUserInfo={onGetUserInfo}>用户一键登录</Button>
    </View>
  );
};

export default Login;

definePageConfig({
  navigationBarTitleText: '登录'
});
