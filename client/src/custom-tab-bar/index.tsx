import React, { useContext } from "react"
import Taro from '@tarojs/taro'
import { CoverView, CoverImage } from '@tarojs/components'
import Router from "tarojs-router-next"

import { TabIndexContext } from "src/store/tabIndex"
import { isLogin } from "src/services/login"
import HomePng from 'src/assets/home.png'
import HomeActivePng from 'src/assets/home-active.png'
import InterestPng from 'src/assets/interest.png'
import InterestActivePng from 'src/assets/interest-active.png'
import MinePng from 'src/assets/mine.png'
import MineActivePng from 'src/assets/mine-active.png'

import './index.scss'

interface Props {}

const tabBarList = [
  {
    pagePath: "/pages/home/index",
    text: "home",
    iconPath: HomePng,
    selectedIconPath: HomeActivePng,
  },
  {
    pagePath: "/pages/mine/index",
    text: "mine",
    iconPath: MinePng,
    selectedIconPath: MineActivePng,
  },
];

const CustomTabBar: React.FC<Props> = () => {
  const { tabIndex } = useContext(TabIndexContext);

  const switchTab = (item) => {
    const url = item.pagePath
    Taro.switchTab({
      url
    })
  }

  const jumpInterest = () => {
    // 需要登陆
    if (!isLogin()) {
      Router.toLogin({params: {checkUrl: "/pages/interest/index"}})
      return
    }
    // 跳转Tab
    Taro.switchTab({
      url: '/pages/interest/index'
    })
  }

  return (
    <CoverView className="tab-bar">
      <CoverView className="tab-bar-wrap">
        {
          tabBarList.map((tab) => {
            return <CoverView className="tab-bar-wrap-item"
              onClick={() => switchTab(tab)}
              data-path={tab.pagePath}
              key={tab.text}
            >
              <CoverImage className="tab-bar-wrap-item-icon" src={tabIndex === tab.text ? tab.selectedIconPath : tab.iconPath} />
              <CoverView className={`tab-bar-wrap-item-btn${tabIndex === tab.text ? ' active' : ''}`}>{tab.text}</CoverView>
            </CoverView>
          })
        }
      </CoverView>
      <CoverView className="tab-bar-interest">
        <CoverImage className="tab-bar-interest-icon" src={tabIndex === 'interest' ? InterestActivePng : InterestPng} onClick={jumpInterest} />
      </CoverView>
    </CoverView>
  );
};

export default CustomTabBar
