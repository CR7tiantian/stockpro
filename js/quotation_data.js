//行情页面所用到的数据
var AppViewModel = {
	//列表数据
  listData:ko.observableArray([]),
  //总页数
  totalpageArr:ko.observableArray([])
}
/*AppViewModel.validRecentContactList = ko.computed(function() {
	return common.mergeConsultSession(this.sessions(),this.recentContactList());
},AppViewModel);*/
/*AppViewModel.sessions.subscribe(function () {
  mainMethod.initRecentList();
  mainMethod.getFriendList();
});*/
ko.applyBindings(AppViewModel);