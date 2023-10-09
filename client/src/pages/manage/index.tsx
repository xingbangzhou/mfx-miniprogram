import { useContext, useEffect } from 'react'
import { View } from "@tarojs/components";
import { useDidHide, useDidShow, useReady } from '@tarojs/taro'

import { TabIndexContext } from 'src/store/tabIndex'

import "./index.scss";

interface Props {}

const Manage: React.FC<Props> = () => {
  const { dispatch } = useContext(TabIndexContext);
  // React Hooks
  useEffect(() => {}, [])

  // 对应 onReady
  useReady(() => {})

  // 对应 onShow
  useDidShow(() => {
    dispatch({
      type: "change",
      payload: "manage",
    });
  })

  // 对应 onHide
  useDidHide(() => {})

  return (
    <View className="manage-page">
      Manage
    </View>
  );
};

export default Manage;

definePageConfig({
  navigationStyle: "custom"
});
