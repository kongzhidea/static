$(document).ready(function(){

	function cutOffStr(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var windowHref = decodeURI(window.location.search);
		var r = windowHref.substr(1).match(reg);
		if (r != null) return unescape(r[2]);
		return null;
	}

	function toDecimal(x) { 
      var f = parseFloat(x); 
      if (isNaN(f)) { 
        return; 
      } 
      f = Math.round(x*100)/100; 
      return f; 
    } 

    // 总价
    function getTotalPrice(){
    	return $("#totalPrice").val().trim();
    }

    function clearCalcResult(){
    	$("#pinggu_show").html("");
    	$("#fang_qingkuang_show").html("");
    	$("#shoufuBiliShow").html("");
    	$("#putongZhuzhaiShow").html("");
    	$("#showfu_show").html("");
		$("#daikuan_show").html("");
    }

    // 总价
    function checkAndGetTotalPrice(){
    	var value = getTotalPrice();
    	var price = parseFloat(value);
		if(!isNaN(price)){
			if(price <=0){
				clearCalcResult();
				return "总房价不能小于0";
			}
			return price;
		}else{
			clearCalcResult();
			return "请输入总房价";
		}
    }

    // 面积
    function getMianji(){
    	return $("#mianji").val().trim();
    }

    // 面积
    function checkAndGetMianji(){
    	var value = getMianji();
    	var ret = parseFloat(value);
		if(!isNaN(ret)){
			if(ret <=0){
				return "房屋面积不能小于0";
			}
			return ret;
		}else{
			return "请输入房屋面积";
		}
    }

    // 评估值
    function getPingGuVal(){
    	return $("#pinggu_per").val().trim();
    }

    // 网签价
    function checkAndGetWanqianjia(){
    	// 总价
		var price = checkAndGetTotalPrice();
		if(isNaN(price)){
			return price;
		}

		var wangqianjia =  price * getPingGuVal();
		return wangqianjia;
    }

    // 计算评估价
    function calcPinggu(){
    	var price = checkAndGetTotalPrice();
    	var $_show = $("#pinggu_show");
    	if(!isNaN(price)){
    		var pinggu = price * getPingGuVal();
			$_show.html(format("{}万",toDecimal(pinggu)));
    	}else{
    		$_show.html(price);
    	}
    }

    // 房屋年限
    function getFangNianxian(){
    	return $("#fang_nianxian").val().trim();
    }

    // 首套情况
    function isShoutao(){
    	var ret =  $(".shoutao.chooseBtnActived").html();
    	if(ret == "首套"){
    		return true;
    	}
    	return false;
    }

    // 是否包税卖
    function isBaoshui(){
    	var ret = $(".containShui.chooseBtnActived").html();
    	if(ret == "不包税"){
    		return false;
    	}
    	return true;
    }

    // 原值
    function getYuanzhi(){
    	return $("#yuanzhi").val().trim();
    }

    // 原值
    function checkAndGetYuanzhi(){
    	var value = getYuanzhi();
    	var ret = parseFloat(value);
		if(!isNaN(ret)){
			if(ret <=0){
				return "原值不能小于0";
			}
			return ret;
		}else{
			return "请输入原值";
		}
    }

    // 中介费
    function getZhongjiefei(){
    	return $("#zhongjiefei").val().trim();
    }
    // 中介费
    function calcZhongjiefei(){
    	// 总价
		var price = checkAndGetTotalPrice();
		if(isNaN(price)){
			$("#pinggu_show").html(price);
			return price
		}
		return price * getZhongjiefei();
    }
    // 是否普通住宅
    function isPutongZhuzhai(mianji,wangqianjia){
    	if (mianji <=140 && wangqianjia<=393){
    		return true;
    	}
    	return false;
    }

	// 计算增值税
    function calcZengzhiShui(){
    	var mianji = checkAndGetMianji();
    	var nianxian = getFangNianxian();
    	$_show = $("#fang_qingkuang_show");

		if(isNaN(mianji)){
			$_show.html("请输入房屋面积");
			return "请输入房屋面积";
		}

		// 总价
		var price = checkAndGetTotalPrice();
		if(isNaN(price)){
			$("#pinggu_show").html(price);
			return price;
		}

		var wangqianjia =  checkAndGetWanqianjia();

		// 满2年
		if(nianxian == "1" || nianxian == "2" || nianxian == "3"){
			if(isPutongZhuzhai(mianji,wangqianjia)){ //普通住宅
				return 0;
			}else{
				// 原值
				var yuanzhi = checkAndGetYuanzhi();
				if(isNaN(yuanzhi)){
					$("#pinggu_show").html(yuanzhi);
					return yuanzhi;
				}

				if(wangqianjia <= yuanzhi){
					return 0;
				}
				return (wangqianjia-yuanzhi) / 1.05 * 0.056;
			}
		}else{ // 不满2年
			return wangqianjia / 1.05 * 0.056;
		}

    }

    // 计算个税
    function calcGeshui(){
    	var nianxian = getFangNianxian();
    	$_show = $("#fang_qingkuang_show");

    	if(nianxian == "1"){ // 满五唯一
    		return 0;
    	}

    	// 总价
		var price = checkAndGetTotalPrice();
		if(isNaN(price)){
			$("#pinggu_show").html(price);
			return price;
		}

		var wangqianjia =  checkAndGetWanqianjia();

		// 原值
		var yuanzhi = checkAndGetYuanzhi();
		if(isNaN(yuanzhi)){
			$("#pinggu_show").html(yuanzhi);
			return yuanzhi;
		}
		
		if(wangqianjia <= yuanzhi){
			return 0;
		}

		var zengzhishui = calcZengzhiShui();
		if(isNaN(zengzhishui)){
			$("#pinggu_show").html(zengzhishui);
			return zengzhishui;
		}

		return (wangqianjia - yuanzhi - zengzhishui- wangqianjia * 0.1) * 0.2;
    }

    
    function calcQishui(wangqianjia,mianji,zengzhishui,shoutao){
    	var per = 0.01;
    	if(!shoutao){
    		per = 0.03;
    	}else{
    		if(mianji > 90){
    			per = 0.015;
    		}
    	}
    	return (wangqianjia -zengzhishui) * per;
    }

    // 计算契税，营业税，个税
    function calcShui(){
		var price = checkAndGetTotalPrice();
		if(isNaN(price)){
			$("#pinggu_show").html(price);
			return ;
		}
		var mianji = checkAndGetMianji();

		$_show = $("#fang_qingkuang_show");
		if(isNaN(mianji)){
			$_show.html(mianji);
			return ;
		}

		var zengzhishui = calcZengzhiShui();
		if(isNaN(zengzhishui)){
			$_show.html(zengzhishui);
			return ;
		}
		

		// 网签价
		var wangqianjia =  checkAndGetWanqianjia();

		// 契税
		var qishui = calcQishui(wangqianjia,mianji,zengzhishui,isShoutao());

		// 个税
		var geshui = calcGeshui();

		var ret = "";
		if(zengzhishui > 0){
			ret = format("增值税{}万",toDecimal(zengzhishui));
		}
		if(ret.length > 0){
			ret = format("{}，契税：{}万",ret,toDecimal(qishui));
		}else{
			ret = format("契税：{}万",toDecimal(qishui));
		}
		if(geshui > 0){
			ret = format("{}，个税{}万",ret,toDecimal(geshui));
		}

		$_show.html(ret);
	}

	//是否展示 卖方包税情况   TODO
	function checkBaoshuiShow(){
		var val = $("#fang_nianxian").val();
		if(val != "1"){ // 非满五唯一
			$("#containShuiDiv").show();
		}else{ // 满五唯一
			$("#containShuiDiv").hide();
		}
	}

	function getShoufuBili(){
		var shoutao = isShoutao();

		var mianji = checkAndGetMianji();

		if(isNaN(mianji)){
			$("#fang_qingkuang_show").html(mianji);
			return mianji;
		}

		// 总价
		var price = checkAndGetTotalPrice();
		if(isNaN(price)){
			$("#pinggu_show").html(price);
			return price
		}

		var wangqianjia =  checkAndGetWanqianjia();

		if(shoutao){ // 首套
			if(isPutongZhuzhai(mianji,wangqianjia)){ // 普通住宅
				return 0.35;
			}
			// 非普通住宅
			return 0.4;
		}

		

		if(isPutongZhuzhai(mianji,wangqianjia)){ // 普通住宅
			return 0.5;
		}
		// 非普通住宅
		return 0.7;
	}

	// 展示首付比例，以及是否是普通住宅
	function shoufuBiliAndPutongShow(){
		var shoufuBili = getShoufuBili();
		$("#shoufuBiliShow").html(shoufuBili);

		// 总价
		var price = checkAndGetTotalPrice();
		if(isNaN(price)){
			$("#pinggu_show").html(price);
			return "";
		}

		var wangqianjia = checkAndGetWanqianjia();

		if(isPutongZhuzhai(mianji,wangqianjia)){ // 普通住宅
			$("#putongZhuzhaiShow").html("是");
		}else{
			$("#putongZhuzhaiShow").html("否");
		}
	}

	// 计算中介费
	function zhongjiefeiShow(){
		var zhongjiefei = calcZhongjiefei();
		if(!isNaN(zhongjiefei)){
			$("#zhongjiefei_show").html(format("{}万",toDecimal(zhongjiefei)));
		}else{
			console.warn("中介费：" + zhongjiefei);
		}
	}

	// 计算总首付
	function calcShowFuShow(){
		var price = checkAndGetTotalPrice();
		if(isNaN(price)){
			$("#pinggu_show").html(price);
			return ;
		}
		var mianji = checkAndGetMianji();

		$_show = $("#fang_qingkuang_show");
		if(isNaN(mianji)){
			$_show.html(mianji);
			return ;
		}

		var zengzhishui = calcZengzhiShui();
		if(isNaN(zengzhishui)){
			$_show.html(zengzhishui);
			return ;
		}
		

		// 网签价
		var wangqianjia =  checkAndGetWanqianjia();

		// 契税
		var qishui = calcQishui(wangqianjia,mianji,zengzhishui,isShoutao());
		if(isNaN(qishui)){
			return;
		}

		// 个税
		var geshui = calcGeshui();

		if(isNaN(geshui)){
			return;
		}

		// 中介费
		var zhongjiefei = calcZhongjiefei();

		if(isNaN(zhongjiefei)){
			return;
		}

		// 首付比例
		var shoufuBili = getShoufuBili();
		if(isNaN(shoufuBili)){
			return;
		}

		// 贷款首付
		var daikuan_shoufu = wangqianjia * shoufuBili;

		// 贷款
		var daikuan = price - daikuan_shoufu;

		// 单纯首付
		var shoufu = price - daikuan;

		// 总首付，包含中介费，税费
		var shoufu_total = shoufu + zhongjiefei + qishui;

		if(!isBaoshui()){
			shoufu_total = shoufu_total + zengzhishui + geshui;
		}

		$("#showfu_show").html(format("首付：{}万，首付含中介费、税：{}万",toDecimal(shoufu),toDecimal(shoufu_total)));

		$("#daikuan_show").html(format("贷款：{}万",toDecimal(daikuan)));

	}

	function _log(){
		//console.log($(".containShui.chooseBtnActived").html());
	}

	function calcTotal(){
		calcPinggu();// 计算评估价
		calcShui();// 计算契税
		checkBaoshuiShow();//是否展示 卖方包税情况
		shoufuBiliAndPutongShow(); //首付
		zhongjiefeiShow();// 中介费
		calcShowFuShow(); // 计算首付
		_log();
	}

	

	// 总价
	$("#totalPrice").bind('input propertychange', calcTotal); 

	// 面积
	$("#mianji").bind('input propertychange', calcTotal); 

	// 评估值
	$('#pinggu_per').change(calcTotal);

	// 原值
	$("#yuanzhi").bind('input propertychange', calcTotal); 

	// 房屋购置年限
	$("#fang_nianxian").change(calcTotal);

	// 不包税
	$("#bubaoshui").bind('click', function() {
	    $("#bubaoshui").addClass("chooseBtnActived");
	    $("#baoshui").removeClass("chooseBtnActived");
	    calcTotal();
	});

	// 包税
	$("#baoshui").bind('click', function() {
	    $("#baoshui").addClass("chooseBtnActived");
	    $("#bubaoshui").removeClass("chooseBtnActived");
	    calcTotal();
	});

	// 首套
	$("#shoutao").bind('click', function() {
	    $("#shoutao").addClass("chooseBtnActived");
	    $("#feishoutao").removeClass("chooseBtnActived");
	    calcTotal();
	});

	// 非首套
	$("#feishoutao").bind('click', function() {
	    $("#feishoutao").addClass("chooseBtnActived");
	    $("#shoutao").removeClass("chooseBtnActived");
	    calcTotal();
	});

	// 中介费
	$("#zhongjiefei").change(calcTotal);



	function json2url(json){
	    var arr = [];
	    for(var name in json){
	      arr.push(name+'='+encodeURIComponent(json[name]));
	    }
	    return arr.join('&');
	}

	function getJsonLength(jsonData){
		var jsonLength = 0;
		for(var item in jsonData){
			jsonLength++;
		}
		return jsonLength;
	}


	function init(){
		var needCalc = false;
		var totalPrice = cutOffStr("totalPrice");
		if(totalPrice != null && totalPrice != ""){
			$("#totalPrice").val(totalPrice);
			needCalc = true;
		}

		var pingguper = cutOffStr("pingguper");
		if(pingguper != null && pingguper != ""){
			$("#pinggu_per").val(pingguper);
		}

		var mianji = cutOffStr("mianji");
		if(mianji != null && mianji != ""){
			$("#mianji").val(mianji);
		}

		var yuanzhi = cutOffStr("yuanzhi");
		if(yuanzhi != null && yuanzhi != ""){
			$("#yuanzhi").val(yuanzhi);
		}

		var nianxian = cutOffStr("nianxian");
		if(nianxian != null && nianxian != ""){
			$("#fang_nianxian").val(nianxian);
		}
		var shoutao = cutOffStr("shoutao");
		if(shoutao != null && shoutao != ""){
			if(shoutao == 1){
				$("#shoutao").addClass("chooseBtnActived");
	    		$("#feishoutao").removeClass("chooseBtnActived");
			}else{
				$("#feishoutao").addClass("chooseBtnActived");
	   			$("#shoutao").removeClass("chooseBtnActived");
			}
		}

		var zhongjiefei = cutOffStr("zhongjiefei");
		if(zhongjiefei != null && zhongjiefei != ""){
			$("#zhongjiefei").val(zhongjiefei);
		}
		if(needCalc){
			calcTotal();
		}
	}

	// 执行代码
	init();

	$(".copyLink").bind("click",function(){
		var url = window.location.href.split("?")[0];
		var params = {};
		var totalPrice = checkAndGetTotalPrice();
		if(!isNaN(totalPrice)){
			params["totalPrice"] = totalPrice;
		}
		params["pingguper"] = $("#pinggu_per").val();
		var mianji = checkAndGetMianji();
		if(!isNaN(mianji)){
			params["mianji"] = checkAndGetMianji();
		}
		var yuanzhi = checkAndGetYuanzhi();
		if(!isNaN(yuanzhi)){
			params["yuanzhi"] = yuanzhi;
		}
		params["nianxian"] = $("#fang_nianxian").val();

		if(isShoutao()){
			params["shoutao"] = 1;
		}else{
			params["shoutao"] = 0;
		}
		params["zhongjiefei"] = $("#zhongjiefei").val();

		if(getJsonLength(params) > 0){
			url = url + "?" + json2url(params);
		}
		var e=document.getElementById("link");//对象是content
		e.value = url;
		e.select(); //选择对象
        document.execCommand("Copy"); //执行浏览器复制命令
		$.feedBackPop("复制成功");
	});
});



