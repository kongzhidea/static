# url-cut.js
* cutOffStr(str)
    * 截取当前url里面的str参数，不存在则返回null, 返回时候对值进行unescape

# [url.js](https://github.com/websanova/js-url)
* url()
    * 当前url
* 测试连接：http://www.kk.com/test/?a=1&b=%E5%AD%94%E6%99%BA%E6%85%A7#list
* url("hostname")
    * 当前url的hostname，如 www.kk.com
* url("hostname",url)
    * url的hostname
* url("path")，url("path",url)
    * 返回路径，如 /test
* url("query"), url("query",url)
    * url的参数，如"a=1&b=%e5%ad%94%e6%99%ba%e6%85%a7"， 不包含锚点
* url('?');
    * 所有参数，返回对象，如 {a: "1", b: "孔智慧"}
* url("?param"),url("?param",url)
    * 具体参数，如 url("?a")  => 1
* url('#');
    * 所有锚点，返回对象，如 {list: ""}
* url("#param"),url("#param",url)
    * 具体参数，如 url("#list")  => ""


# 原生方法
```
thisURL = document.URL;     // http://localhost:81/Test/1.htm?Did=123
thisHREF = document.location.href; // http://localhost:81/Test/1.htm?Did=123
thisSLoc = self.location.href;   // http://localhost:81/Test/1.htm?Did=123
thisDLoc = document.location;   // http://localhost:81/Test/1.htm?Did=123

thisTLoc = top.location.href;   // http://localhost:81/Test/1.htm?Did=123
thisPLoc = parent.document.location;// http://localhost:81/Test/1.htm?Did=123
thisTHost = top.location.hostname; // localhost
thisHost = location.hostname;   // localhost

thisU1 = window.location.protocol; // http:
thisU2 = window.location.host;   // localhost:81
thisU3 = window.location.pathname; // /Test/1.htm
```

```
//ajax函数 封装
  function json2url(json){
    var arr = [];
    for(var name in json){
      arr.push(name+'='+encodeURIComponent(json[name]));
    }
    return arr.join('&');
  }
```