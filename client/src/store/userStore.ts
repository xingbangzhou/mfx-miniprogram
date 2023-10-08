import { action, makeObservable, observable } from "mobx";
import Taro from "@tarojs/taro";

import { cloudLogin } from "src/services/login";
import { USER_INFO_STORAGE } from "src/constants/storages";

class UserStore {
  constructor() {
    makeObservable(this)
  }

  @observable
  id = ''
  @action
  setId(value: string) {
    this.id = value
  }
  @observable
  name = ''
  @action
  setName(value: string) {
    this.name = value
  }

  @observable
  avatar = ''
  @action
  setAvatar(value: string) {
    this.avatar = value
  }

  get userInfo() {
    const info = Taro.getStorageSync<UserDb>(USER_INFO_STORAGE)
    if (info) return info
    return null
  }

  async login(profile: {userInfo: Taro.UserInfo; [key: string]: any}) {
    const userRes = await cloudLogin(profile.userInfo);
    if (userRes.result.success) {
      this.loadDb(userRes.result.data)
      return true;
    }
    return false
  }

  private loadDb(data: UserDb) {
    Taro.setStorageSync(USER_INFO_STORAGE, data);

    this.setName(data.nickName)
    this.setAvatar(data.avatarUrl)
    this.setId(data._id)
  }
}

const userStore = new UserStore()

export default userStore
