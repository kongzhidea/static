两种方式使用“生成二维码”
一、打开某个网页后，在浏览器的地址栏里直接输入以下代码：

javascript:void (function (d) {var t=d.createElement('script');t.type='text/javascript';t.src='https://kongzhidea.github.io/static/qrcode/qrcode.js';d.getElementsByTagName('head')[0].appendChild(t);})(document);

二、将index.html里面的以下链接添加到（拖放到）您的书签栏里，这样能方便您今后的使用：打开指定网页后，再点击书签栏里的 “二维码” 链接。
生成二维码

如果您的浏览器没有显示书签栏，请先呼出它：
Chrome/Safari(win) 的热键是 ctrl-shift-B
Chrome/Safari(mac) 的热键是 command-shift-B

### [index.html](https://kongzhidea.github.io/static/qrcode/index.html)

```
原理：直接采用淘宝接口：
    http://ma.taobao.com/api/qrcode.html?sec=qr&activity=encode&text={}&width=180&height=180&ecLevel=L&characterSet=gbk&t={}
参数：
    text：二维码内容，可以使链接，需要urlencode
    t可以采用时间戳，防止url缓存
```

