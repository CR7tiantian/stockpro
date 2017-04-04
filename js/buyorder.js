window.onload = function() {
	var mainMethod = {
		//获取数据
		getData:function() {

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
			}		
			console.log(type,direction,code,handNumber);
			//		
		}
	};
	$('.buybtn').on('click',mainMethod.buyBtn)
}