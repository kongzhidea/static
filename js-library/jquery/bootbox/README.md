# [Bootbox  提示框](http://bootboxjs.com/)
* 依赖 jquery,bootstrap

```
<script type="text/javascript" src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
<script src="http://libs.baidu.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>
<link href="http://libs.baidu.com/bootstrap/3.0.3/css/bootstrap.min.css" rel="stylesheet">
<script type="text/javascript" src="/js-library/jquery/bootbox/bootbox.js"></script>
```

```
bootbox.alert(message, callback)
bootbox.prompt(message, callback)
bootbox.confirm(message, callback)
```
## alert.demo  提示框
* message为提示框内容
```
bootbox.alert("Your message here…")
```
```
callback=function(){}
bootbox.alert("Your message here…", callback)
```
```
bootbox.alert({
      size: 'small',
      message: "Your message here…",
      callback: function(){ /* your callback code */ }
  })
```

## confirm.demo  确认框
* message为确认框内容
* result 值为true/false
```
bootbox.confirm("Your message here…", function(result){ console.log(result); })
```
```
bootbox.confirm({
    size: 'small',
    message: "Your message here…",
    callback: function(result){ /* your callback code */ }
})
```
# promot.demo  输入框
* title为输入框标题
* result为输入内容
* 选择取消时候，result为null
* value为输入框的默认值，可选参数
```
bootbox.prompt("Your message here…", function(result){ console.log(result); })
```
```
bootbox.prompt({
    size: 'small',
    title: "Your title here…",
    value:"default value",
    callback: function(result){ /* your callback code */ }
})
```

# dialog 自定义弹窗
* title为弹窗标题
* message为弹窗内容
```
bootbox.dialog({
    message: "I am a custom dialog",
    title: "Custom title",
    buttons: {
        success: {
            label: "Success!",
            className: "btn-success",
            callback: function() {
                console.log("success");
            }
        },
        danger: {
            label: "Danger!",
            className: "btn-danger",
            callback: function() {
                console.log("danger");
            }
        },
        main: {
            label: "Click ME!",
            className: "btn-primary",
            callback: function() {
               console.log("main");
            }
        }
    }
});
```
```
bootbox.dialog({  
message: "I am a custom confirm",  
title: "Confirm title",  
buttons: {  
    Cancel: {  
	label: "Cancel",  
	className: "btn-default",  
	callback: function () {  
	    
	}  
    }  
    , OK: {  
	label: "OK",  
	className: "btn-primary",  
	callback: function () {  
	     
	}  
    }  
}  
});  
```