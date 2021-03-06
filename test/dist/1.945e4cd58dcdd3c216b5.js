webpackJsonp([1],{

/***/ 314:
/***/ function(module, exports) {

	'use strict';
	
	
	var defaults = {
	    url: '//res.wx.qq.com/open/js/jweixin-1.0.0.js', //微信JSSDK的URL
	    configHostnameMap: [ //配置wx的js与域名的映射关系
	        { pattern: /dianping.com$/, host: 'cps.dianping.com' },
	        { pattern: /51ping.com$/, host: 'tcps.51ping.com' },
	        { pattern: /.meituan.(com|net)$/, host: 'i.meituan.com/firework/api'}
	    ],
	    config: { //默认配置
	        debug: false
	    },
	    onError: function (msg) {
	        console && console.error && console.error(msg);
	    }
	};
	
	var isLoaded = false;
	
	var isLoading = false;
	
	var callbackQueue = [];
	
	var loadScript = function (src, onload) {
	    var script = document.createElement('script');
	    script.src = src;
	    script.onload = onload;
	    document.getElementsByTagName("head")[0].appendChild(script);
	};
	
	
	exports.use = function (callback) {
	    var options = defaults;
	    if (/[\?&]debug:wx($|&)/.test(window.location.search)) {
	        options.config.debug = true;
	    }
	
	    if (isLoaded) {
	        return callback(window.wx);
	    }
	
	    callbackQueue.push(callback);
	
	    if (isLoading) {
	        return;
	    }
	
	    isLoading = true;
	
	    var configHostname = options.configHostnameMap[0].host;
	    options.configHostnameMap.forEach(function (item) {
	        if (item.pattern.test(location.hostname))
	            configHostname = item.host;
	    });
	
	    var apis = 'checkJsApi,onMenuShareTimeline,onMenuShareAppMessage,onMenuShareQQ,onMenuShareWeibo,onMenuShareQZone,startRecord,stopRecord,onVoiceRecordEnd,playVoice,pauseVoice,stopVoice,onVoicePlayEnd,uploadVoice,downloadVoice,chooseImage,previewImage,uploadImage,downloadImage,translateVoice,getNetworkType,openLocation,getLocation,hideOptionMenu,showOptionMenu,hideMenuItems,showMenuItems,hideAllNonBaseMenuItem,showAllNonBaseMenuItem,closeWindow,scanQRCode,chooseWXPay,openProductSpecificView,addCard,chooseCard,openCard';
	    var configSearch = '?apis='+ apis;
	    Object.keys(options.config).forEach(function (name) {
	        configSearch += '&';
	        configSearch += encodeURIComponent(name);
	        configSearch += '=';
	        configSearch += encodeURIComponent(options.config[name]);
	    });
	
	    loadScript(options.url,function() {
	        var doCallback = function() {
	            isLoaded = true;
	            callbackQueue.forEach(function (cb) {
	                cb && cb(window.wx);
	            });
	        };
	
	        if (configHostname.indexOf('i.meituan.com')!==-1) {
	            window.jsonpWXLoader = function(res) {
	                var config = {
	                    debug: options.config.debug,
	                    appId: 'wxc72f01f43da0083b',
	                    timestamp: res.data.timestamp,
	                    signature: res.data.signature,
	                    nonceStr: res.data.nonceStr,
	                    jsApiList: apis.split(',')
	                };
	                wx.config(config);
	                doCallback();
	            }
	            loadScript('//' + configHostname + '/weixin/config.json?url='+encodeURIComponent(location.href)+'&callback=jsonpWXLoader');
	        }else{
	            loadScript('//' + configHostname + '/weixin/config.js' + configSearch, function () {
	                doCallback();
	            });            
	        }
	
	    });
	
	};

/***/ }

});
//# sourceMappingURL=1.945e4cd58dcdd3c216b5.js.map