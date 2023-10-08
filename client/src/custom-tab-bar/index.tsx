import React, { useContext } from "react"
import Taro from '@tarojs/taro'
import { CoverView, CoverImage } from '@tarojs/components'

import { TabIndexContext } from "../store/tabIndex"
import HomePng from '../assets/home.png'
import HomeActivePng from '../assets/home-active.png'
import InterestPng from '../assets/interest.png'
import InterestActivePng from '../assets/interest-active.png'
import MinePng from '../assets/mine.png'
import MineActivePng from '../assets/mine-active.png'

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
      <CoverImage className="interest-icon" src={tabIndex === 'interest' ? InterestActivePng : InterestPng} onClick={jumpInterest} />
    </CoverView>
  );
};

export default CustomTabBar
