import React from "react";
import { View } from "@tarojs/components";
import { Cell, CellGroup } from "@antmjs/vantui";

import pkg from "../../../package.json";
import "./index.scss";

interface Props {}

const About: React.FC<Props> = () => {
  return (
    <View className="aboutPage">
      <View className="logo">
        {/* <Image src={logoUrl} /> */}
      </View>
      <View className="desc">{pkg.name}</View>
      <CellGroup>
        <Cell title="客户服务热线" isLink />
      </CellGroup>
      <CellGroup>
        <Cell title="开源计划" isLink url="/pages/open-plan/index" />
      </CellGroup>
      <View className="footer">
        <View className="desc">小程序版本&nbsp;V{pkg.version}</View>
      </View>
    </View>
  );
};

export default About;

definePageConfig({
  backgroundTextStyle: "light",
  navigationBarBackgroundColor: "#36b7ab",
  navigationBarTextStyle: "white",
  navigationBarTitleText: "关于我们",
  backgroundColor: "#f5f6f9",
});
