import { useContext, useEffect } from 'react'
import { View, Image } from '@tarojs/components'
import { useDidHide, useDidShow, useReady } from '@tarojs/taro'
import { observer } from '@tarojs/mobx'
import { Cell, CellGroup } from '@antmjs/vantui'
// import Router from "tarojs-router-next";

import { TabIndexContext } from 'src/store/tabIndex'
import {user} from 'src/store'
import OrderSVG from "src/assets/user/order.svg"
import AddressSVG from "src/assets/common/address.svg"

import "./index.scss"

function Mine() {
  const { dispatch } = useContext(TabIndexContext);

  // React Hooks
  useEffect(() => {}, [])

  // 对应 onReady
  useReady(() => {})

  // 对应 onShow
  useDidShow(() => {
    dispatch({
      type: "change",
      payload: "mine",
    });
  })

  // 对应 onHide
  useDidHide(() => {})


  return (
    <View className="minePage">
      <View className="mine">
          <View className="info">
            <Image src={user.avatar} className="avatar" />
            <View className="message">
              <View className="name">{user.name}</View>
            </View>
          </View>
          <View className="content">
            <View className="operation">
              <CellGroup inset>
                <Cell
                  title="我的订单"
                  isLink
                  renderIcon={<Image src={OrderSVG} className="icon" />}
                />
                <Cell
                  title="我的地址"
                  isLink
                  renderIcon={
                    <Image src={AddressSVG} className="icon" />
                  }
                />
                {/* <Cell
                  title="关于我们"
                  isLink
                  renderIcon={<Image src={AboutSVG} className="icon"
                    onClick={() => Router.toAbout()}
                  />}
                /> */}
              </CellGroup>
            </View>
          </View>
        </View>
    </View>
  )
}

export default observer(Mine)

definePageConfig({
  // navigationStyle: "custom",
  navigationBarTitleText: "mfx",
});
