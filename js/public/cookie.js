/**
 * n cookie名称
 * v 值
 * e 失效时间
 * p 路径
 * d 域名
 * s 大小
 * @type {Object}
 */
var cookieFun={
  //读取COOKIES,n为COOKIE名
  Get:function(n){
    var re=new RegExp(n+'=([^;]*);?','gi');
    var r=re.exec(document.cookie)||[];
    return (r.length>1?r[1]:null)
  },
  // Get1:function(n){
  //   var re=new RegExp(n+'=([^;]*);?','gi');
  //   var r=re.exec(document.cookie)||[];
  //   return unescape(r.length>1?r[1]:null)
  // },
  //写入COOKIES,n为Cookie名，v为value
  Set:function(n,v,e,p,d,s){
    var t=new Date;
    p = p ||'/';
    d = d || '.fdc.com.cn';
    // e = e || 12;
    if(e){
      // 2.592e9一个月  8.64e7 一天 3.6e6 一小时
      t.setTime(t.getTime() + (e*2.592e9));
    }
    document.cookie=n+'='+v+'; '+(!e?'':'; expires='+t.toUTCString())+(!p?'':'; path='+p)+(!d?'':'; domain='+d)+(!s?'':'; secure') // Set cookie
  },
  Set1:function(n,v,e,p,d,s){
    var t=new Date;
    p = p ||'/';
    d = d || '.fdc.com.cn';
    e = e || 12;
    if(e){
      // 2.592e9一个月  8.64e7 一天 3.6e6 一小时
      t.setTime(t.getTime() + (e*2.592e9));
    }
    document.cookie=n+'='+escape(v)+'; '+(!e?'':'; expires='+t.toUTCString())+(!p?'':'; path='+p)+(!d?'':'; domain='+d)+(!s?'':'; secure') // Set cookie
  },
  Del:function(n,p,d){
    var t=uc_cookie.Get(n);
    p = p ||'/';
    d = d || '.fdc.com.cn';
    document.cookie=n+'='+(!p?'':'; path='+p)+(!d?'':'; domain='+d)+'; expires=Thu, 01-Jan-70 00:00:01 GMT';
    return t
  },
  method:{
    set:function(name,val,time){
      uc_cookie.Set(name,val,time);
    },
    get:function(name){
     return uc_cookie.Get(name);
    },
    del:function(name){
      uc_cookie.Del(name);
    }
  },
  userId:{
    set:function(val){
      uc_cookie.Set('uc_userInfo',val,12);
    },
    get:function(){
      return uc_cookie.Get('uc_userInfo');
    },
    del:function(){
      uc_cookie.Del('uc_userInfo');
    }
  }
}