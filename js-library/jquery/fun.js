function $(d){
	return document.querySelector(d);
}

//事件监听
  function addEvent(obj, sEv, fn) {
    if (obj.addEventListener) {
      obj.addEventListener(sEv, fn, false);
    } else {
      obj.attachEvent('on' + sEv, fn);
    }
  }
  function removeEvent(obj, sEv, fn) {
    if (obj.removeEventListener) {
      obj.removeEventListener(sEv, fn, false);
    } else {
      obj.detachEvent('on' + sEv, fn);
    }
  }
  //增加className
  function addClass(obj,sClass){
    if(obj.className){
      var reg = new RegExp('\\b'+sClass+'\\b','g');
      if(obj.className.search(reg) == -1){
        obj.className += ' '+sClass;
      }
    }else{
      obj.className = sClass;
    }
  }
  //删除className
  function removeClass(obj,sClass){
    if(obj.className){
      var reg = new RegExp('\\b'+sClass+'\\b','g');
      if(obj.className.search(reg) != -1){
        obj.className = obj.className.replace(reg,'').replace(/^\s+|\s+$/,' ').replace(/\s+/g,' ');
        if(!obj.className){
          obj.removeAttribute("class");
        }
      }
    }
  }
  //查看是否有这个class名，有就返回true否则返回false
  function hasClass(obj, cls){
    var obj_class = obj.className,//获取 class 内容.
            obj_class_lst = obj_class.split(/\s+/);//通过split空字符将cls转换成数组.
    var x = 0;
    for(x in obj_class_lst) {
      if(obj_class_lst[x] == cls) {//循环数组, 判断是否包含cls
        return true;
      }
    }
    return false;
  }
  //ajax函数 封装
  function json2url(json){
    var arr = [];
    for(var name in json){
      arr.push(name+'='+encodeURIComponent(json[name]));
    }
    return arr.join('&');
  }
  function ajax(json){
    json = json||{};
    if(!json.url)return;
    json.data = json.data||{};
    json.type = json.type||'get';

    if(window.XMLHttpRequest){
      var oAjax = new XMLHttpRequest();
    }else{
      var oAjax = new ActiveXObject('Microsoft.XMLHTTP');
    }

    switch(json.type.toLowerCase()){
      case 'get':
        oAjax.open('GET',json.url+'?'+json2url(json.data),true);
        oAjax.send();
        break;
      case 'post':
        oAjax.open('POST',json.url,true);
        oAjax.setRequestHeader('Content-type','application/x-www-form-urlencoded');
        oAjax.send(json2url(json.data));
        break;
    }
    oAjax.onreadystatechange=function(){
      if(oAjax.readyState==4){
        if(oAjax.status>=200&&oAjax.status<300||oAjax.status==304){
          json.success&&json.success(oAjax.responseText);
        }else{
          json.error&&json.error(oAjax.status);
        }
      }
    };
  }