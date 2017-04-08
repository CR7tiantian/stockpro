window.onload = function() {
	var mainMethod = {
	//请求接口获取表格数据(暂时写死);
		getListData:function() {
			var listdata = [{
				//代码
				code:{
					name:'万科A',
					number:'000002'
				},
				//盈亏
				yingkui:'2',
				//买入价
				buyprice:2,
				//卖出价
				sellprice:3,
				//手数
				handnumber:12,
				//时间(时间戳格式)
				date:1491624277810
			}]
			AppViewModel.listData(listdata);
		}
	}

	mainMethod.getListData();
}
