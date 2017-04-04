var loginMethod = {
	//记住用户名密码
	saveUser:function() {
    var str_username = $(".username").val();
    var str_password = $(".password").val();
    if ($(".rememberpwd-checkbox").prop("checked")) {
	    $.cookie("rmbUser", "true", { expires: 7 }); //存储一个带7天期限的cookie
	    $.cookie("username", str_username, { expires: 7 });
	    $.cookie("password", str_password, { expires: 7 });
	    console.log('保存密码成功');
    }
    if ($(".auto-checkbox").prop("checked")) {
	    $.cookie("autologin", "true", { expires: 7 }); //存储一个带7天期限的cookie
	    $.cookie("username", str_username, { expires: 7 });
	    $.cookie("password", str_password, { expires: 7 });
	    console.log('自动登录成功')
    }
	},
	//自动登录
	autoLogin:function() {
		if ($.cookie('autologin')) {
			$('.username').val($.cookie("username"));
			$('.password').val($.cookie("password"));
			setTimeout(this.login(),2000);
		} else {
			return;
		}
	},
	//保存密码
	savePwd:function() {
		if ($.cookie("rmbUser")) {
			$('.username').val($.cookie("username"));
			$('.password').val($.cookie("password"));
		}
	},
	login:function() {
		loginMethod.saveUser();
		var username = $.trim($('.username').val());
		var password = $.trim($('.password').val());
		if (username =='' || password =='') {
			layer.msg('用户名或密码不能为空',{icon:7});
				
		} else {
			//请求接口
			var param = {
				loginName:username,
				password:password,
				anonymityId:'5860d80e88b958055e9a229e'
			};
			common.ajax('webimapi.im.loginwithaccount','get',param,function(res,success){
				if (res[success]) {
					var data = res[success].data;
					$.cookie('uc_userInfo',data.userId);
					$.cookie('uc_token',data.ucToken);
					$.cookie('im_token',data.imToken);
					$.cookie('fromLoginPage','1');
					layer.msg('请求接口成功')
				} else {
					layer.msg('账号名或者密码错误，请重新输入',{icon:7});
				}
			})
		}
	}
};
loginMethod.autoLogin();
loginMethod.savePwd();
$('.loginbtn').on('click',loginMethod.login);