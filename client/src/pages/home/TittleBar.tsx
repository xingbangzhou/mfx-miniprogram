import { CoverImage, CoverView } from "@tarojs/components"
import React from "react"

import LogoPng from 'src/assets/logo.png'

interface Props {

}

const TittleBar: React.FC<Props> = () => {
  return (
    <CoverView className="title-bar">
      <CoverImage className="title-bar-logo" src={LogoPng} />
      <CoverView className="title-bar-title">欢迎光临</CoverView>
    </CoverView>
  )
}

export default TittleBar
