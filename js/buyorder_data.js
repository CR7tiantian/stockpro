//下单页面所用到的数据
var AppViewModel = {
	//现价
  currentPrice:ko.observable(),
  //高
  upPercent:ko.observable(),
  //开
  kaiNumber:ko.observable(),
 	//低
  downPercent:ko.observable(),
  //涨跌幅度
  updown:ko.observable(),
  //额 
 	limitNumber:ko.observable(),
 	//五档的数组
 	fiveArr:ko.observableArray([]),
 	//k线图
 	kxianImg:ko.observable(''),
 	//资金
 	fund:ko.observable(),
 	//信用资金
 	creditFund:ko.observable(),
 	//代码
 	code:ko.observable(''),
 	//手数
 	handNumber:ko.observable('')
}
ko.applyBindings(AppViewModel);