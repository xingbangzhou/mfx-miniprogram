import { Input, View } from "@tarojs/components";
import { memo } from "react";
import css from './index.module.scss'

interface TextFieldProps {
  className?: string
}

const TextField = memo(function TextField({className}: TextFieldProps) {
  return <View className={`${css.textField} ${className || ''}`}>
    <Input></Input>
  </View>
})

export default TextField
