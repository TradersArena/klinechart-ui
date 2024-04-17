console.log("-=======  KEYEVENTSTORE . TS =======---");


import { createSignal, startTransition } from "solid-js";
import { indicatorModalVisible, instanceapi, orderPanelVisible, pausedStatus, periodModalVisible, rootlelID, screenshotUrl, setIndicatorModalVisible, setOrderPanelVisible, setPausedStatus, setPeriodModalVisible, setScreenshotUrl, setSettingModalVisible, setSyntheticPauseStatus, settingModalVisible, syntheticPauseStatus } from "../ChartProComponent";
import { cleanup, datafeed, documentResize, fullScreen, orderModalVisible, range, setOrderModalVisible, setRange, theme } from "./chartStateStore";
import { ordercontr, useOrder } from "./positionStore";
import { Chart } from "@basttyy/klinecharts";
import { periodInputValue, setPeriodInputValue } from "../widget/timeframe-modal";
import { setInputClass } from "../component/input";
import { showOverlaySetting, showPositionSetting } from "./overlaySettingStore";

import { OrderInfo, OrderModifyInfo } from "../types";
import { drawOrder } from "./positionStore";
// import { modifyOrder } from "../DefaultOrderController";

export const [ctrlKeyedDown, setCtrlKeyedDown] = createSignal(false)
export const [widgetref, setWidgetref] = createSignal<string | Chart | HTMLElement>('')
export const [timerid, setTimerid] = createSignal<NodeJS.Timeout>()

export const useKeyEvents = () => {
  const handleKeyDown = (event:KeyboardEvent) => {
    if (event.ctrlKey || event.metaKey) {
      event.preventDefault()
      setCtrlKeyedDown(true)
    }
    if (ctrlKeyedDown()) {
      switch (event.key) {
        case 'o':
          if (allModalHidden('order'))
            showOrderPopup()
          break;
        case 'l':
          showOrderlist()
          break;
        case 'i':
          if (allModalHidden('indi')) {
            setIndicatorModalVisible(visible => !visible)
            syntheticPausePlay(true)
          }
          break;
        case 's':
          if (allModalHidden('settings')) {
            setSettingModalVisible(visible => !visible)
            syntheticPausePlay(true)
          }
          break;
        case 'z':

          console.log(" Pressed: ctrl [Z]");

          const orderExample: OrderInfo = {
            orderId: 1,
            action: 'buy',
            entryPoint: 67000,
            // exitPoint: null,
            stopLoss: 66000,
            takeProfit: 69000,
            lotSize: 100,
            // pips?: number,
            // pl?: number,
            entryTime: "2024-04-01T12:00:00Z",
            // exitTime?: string,
            // exitType?: ExitType,
            // partials?: string,
            // sessionId?: number
          };
          drawOrder(orderExample);
          //TODO: we should undo one step
          break;
        case 'y':
          console.log(" Pressed: ctrl [Y]");
          //TODO: we should redo one step
          const modifyExmaple: OrderModifyInfo = {
            id: 1,
            action: 'buy',
            entrypoint: 68000,
            // exitpoint: ,
            stoploss: 60000,
            takeprofit: 69200,
            lotsize: 100,
            // pips: ,
            // pl: ,
            // exittime: ,
            // exittype: ,
            // partials: ,
          };
          // modifyOrder(modifyExmaple);
          break;
        case 'c':
          //TODO: we should copy any selected overlay to clipboard
          console.log(" Pressed: ctrl [C]");

          const orderExample2: OrderInfo = {
            orderId: 2,
            action: 'buylimit',
            entryPoint: 60000,
            // exitPoint: null,
            // stopLoss: 71000,
            // takeProfit: 72500,
            lotSize: 100,
            // pips?: number,
            // pl?: number,
            entryTime: "2024-04-01T12:00:00Z",
            // exitTime?: string,
            // exitType?: ExitType,
            // partials?: string,
            // sessionId?: number
          };
          drawOrder(orderExample2);


          break;
        case 'v':
          //TODO: we should paste the copied overlay from clipboard
          break;
        case 'p':
          if (allModalHidden('screenshot'))
            takeScreenshot()
          break;
        case 'f':
          toggleFullscreen()
          break;
        case 'Backspace':
          cleanup()
          break;
      }

      return
    }
    if (['1','2','3','4','5','6','7','8','9'].includes(event.key) && allModalHidden('period')) {
      if (periodInputValue().length < 1)
        setPeriodInputValue(event.key)
      if (!periodModalVisible()) {
        syntheticPausePlay(true)
        setPeriodModalVisible(true)
        setInputClass('klinecharts-pro-input klinecharts-pro-timeframe-modal-input input-error')
      }
    } else if (event.key === ' ') {
      pausePlay()
    } else if (event.key === 'ArrowDown') {
      handleRangeChange(-1)
    } else if (event.key === 'ArrowUp') {
      handleRangeChange(1)
    } else if (event.key === 'Delete') {
      instanceapi()?.removeOverlay()
    } else if (event.key === 'Escape') {
      //TODO: this should hide all modals
      setPeriodModalVisible(false)
      setPeriodInputValue('')

      setSettingModalVisible(false)
      setOrderPanelVisible(false)
      setIndicatorModalVisible(false)
      setScreenshotUrl('')
      syntheticPausePlay(false)
    }
  }

  const handleKeyUp = (event:KeyboardEvent) => {
    if (!event.ctrlKey || !event.metaKey) {
      setCtrlKeyedDown(false)
      event.preventDefault()
    }
  }

  return { handleKeyDown, handleKeyUp }
}

const allModalHidden = (except: 'settings'|'indi'|'screenshot'|'order'|'period') => {
  let value = false
  switch (except) {
    case 'settings':
      value = !indicatorModalVisible() && screenshotUrl() === '' && !orderModalVisible() && !periodModalVisible() && !showPositionSetting() && !showOverlaySetting()
    case 'indi':
      value = !settingModalVisible() && screenshotUrl() === '' && !orderModalVisible() && !periodModalVisible() && !showPositionSetting() && !showOverlaySetting()
      break
    case 'screenshot':
      value = !settingModalVisible() && !indicatorModalVisible() && !orderModalVisible() && !periodModalVisible() && !showPositionSetting() && !showOverlaySetting()
      break
    case 'order':
      value = !settingModalVisible() && !indicatorModalVisible() && screenshotUrl() === '' && !periodModalVisible() && !showPositionSetting() && !showOverlaySetting()
      break
    case 'period':
      value = !settingModalVisible() && !indicatorModalVisible() && screenshotUrl() === '' && !orderModalVisible() && !showPositionSetting() && !showOverlaySetting()
      break
  }
  return value
}

const showOrderPopup = () => {
  syntheticPausePlay(true)
  setOrderModalVisible(true)
  ordercontr()!.launchOrderModal('placeorder', useOrder().onOrderPlaced)
}

const showOrderlist = async () => {
  try {
    await startTransition(() => setOrderPanelVisible(!orderPanelVisible()))
    documentResize()
  } catch (e) {}
}

const takeScreenshot = () => {
  const url = instanceapi()!.getConvertPictureUrl(true, 'jpeg', theme() === 'dark' ? '#151517' : '#ffffff')
  syntheticPausePlay(true)
  setScreenshotUrl(url)
}

const toggleFullscreen = () => {
  if (!fullScreen()) {
    // const el = ref?.parentElement
    const el = document.querySelector(`#${rootlelID()}`)
    if (el) {
      // @ts-expect-error
      const enterFullScreen = el.requestFullscreen ?? el.webkitRequestFullscreen ?? el.mozRequestFullScreen ?? el.msRequestFullscreen
      enterFullScreen.call(el)
      // setFullScreen(true)
    } else {
    }
  } else {
    // @ts-expect-error
    const exitFullscreen = document.exitFullscreen ?? document.msExitFullscreen ?? document.mozCancelFullScreen ?? document.webkitExitFullscreen
    exitFullscreen.call(document)
    // setFullScreen(false)
  }
}

const pausePlay = () => {
  setPausedStatus(!pausedStatus());
  (datafeed() as any).setIsPaused = pausedStatus()
}

export const syntheticPausePlay = (ispaused?: boolean) => {
  setSyntheticPauseStatus(ispaused ?? !syntheticPauseStatus());
  if ((!ispaused && !pausedStatus()) || ispaused) 
    (datafeed() as any).setIsPaused = syntheticPauseStatus()
}

const handleRangeChange = (value: number) => {
  const maxRange = 11

  if (value > 0 && range() < 10) {
    setRange(+range() + +value);
    (datafeed() as any).setInterval = (maxRange - range()) * 100
  }
  else if (value < 0 && range() > 1) {
    setRange(+range() + value);
    (datafeed() as any).setInterval = (maxRange - range()) * 100
  }
}