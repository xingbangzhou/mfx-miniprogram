import { action, makeObservable, observable } from "mobx"

import { queryProductList } from "src/services/product"
import Toast from 'src/components/toast'

class Products {
  constructor() {
    makeObservable(this)
  }

  // 产品列表
  @observable
  itemList: ProductDb[] = []
  @action
  setItemList(list: ProductDb[]) {
    this.itemList = list
  }

  loadList() {
    queryProductList().then(res => {
      if (res.result.success) {
        this.setItemList(res.result.data || [])
      } else {
        Toast.fail(res.result.msg)
      }
    })
    .finally(() => {})
  }
}

const products = new Products()

export default products
