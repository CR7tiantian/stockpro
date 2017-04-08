var loginMethod = {
	login:function() {
		var username = $.trim($('.username').val());
		var password = $.trim($('.password').val());
		if (username =='' || password =='') {
			layer.msg('用户名或密码不能为空',{icon:7});
				return false;
		} 
		//请求接口
		var param = {
			loginName:'testguo',
			loginPassword:'123321'	
		};
	/*common.ajax('106.15.35.237/ctmp-m/login','get',param,function(res,success){
		if (res[success]) {
			var data = res[success].data;
			$.cookie('uc_userInfo',data.userId);
			$.cookie('uc_token',data.ucToken);
			$.cookie('im_token',data.imToken);
			$.cookie('fromLoginPage','1');
			layer.msg('请求接口成功')
		} else {
			layer.msg('账号名或者密码错误，请重新输入',{icon:7});
		}*/
		$.ajax({
			type:'get',
			url:'106.15.35.237/ctmp-m/login',
			crossDomain:true,
			data:param,
			dataType:'jsonp',
			jsonp:'callback',
			success:function(response) {
				console.log('请求成功')
			},
			error:function(response) {
				console.log('请求失败')
			}
		})
	}
}	
$('.loginbtn').on('click',loginMethod.login);