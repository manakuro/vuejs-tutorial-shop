import Vue from 'vue'
import { mount } from 'avoriaz'
import sinon from 'sinon'
import axios from 'axios'
import Promise from 'bluebird'
import Vuex from 'vuex'
import VueMaterial from 'vue-material'
import 'babel-polyfill';

import ItemList from '@/components/dashboard/item-list/Item-list.vue'
import Item from '@/components/dashboard/item-list/item/Item.vue'


Vue.use(Vuex)
Vue.use(VueMaterial)

describe('Item-list.vue', () => {
  const items = [
    {
      "brand": "adidas",
      "id": 1,
      "img": "../../assets/placeholder.png",
      "price": "¥11,988"
    },
  ]
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        dashboard: {
          namespaced: true,
          getters: {
            getItems: () => items
          },
          actions: {
            fetchItems: sinon.stub(),
          }
        },
      },
    })
  })

  it('should render item list correctly', done => {
    const resolved = Promise.resolve({
      data: items
    })
    sinon.stub(axios, 'get').returns(resolved)

    const app = mount(ItemList, {
      propsData: {
        user: {}
      },
      store
    })

    app.instance().fetch()
    resolved.then(() => {
      const item = app.find('.column.item')[0]
      const brand = item.find('.content .brand')[0]
      const price = item.find('.content .price')[0]
      const img = item.find('img')[0]

      expect(app.vm.getItems).to.equal(items)
      expect(brand.text()).to.equal(app.vm.getItems[0].brand)
      expect(price.text()).to.equal(app.vm.getItems[0].price)
      expect(img.is('img')).to.equal(true)
      expect(item.contains(Item)).to.equal(true)

      done()
    }).catch(done)

  })

})
