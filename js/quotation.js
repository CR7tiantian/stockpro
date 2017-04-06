window.onload = function() {
	var mainMethod = {
		//切换全部和自选列表
		changeList:function(target) {
			target.addClass('active').siblings().removeClass('active');
			//切换到自选(此时要请求接口获取listData)
			if (target.hasClass('autoSelect')) {
					AppViewModel.listData([{
					stockname:'万科自选',
					stockcode:'000006',
					stockprice:'21.09',
					uppercent:-0.09
				}])
			} else {
				//切换到全部
				AppViewModel.listData([{
					stockname:'万科全部',
					stockcode:'000006',
					stockprice:'21.09',
					uppercent:-0.09
				}])
			}
		},
		//获取列表数据和翻页参数
		getListData:function(param) {
			//请求接口后给listData赋值然后在页面循环渲染
			//以下是假数据

			AppViewModel.listData([
			 {
			 	stockname:'万科',
				stockcode:'000006',
				stockprice:'21.09',
				uppercent:-0.09
			},{
			 	stockname:'万科',
				stockcode:'000006',
				stockprice:'21.09',
				uppercent:0.09
			},{
			 	stockname:'万科',
				stockcode:'000006',
				stockprice:'21.09',
				uppercent:-0.09
			}
			]);
			//总页数(暂时写死,由后台提供)
			var totalpages = 5;
			AppViewModel.totalpageArr(common.createArr(totalpages));
		},
		//上一页
		prevPage:function() {
			var currentVal = $('.pages').val();
			if (parseInt(currentVal) == 1) {
				layer.msg('这是第一页',{icon:7})
				return false
			} else {
				var pre = parseInt(currentVal)-1;
				$('.pages').val(pre.toString());
			}
		},
		//下一页
		nextPage:function() {
			var len = AppViewModel.totalpageArr().length,
					currentVal = $('.pages').val(),
					lastPage = AppViewModel.totalpageArr()[len-1];
			console.log(lastPage,parseInt(currentVal))		
			if (parseInt(currentVal) == lastPage) {
				layer.msg('这是最后一页了',{icon:7})
				return false;
			} else {
				var next = parseInt(currentVal)+1;
				$('.pages').val(next.toString());
				console.log(next,'zhao');
			}
		},
		//搜索框获取焦点字体变色
		focusChange:function() {
			$(this).css('color','#131313')
		}

	};
	mainMethod.getListData();
	//切换全部自选
	$('.selctAll,.autoSelect').on('click',function() {
		mainMethod.changeList($(this));
	});
	//选中页数
	$('.pages').on('change',function() {
		console.log($(this).val())
	});
	//点击搜索
	$('.search-btn').on('click',function() {
		var val = $.trim($('.search-input').val());
		if (!val) {
			layer.msg('请输入搜索条件',{icon:7})
		} else {
			console.log('搜索')
			//请求接口获取listData
		}

	});
	$('.search-input').on('focus',mainMethod.focusChange)
	//翻页
	$('.prev-page').on('click',mainMethod.prevPage);
	$('.next-page').on('click',mainMethod.nextPage)
}