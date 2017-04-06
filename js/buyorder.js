window.onload = function() {
	var mainMethod = {
		//通过接口获取页面展示数据
		getData:function() {
			/*以下为从接口获取数据后的赋值操作,暂时写死*/

			/*头部区域*/
			//现价
  		AppViewModel.currentPrice(11);
  		//高
  		AppViewModel.upPercent(22);
  		//开
  		AppViewModel.kaiNumber(11);
  		//低
  		AppViewModel.downPercent(44);
  		//涨跌幅度
  		AppViewModel.updown('0.99%');
  		//额
  		AppViewModel.limitNumber(20);

  		/*中间右边11行表格数据数组*/
  		AppViewModel.fiveArr([{
  			text:'卖五',
  			price:'9.21',
  			count:'3.22'
  		},{
  			text:'卖四',
  			price:'9.21',
  			count:'4.2'
  		},{
  			text:'卖三',
  			price:'9.43',
  			count:'3.2'
  		},{
  			text:'卖二',
  			price:'2.87',
  			count:'2.1'
  		},{
  			text:'卖一',
  			price:'2.56',
  			count:'3.2'
  		},{
  			text:'最新价',
  			price:'9.21',
  			count:'8.7'
  		},{
  			text:'买一',
  			price:'9.21',
  			count:'3.2'
  		},{
  			text:'买二',
  			price:'9.21',
  			count:'3.2'
  		},{
  			text:'买三',
  			price:'9.21',
  			count:'3.2'
  		},{
  			text:'买四',
  			price:'9.21',
  			count:'3.2'
  		},{
  			text:'买五',
  			price:'9.21',
  			count:'3.2'
  		}])

  		//k线图
  		AppViewModel.kxianImg('images/Logo.png');

  		/*下面买入区域*/
  		//资金
  		AppViewModel.fund(8989);
  		//信用资金
  		AppViewModel.creditFund(6767);
  		//代码
  		AppViewModel.code('000001');
  		//股票类型(上证还是深证)
  		$('.bourse').val('shanghai');
		},
		//点击买入按钮
		buyBtn:function() {
			var type = $('.bourse').val(),
					direction = $('.radio:checked').val(),
					code = AppViewModel.code(),
					handNumber = $('.shoushu').val();
			if (!code) {
				layer.msg('代码不能为空',{icon:7});
				return false;
			}
			if (!handNumber) {
				layer.msg('手数不能为空',{icon:7});
				return false;
			}		
			console.log(type,direction,code,handNumber);
			//		
		}
	};
	mainMethod.getData();
	$('.buybtn').on('click',mainMethod.buyBtn)
}