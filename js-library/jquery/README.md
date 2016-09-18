# jquery
* 教程:http://www.runoob.com/jquery/jquery-tutorial.html
* 教程:http://www.w3school.com.cn/js/
* link：
    * 百度：http://libs.baidu.com/jquery/2.0.0/jquery.min.js
    * 新浪：http://lib.sinaapp.com/js/jquery/2.0.2/jquery-2.0.2.min.js

```
<script type="text/javascript" src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
```

# 基础教程，常用语法
* 选择器
    * id选择器
        * 通过HTML元素的id属性选取指定的元素。如$("#id")
    * class选择器
        * 寻找指定的class对应的元素，如：$(".test")
* 内容获取、设置
    * 获得内容
        * text() - 设置或返回所选元素的文本内容
        * html() - 设置或返回所选元素的内容（包括 HTML 标记）
        * val() - 设置或返回表单字段的值
        * 如果要设置内容，则加上参数即可，如 text(val)
    * 获取属性  -  attr()，如 attr("data-id")
    * 设置属性  -  attr()，如 attr("data-id",val)
* [事件](http://www.runoob.com/jquery/jquery-ref-events.html)
    * 鼠标事件	  |  键盘事件	  | 表单事件	| 文档/窗口事件
    * click	      |  keypress | submit	| load
    * dblclick	  |  keydown  |	change	| resize
    * mouseenter  |	keyup	  | focus	| scroll
    * mouseleave  |	blur	  | unload
    * 样例：$("p").click(function(){$(this).hide();});
* [效果](http://www.runoob.com/jquery/jquery-ref-effects.html)
    * hide() 和 show() 方法来隐藏和显示 HTML 元素， 参数可以控制隐藏/显示的时间，毫秒
    * toggle() 方法来切换 hide() 和 show() 方法。
* 添加元素
    * append() - 在被选元素的结尾插入内容
    * prepend() - 在被选元素的开头插入内容
    * after() - 在被选元素之后插入内容
    * before() - 在被选元素之前插入内容
* 删除元素
    * remove() - 删除被选元素（及其子元素）
    * empty() - 从被选元素中删除子元素
* [操作css](http://www.runoob.com/jquery/jquery-ref-html.html)
    * addClass() - 向被选元素添加一个或多个类
    * removeClass() - 从被选元素删除一个或多个类
    * toggleClass() - 对被选元素进行添加/删除类的切换操作
    * css() - 设置或返回样式属性
        * 如需返回指定的 CSS 属性的值，请使用如下语法：css("propertyname");
        * 如需设置指定的 CSS 属性，请使用如下语法： css("propertyname","value");
* 尺寸
    * width() 方法设置或返回元素的宽度（不包括内边距、边框或外边距）。
    * height() 方法设置或返回元素的高度（不包括内边距、边框或外边距）。
* [ajax](http://www.runoob.com/jquery/jquery-ref-ajax.html)
    * 默认为异步处理，故一些操作最好放在 回调函数中，回调函数中无法调用外部变量，只能调用服务端返回的值。
    * $.ajax()	[执行异步 AJAX 请求](http://www.runoob.com/jquery/ajax-ajax.html)
    * $.get()	[使用 AJAX 的 HTTP GET 请求从服务器加载数据](http://www.runoob.com/jquery/ajax-get.html)
    * $.getJSON()	[使用 HTTP GET 请求从服务器加载 JSON 编码的数据](http://www.runoob.com/jquery/ajax-getjson.html)
    * $.post()	[使用 AJAX 的 HTTP POST 请求从服务器加载数据](http://www.runoob.com/jquery/ajax-post.html)
* [jsonp](http://www.runoob.com/json/json-jsonp.html
    *

ajax样例:
```
 $.ajax({
    type: "POST",
    success: function(ret) {
        if (ret.code == 0) {
            console.log(ret)
        } else {
            alert(ret.msg)
        }
    },
    error: function() {
        alert('请求失败');
    },
    data: formData,
    url: url
})
```
jquery-jsonp样例:
```
$.ajax({
     type: "get",
     url: "http://www.kk.cn/basic/",
     dataType: "jsonp",
     jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
     success: function(json){
         console.log(json)
     },
     error: function(){
         alert('fail');
     }
 });
```