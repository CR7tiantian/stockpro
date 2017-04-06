//行情页面所用到的数据
var AppViewModel = {
	//列表数据
  listData:ko.observableArray([]),
  //总页数
  totalpageArr:ko.observableArray([])
}
ko.applyBindings(AppViewModel);