import { DeepPartial, FigureCreate, IndicatorCreate, KLineData, OverlayCreate, PaneOptions, Styles } from '@basttyy/klinecharts';

export type OrderType = "buy" | "sell" | "buystop" | "buylimit" | "sellstop" | "selllimit";
export type OrderModalType = "placeorder" | "modifyorder" | "closepartial";
export type ExitType = "stoploss" | "takeprofit" | "breakeven" | "manualclose" | "cancel";
export interface SymbolInfo {
	ticker: string;
	name?: string;
	shortName?: string;
	exchange?: string;
	market?: string;
	pricePrecision?: number;
	volumePrecision?: number;
	priceCurrency?: string;
	dollarPerPip?: number;
	type?: string;
	logo?: string;
}
export interface OrderInfo {
	orderId: number;
	action: OrderType;
	entryPoint: number;
	exitPoint?: number;
	stopLoss?: number;
	takeProfit?: number;
	lotSize: number;
	pips?: number;
	pl?: number;
	entryTime?: string;
	exitTime?: string;
	exitType?: ExitType;
	partials?: string;
	sessionId?: number;
}
export interface OrderModifyInfo {
	id: number;
	action?: OrderType;
	entrypoint?: number;
	exitpoint?: number;
	stoploss?: number;
	takeprofit?: number;
	lotsize?: number;
	pips?: number;
	pl?: number;
	exittime?: string;
	exittype?: ExitType;
	partials?: string;
}
export interface Period {
	multiplier: number;
	timespan: string;
	text: string;
}
export interface sessionType {
	id: number | string;
	starting_bal: number;
	current_bal: number;
	equity: number;
	strategy_id: number;
	user_id: number;
	pair: string;
	chart: string;
	chart_timestamp: number | null;
	start_date: string;
	end_date: string;
}
export interface sessionModifyType {
	id?: number | string;
	starting_bal?: number;
	current_bal?: number;
	equity?: number;
	strategy_id?: number;
	user_id?: number;
	pair?: string;
	chart?: string;
	chart_timestamp?: number | null;
	start_date?: string;
	end_date?: string;
}
export type IndicatorsType = {
	value?: IndicatorCreate;
	isStack?: boolean;
	paneOptions?: PaneOptions;
};
export type OverlaysType = {
	value?: OverlayCreate;
	paneId: string;
};
export type FiguresType = {
	value?: string | FigureCreate;
	ctx: CanvasRenderingContext2D;
};
export type OrderStyleType = {
	lineStyle?: {
		style?: string;
		size?: number;
		color?: string;
		dashedValue?: number[];
	};
	labelStyle?: {
		style?: string;
		size?: number;
		family?: string;
		weight?: string;
		paddingLeft?: number;
		paddingRight?: number;
		paddingBottom?: number;
		paddingTop?: number;
		borderStyle?: string;
		borderSize?: number;
		color?: string;
		borderColor?: string;
		backgroundColor?: string;
	};
};
export type OrderStylesType = {
	buyStyle?: OrderStyleType;
	buyLimitStyle?: OrderStyleType;
	buyStopStyle?: OrderStyleType;
	sellStyle?: OrderStyleType;
	sellLimitStyle?: OrderStyleType;
	sellStopStyle?: OrderStyleType;
	stopLossStyle?: OrderStyleType;
	takeProfitStyle?: OrderStyleType;
};
export interface ChartObjType {
	styleObj?: DeepPartial<Styles>;
	overlays?: OverlaysType[];
	figures?: FiguresType[];
	indicators?: IndicatorsType[];
	orderStyles?: OrderStylesType;
}
export type DatafeedSubscribeCallback = (data: KLineData, timestamp?: number) => void;
export type OrderPlacedCallback = (data: OrderInfo | null) => void;
export interface Datafeed {
	searchSymbols(search?: string): Promise<SymbolInfo[]>;
	getHistoryKLineData(symbol: SymbolInfo, period: Period, from: number, to: number): Promise<KLineData[]>;
	subscribe(symbol: SymbolInfo, period: Period, callback: DatafeedSubscribeCallback): void;
	unsubscribe(symbol?: SymbolInfo, period?: Period, currtimestamp?: number): void;
}
export interface OrderResource {
	retrieveOrder(order_id: number): Promise<OrderInfo | null>;
	retrieveOrders(action?: OrderType, session_id?: number | string): Promise<OrderInfo[] | null>;
	openOrder(action: OrderType, lot_size: number, entry_price: number, stop_loss?: number, take_profit?: number): Promise<OrderInfo | null>;
	closeOrder(order_id: number, lotsize?: number): Promise<OrderInfo | null>;
	modifyOrder(order: OrderModifyInfo): Promise<OrderInfo | null>;
	unsetSlOrTP(order_id: string | number, slortp: "sl" | "tp"): Promise<OrderInfo | null>;
	launchOrderModal(type: OrderModalType, callback: OrderPlacedCallback, order?: OrderModifyInfo): void;
}
export interface ChartSessionResource {
	retrieveSession(id: number | string): Promise<sessionType | null>;
	updateSession(session: sessionModifyType): Promise<sessionType | null>;
	isNotGuest(): boolean;
}
export interface ChartProOptions {
	container: string | HTMLElement;
	styles?: DeepPartial<Styles>;
	watermark?: string | Node;
	theme?: string;
	locale?: string;
	drawingBarVisible?: boolean;
	orderPanelVisible?: boolean;
	symbol: SymbolInfo;
	period: Period;
	periods?: Period[];
	timezone?: string;
	mainIndicators?: string[];
	subIndicators?: string[];
	datafeed: Datafeed;
	chartSession: sessionType;
	dataTimestamp: number;
	orderController: OrderResource;
	chartSessionController: ChartSessionResource;
	rootElementId: string;
}
export interface ChartPro {
	setTheme(theme: string): void;
	getTheme(): string;
	setStyles(styles: DeepPartial<Styles>): void;
	getStyles(): Styles;
	setLocale(locale: string): void;
	getLocale(): string;
	setTimezone(timezone: string): void;
	getTimezone(): string;
	setSymbol(symbol: SymbolInfo): void;
	getSymbol(): SymbolInfo;
	setPeriod(period: Period): void;
	getPeriod(): Period;
}
export declare class DefaultDatafeed implements Datafeed {
	constructor(apiKey: string);
	private _apiKey;
	private _prevSymbolMarket?;
	private _ws?;
	searchSymbols(search?: string): Promise<SymbolInfo[]>;
	getHistoryKLineData(symbol: SymbolInfo, period: Period, from: number, to: number): Promise<KLineData[]>;
	subscribe(symbol: SymbolInfo, period: Period, callback: DatafeedSubscribeCallback): void;
	unsubscribe(symbol?: SymbolInfo, period?: Period, currtimestamp?: number): void;
}
export declare class KLineChartPro implements ChartPro {
	constructor(options: ChartProOptions);
	destroy(): void;
	private _container;
	private _chartApi;
	setTheme(theme: string): void;
	getTheme(): string;
	setStyles(styles: DeepPartial<Styles>): void;
	getStyles(): Styles;
	setLocale(locale: string): void;
	getLocale(): string;
	setTimezone(timezone: string): void;
	getTimezone(): string;
	setSymbol(symbol: SymbolInfo): void;
	getSymbol(): SymbolInfo;
	setPeriod(period: Period): void;
	getPeriod(): Period;
}
export declare class DefaultOrderController implements OrderResource {
	constructor(_apiurl: string, _apikey: string, _testsession_id: number | string);
	private apikey;
	private apiurl;
	private testsesson_id;
	retrieveOrder(order_id: number): Promise<OrderInfo>;
	retrieveOrders(action?: OrderType, session_id?: number): Promise<OrderInfo[]>;
	openOrder(action: OrderType, lot_size: number, entry_price: number, stop_loss?: number, take_profit?: number): Promise<OrderInfo | null>;
	closeOrder(order_id: number, lotsize?: number): Promise<OrderInfo | null>;
	modifyOrder(order: OrderModifyInfo): Promise<OrderInfo | null>;
	unsetSlOrTP(order_id: string | number, slortp: "sl" | "tp"): Promise<OrderInfo | null>;
	launchOrderModal(type: OrderModalType, callback: OrderPlacedCallback, order?: OrderModifyInfo): void;
	private makeFetchWithAuthAndBody;
}
export declare class DefaultSessionController implements ChartSessionResource {
	constructor(_apiurl: string, _apikey: string);
	private apikey;
	private apiurl;
	retrieveSession(id: number): Promise<sessionType | null>;
	isNotGuest(): boolean;
	updateSession(session: sessionModifyType): Promise<sessionType | null>;
	private makeFetchWithAuthAndBody;
}
declare function load(key: string, ls: any): void;

export {
	load as loadLocales,
};

export as namespace klinechartsui;

export {};
