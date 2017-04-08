var mainMethod = {
	//请求接口获取可提金额
	allowMoney:function() {
		//暂时写死
		$('.allowMoney').val('12345.00')
	},
	//提交
	submit:function() {
		var allowMoney = Number($('.allowMoney').val()),
				wantMoney = Number($('.transferMoney').val()),
				confirmMoney = Number($('.confirmMoney').val());
		if (!wantMoney || !confirmMoney) {
			layer.msg('提款金额不能为空',{icon:7});
			return false;
		}			
		if (typeof wantMoney !== 'number' ||typeof confirmMoney !== 'number') {
			layer.msg('提款金额必须为数字',{icon:7});
			return false;
		}
		if (wantMoney>allowMoney) {
			layer.msg('提款金额必须小于可提金额',{icon:7});
			return false;
		}
		if (wantMoney !== confirmMoney) {
			layer.msg('两次输入提款金额不一致，请重新输入',{icon:7});
			return false;
		}
		//验证通过后提交,请求接口
		console.log('校验成功')
	}
}
mainMethod.allowMoney();
$('.confirmBtn').on('click',mainMethod.submit);