var mainMethod = {
	//获取当前账号
	getCurAccount:function() {

	},
	//点击确认按钮修改密码
	modifyPwd:function() {
		var pwdType = $('.pwtype').val(),
				oldpwd = $('.oldpwd').val(),
				newpwd = $('.newpwd').val(),
				confirmnewpwd = $('.confirmnewpwd').val();
		if (!oldpwd || !newpwd || !confirmnewpwd) {
			layer.msg('密码不能为空',{icon:7});
			return false;
		}
		if (newpwd !== confirmnewpwd) {
			layer.msg('两次输入新密码不一致，请重新输入',{icon:7});
			return false;
		};

		//开始请求接口传参数

	}
};
mainMethod.getCurAccount();
$('.confirmBtn').on('click',mainMethod.modifyPwd);