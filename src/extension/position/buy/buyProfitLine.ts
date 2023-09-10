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

import { OverlayTemplate, TextAttrs, LineAttrs, Coordinate, Bounding, utils, Point, Overlay, Precision } from 'klinecharts'

import { currenttick } from '../../../store/tickStore'
import { orderList, setOrderList, useOrder } from '../../../store/positionStore'
import { instanceapi, symbol } from '../../../ChartProComponent'
import { OrderInfo } from '../../../types'
import { buyStyle, takeProfitStyle } from '../../../store/overlayStyleStore'
import { useOverlaySetting } from '../../../store/overlaySettingStore'

type lineobj = { 'lines': LineAttrs[], 'recttexts': rectText[] }
type rectText = { x: number, y: number, text: string, align: CanvasTextAlign, baseline: CanvasTextBaseline }

/**
 * 获取平行线
 * @param coordinates
 * @param bounding
 * @param overlay
 * @param precision
 * @returns {Array}
 */
function getParallelLines (coordinates: Coordinate[], bounding: Bounding, overlay: Overlay, precision: Precision): lineobj {
  const lines: LineAttrs[] = []
  const recttext: rectText[] = []
  let text
  let data: lineobj = { 'lines': lines, 'recttexts': recttext }
  const startX = 0
  const endX = bounding.width

  if (coordinates.length > 0) {
      data.lines.push({ coordinates: [{ x: startX, y: coordinates[0].y }, { x: endX, y: coordinates[0].y }] })

      text = useOrder().calcPL(overlay.points[0].value!, precision.price, true)
      let id = overlay.id
      let order: OrderInfo|null
      useOrder().updatePipsAndPL(overlay, text)
      data.recttexts.push({ x: endX, y: coordinates[0].y, text: `buy | ${text}` ?? '', align: 'right', baseline: 'middle' })
  }
  if (coordinates.length > 1) {
    data.lines.push({ coordinates: [{ x: startX, y: coordinates[1].y }, { x: endX, y: coordinates[1].y }] })

    text = useOrder().calcStopOrTarget(overlay.points[0].value!, overlay.points[1].value!, precision.price, true)
    data.recttexts.push({ x: endX, y: coordinates[1].y, text: `tp | ${text}` ?? '', align: 'right', baseline: 'middle' })
  }
  return data
}

const buyProfitLine: OverlayTemplate = {
  name: 'buyProfitLine',
  totalStep: 3,
  needDefaultPointFigure: true,
  needDefaultXAxisFigure: true,
  needDefaultYAxisFigure: true,
  createPointFigures: ({ overlay, coordinates, bounding, precision }) => {
    if (overlay.points[1].value! <= currenttick()?.close! || overlay.points[1].value! <= currenttick()?.high!) {
      useOrder().closeOrder(overlay, 'takeprofit')
    }
    const parallel = getParallelLines(coordinates, bounding, overlay, precision)
    return [
      {
        type: 'line',
        attrs: parallel.lines[0],
        styles: {
          style: 'dashed',
          dashedValue: [4, 4],
          size: 1,
          color: buyStyle().backgroundColor
        },
        ignoreEvent: true
      },
      {
        type: 'line',
        attrs: parallel.lines[1],
        styles: {
          style: 'dashed',
          dashedValue: [4, 4],
          size: 1,
          color: takeProfitStyle().backgroundColor
        }
      },
      {
        type: 'rectText',
        attrs: parallel.recttexts[0],
        styles: buyStyle(),
        ignoreEvent: true
      },
      {
        type: 'rectText',
        attrs: parallel.recttexts[1],
        styles: takeProfitStyle()
      }
    ]
  },
  createYAxisFigures: ({ overlay, coordinates, bounding, yAxis, precision }) => {
    const isFromZero = yAxis?.isFromZero() ?? false
    let textAlign: CanvasTextAlign
    let x: number
    if (isFromZero) {
      textAlign = 'left'
      x = 0
    } else {
      textAlign = 'ri ght'
      x = bounding.width
    }
    let text, text2

    if (!utils.isValid(text) && overlay.points[0].value !== undefined) {
      text = utils.formatPrecision(overlay.points[0].value, precision.price)
    }
    if (!utils.isValid(text2) && overlay.points[1].value !== undefined) {
      text2 = utils.formatPrecision(overlay.points[1].value, precision.price)
    }
    return [
      {
        type: 'rectText',
        attrs: { x, y: coordinates[0].y, text: text ?? '', align: textAlign, baseline: 'middle' },
        styles: buyStyle(),
        // ignoreEvent: true
      },
      {
        type: 'rectText',
        attrs: { x, y: coordinates[1].y, text: text2 ?? '', align: textAlign, baseline: 'middle' },
        styles: takeProfitStyle(),
      }
    ]
  },
  onPressedMoving: (event): boolean => {
    let coordinate: Partial<Coordinate>[] = [
      {x: event.x, y: event.y}
    ]
    const points = instanceapi()?.convertFromPixel(coordinate, {
      paneId: event.overlay.paneId
    })
    if ((points as Partial<Point>[])[0].value! > currenttick()?.close!&&
      (points as Partial<Point>[])[0].value! > event.overlay.points[0].value! &&
      event.figureIndex == 1
    ) {
      let id = event.overlay.id
      let order: OrderInfo|null
      if (order = orderList().find(order => order.orderId === parseInt(id.replace('orderline_', ''))) ?? null) { // order found
        order!.takeProfit = parseFloat( (points as Partial<Point>[])[0].value?.toFixed(instanceapi()?.getPriceVolumePrecision().price)!)
        const orderlist = orderList().map(orda => (orda.orderId === order?.orderId ? order : orda))
        setOrderList(orderlist)
        event.overlay.points[1].value = order?.takeProfit
      }
      //the overlay represented an order that does not exist on our pool, it should be handled here
    }
    return true
  },
  onPressedMoveEnd: (event): boolean => {
    let id = event.overlay.id
    let order: OrderInfo|null
    if (order = orderList().find(order => order.orderId === parseInt(id.replace('orderline_', ''))) ?? null) { // order found
      useOrder().updateOrder({
        id: order.orderId,
        takeprofit: order.takeProfit
      })
      return false
    }
    //the overlay represented an order that does not exist on our pool, it should be handled here
    return false
  },
  onRightClick: (event): boolean => {
    useOverlaySetting().profitPopup(event, 'buy')
    return true
  }
}

export default buyProfitLine