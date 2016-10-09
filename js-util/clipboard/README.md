# my-demo.html
* 原声js，点击复制文本

# [clipboard.js](https://github.com/zenorocha/clipboard.js)
* function-text.html
    * 点击button 复制文本，文本在js中定义，text字段定义
* target-input.html
    * 点击button，复制 输入框内容,data-clipboard-target="#id" 指定input
    * data-clipboard-action="cut"  剪切
    * data-clipboard-action="copy"   复制
* function-target.html
    * 文本由target字段指定，可以根据id返回dom元祖的内容
* button中 data-clipboard-text
    * 设置点击自身复制内容

```
var btn = document.querySelector('.copyLink');
var clipboard = new Clipboard(btn);
clipboard.resolveOptions( {
	text: function() {
	    return 'dd';
	}
});
clipboard.on('success', function(e) {
	console.log(e);
});

clipboard.on('error', function(e) {
	console.log(e);
});
```
