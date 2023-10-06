import React, { useContext, useEffect, useState } from "react"
import Taro from '@tarojs/taro'
import { CoverView, CoverImage } from '@tarojs/components'
import HomePng from '../assets/home.png'
import HomeActivePng from '../assets/home-active.png'
import EyePng from '../assets/eye.png'
import EyeActivePng from '../assets/eye-active.png'
import MinePng from '../assets/mine.png'
import MineActivePng from '../assets/mine-active.png'
import { TabIndexContext } from "../store/tabIndex"

import './index.scss'

interface Props {}

const tabBar = {
  color: '#666',
  selectedColor: '#ed6c00',
  list: [
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
  ],
};

const permissions = ["home", "mine"];

const CustomTabBar: React.FC<Props> = () => {
  const { tabIndex } = useContext(TabIndexContext);
  const [tabList, setTabList] = useState<typeof tabBar.list>([]);

  const switchTab = (item) => {
    const url = item.pagePath
    Taro.switchTab({
      url
    })
  }

  const jumpEye = () => {
    Taro.switchTab({
      url: '/pages/eye/index'
    })
  }

  useEffect(() => {
    const tabs: typeof tabBar.list = [];
    permissions.forEach((permission) => {
      tabBar.list.forEach((tab) => {
        const { text } = tab;
        if (text === permission) {
          tabs.push(tab);
        }
      });
    });
    setTabList(tabs);
  }, [])

  return (
    <CoverView className="tab-bar">
      <CoverView className="tab-bar-wrap">
        {
          tabList.map((tab) => {
            return <CoverView className="tab-bar-wrap-item"
              onClick={() => switchTab(tab)}
              data-path={tab.pagePath}
              key={tab.text}
            >
              <CoverImage className="tab-bar-wrap-item-icon" src={tabIndex === tab.text ? tab.selectedIconPath : tab.iconPath} />
              <CoverView className="tab-bar-wrap-item-btn"
                style={{color: tabIndex === tab.text ? tabBar.selectedColor : tabBar.color}}
              >{tab.text}
              </CoverView>
            </CoverView>
          })
        }
      </CoverView>
      <CoverImage className="eye-icon" src={tabIndex === 'eye' ? EyeActivePng : EyePng} onClick={jumpEye} />
    </CoverView>
  );
};

export default CustomTabBar
