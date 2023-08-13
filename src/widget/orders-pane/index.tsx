/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, createResource, createMemo, createSignal, createEffect, Show, For, onMount } from 'solid-js'
import { OverlayCreate, OverlayMode } from 'klinecharts'
import i18n from '../../i18n'
import { List, Checkbox, Input, Button, Loading } from '../../component'
import { Datafeed, OrderInfo, OrderResource, OrderType } from '../../types'
import { drawOrder, orderList, useOrder } from '../../store/positionStore'
import { instanceapi } from '../../ChartProComponent'

export interface OrderPanelProps {
  context: string
  orderController: OrderResource
}

const GROUP_ID = 'order_panel'

const OrdersPanel: Component<OrderPanelProps> = props => {
  let loading = true

  const [loadingVisible, setLoadingVisible] = createSignal(true)
  const [ordersList, setOrdersList] = createSignal<OrderInfo[]>([])

  const onOrderEdited = (order: OrderInfo|null) => {
    if (order) {
      drawOrder(order)
      let orderlist = orderList()
      orderlist.map(orda => (orda.orderId === order.orderId ? order : orda))
      setOrdersList(orderlist)
    }
  }

  const performOrderAction = (order: OrderInfo, action: 'edit'|'close'|'cancel') => {
    let overlay = instanceapi()?.getOverlayById(`orderline_${order.orderId}`)
    if (!overlay) {
      return
    }
    if (action == 'edit') {
      props.orderController.launchOrderModal('modifyorder', onOrderEdited, {
        id: order.orderId,
        stoploss: order.stopLoss,
        takeprofit: order.takeProfit,
        entrypoint: order.action == 'buy' || order.action == 'sell' ? undefined : order.entryPoint,
        lotsize: order.action == 'buy' || order.action == 'sell' ? undefined : order.lotSize
      })
      return
    }
    useOrder().closeOrder(overlay, action == 'close' ? 'manualclose' : 'cancel')
  }

  onMount(() => {
    setLoadingVisible(true)
    loading = true
    const getList =async (action?: OrderType) => {
      const orderlist = action ? orderList().filter(order => (order.action == action)) : ordersList()
      setOrdersList(orderlist)
      setLoadingVisible(false)
      loading = false
    }
    getList()
  })
  return (
    <div
      class="klinecharts-pro-order-panel">
      <Show when={(orderList().length < 1) && !loadingVisible()}>
        <span>No Opened Orders</span>
      </Show>
      <Show when={orderList().length > 0 || loadingVisible()}>
        <List
          class="klinecharts-pro-order-pane-list"
          loading={loadingVisible()}>
          {
            !loadingVisible() ? <li>
            <div class="order-header">
              <span style={'width: 70px'}>Order Id</span>
              <span style={'width: 70px'}>Session Id</span>
              <span style={'width: 110px'}>Action Type</span>
              <span style={'width: 110px'}>Entry Point</span>
              <span style={'width: 110px'}>Take Profit</span>
              <span style={'width: 110px'}>Stop Loss</span>
              <span style={'width: 140px'}>Profit/Loss</span>
              <span style={'width: 110px'}>Exit Point</span>
              <span style={'width: 160px'}>Entry Time</span>
              <span style={'width: 160px'}>Exit Time</span>
              <span style={'width: 110px'}>Edit Order</span>
              <span style={'width: 110px'}>Close Order</span>
            </div>
          </li> :
          <li></li>
          }
          {
            orderList().map(order => (
              <li>
                <div class='order-item'>
                  <span style={'width: 70px'}>{ order.orderId }</span>
                  <span style={'width: 70px'}>{ order.sessionId }</span>
                  <span style={'width: 110px'}>{ order.action }</span>
                  <span style={'width: 110px'}>{ order.entryPoint }</span>
                  <span style={'width: 110px'}>{ order.takeProfit }</span>
                  <span style={'width: 110px'}>{ order.stopLoss }</span>
                  <span style={'width: 140px'}>{ order.pl }</span>
                  <span style={'width: 110px'}>{ order.exitPoint }</span>
                  <span style={'width: 160px'}>{ order.entryTime }</span>
                  <span style={'width: 160px'}>{ order.exitTime }</span>
                  <span style={'width: 110px'}>
                    <Button
                      type='confirm'
                      class='edit-button'
                      onClick={() => {performOrderAction(order, 'edit')}}>Edit</Button>
                  </span>
                  <span style={'width: 110px'}>
                    <Button
                      type='cancel'
                      class='close-button'
                      onClick={() => {performOrderAction(order, order.action == 'buy' || order.action == 'sell' ? 'close' : 'cancel')}}>{ order.action == 'buy' || order.action == 'sell' ? 'Close' : 'Cancel'}</Button>
                  </span>
                </div>
              </li>
            ))
          }
        </List>
      </Show>
    </div>
  )
}

export default OrdersPanel