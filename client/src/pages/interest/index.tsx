import { useContext, useEffect } from 'react'
import { View } from "@tarojs/components";
import { useDidHide, useDidShow, useReady } from '@tarojs/taro'
import Router from "tarojs-router-next";

import { TabIndexContext } from 'src/store/tabIndex'
import { isLogin } from 'src/services/login';

import "./index.scss";

interface Props {}

const Interest: React.FC<Props> = () => {
  const { dispatch } = useContext(TabIndexContext);
  // React Hooks
  useEffect(() => {}, [])

  // 对应 onReady
  useReady(() => {})

  // 对应 onShow
  useDidShow(() => {
    if (!isLogin()) {
      Router.toLogin()
    }

    dispatch({
      type: "change",
      payload: "interest",
    });
  })

  // 对应 onHide
  useDidHide(() => {})

  return (
    <View className="interestPage">
      Interest
    </View>
  );
};

export default Interest;

definePageConfig({
  navigationBarTitleText: 'mfx'
});
