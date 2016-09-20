# [jquery-ui](http://www.runoob.com/jqueryui/jqueryui-tutorial.html)
### 使用方法
```
<link rel="stylesheet" href="css/themename/jquery-ui.custom.css" />
<script src="js/jquery.min.js"></script>
<script src="js/jquery-ui.custom.min.js"></script>
```

## 网上地址
```
<script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
<link rel="stylesheet" href="http://apps.bdimg.com/libs/jqueryui/1.10.4/css/jquery-ui.min.css">
<script src="http://apps.bdimg.com/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
```

* [拖动功能](http://www.runoob.com/jqueryui/example-draggable.html)
    * $( "#draggable" ).draggable();
* [缩放](http://www.runoob.com/jqueryui/example-resizable.html)
    * $( "#resizable" ).resizable();
* [ul排序](http://www.runoob.com/jqueryui/example-sortable.html)
    *  $( "#sortable" ).sortable();
* [折叠面板](http://www.runoob.com/jqueryui/example-accordion.html)
    * $( "#accordion" ).accordion();
* [自动完成/AutoComplete](http://www.runoob.com/jqueryui/example-autocomplete.html)
    * disabled：是否禁用自动完成功能，默认为false。
    * minLength 触发自动完成功能需要输入的最小字符数量
    * delay：在按键后执行搜索的延时，默认为300ms。
    * autoFocus：当智能提示框出现时，是否自动选中第一项，默认为false，即不选中
    * select(event, ui)：当智能提示框中任意一项被选中时发生，ui.item为选中的项。
    * source：即为指定智能提示下拉框中的数据来源，支持三种类型。
        * Array，主要用于本地化数据提供，支持两种格式：字符串数组 [ "Choice1", "Choice2" ]及标签和值属性的Json格式数组 [ { label: "Choice1", value: "value1" }, ... ]
        * String，用于ajax请求的远程地址链接，返回Array或Json格式字符串。
        * Function，回调函数，最具有灵活性的一种方式，可用于返回任何数据源方式来实现自动完成，其中包含两个参数request，response通过request.term 来获取用户输入的值,通过response(argument)来对获取的数据源进行显示。
    * [demo](http://www.cnblogs.com/psforever/archive/2013/03/02/2940124.html)
* [按钮](http://www.runoob.com/jqueryui/example-button.html)
* [对话框/dialog](http://www.runoob.com/jqueryui/example-dialog.html)
```
 $('#dialog').dialog({
    autoOpen: false,
    height: 320,
    width: 480,
    modal: true
 });
 $( "#dialog" ).dialog( "open" );
 ```
对话框-消息通知
```
$( "#dialog-message" ).dialog({
  modal: true,
  buttons: {
    Ok: function() {
      $( this ).dialog( "close" );
    }
  }
});
<div id="dialog-message" title="下载完成">
  <p>
    <span class="ui-icon ui-icon-circle-check" style="float:left; margin:0 7px 50px 0;"></span>
    您的文件已经成功下载到文件夹中。
  </p>
  <p>
    当前使用存储空间的 <b>36%</b>。
  </p>
</div>
```
* [进度条](http://www.runoob.com/jqueryui/example-progressbar.html)
    * $( "#progressbar" ).progressbar({value: 37});
* [工具提示框 Tooltip](http://www.runoob.com/jqueryui/example-tooltip.html), title字段
    *  $( document ).tooltip();
*     









