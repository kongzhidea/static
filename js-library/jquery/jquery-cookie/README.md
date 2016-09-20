# jquery操作cookie

```
<script type="text/javascript" src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
<script type="text/javascript" src="/js-library/jquery/jquery-cookie/jquery.cookie.min.js"></script>
```

### 1).新添加一个会话 cookie：
* $.cookie('the_cookie', 'the_value');
* 注：当没有指明 cookie有效时间时，所创建的cookie有效期默认到用户关闭浏览器为止，所以被称为
“会话cookie（session cookie）”。

### 2).创建一个cookie并设置有效时间为 7天:
* $.cookie('the_cookie', 'the_value', { expires: 7 });
* 注：当指明了cookie有效时间时，所创建的cookie被称为“持久 cookie （persistent  cookie）”。

### 3).创建一个cookie并设置 cookie的有效路径：
* $.cookie('the_cookie', 'the_value', { expires: 7, path: '/' });
* 注：在默认情况下，只有设置 cookie的网页才能读取该 cookie。如果想让一个页面读取另一个页面设置的cookie，必须设置cookie的路径。cookie的路径用于设置能够读取 cookie的顶级目录。将这个路径设置为网站的根目录，可以让所有网页都能互相读取 cookie。

### 4).读取cookie：
* $.cookie('the_cookie'); // cookie存在 => 'the_value'
* $.cookie('not_existing'); // cookie不存在 => undefined
* 读取所有cookie，object
    * $.cookie(); // => { "name": "value" }
### 5).删除cookie，通过传递null作为cookie的值即可：
* // Returns true when cookie was successfully deleted, otherwise false
    * $.removeCookie('name'); // => true
    * $.removeCookie('nothing'); // => false
* // Need to use the same attributes (path, domain) as what the cookie was written with
    * $.cookie('name', 'value', { path: '/' });
    * $.removeCookie('name'); // => false  // This won't work!
    * $.removeCookie('name', { path: '/' }); // => true  // // This will work!

# 参数设置：
* expires: (Number | Date)      有效期，可以设置一个整数作为有效期（单位：天），也可以设置一个日期对象作为Cookie的过期日期。如果指定日期为负数，那么此cookie将被删除；如果不设置或者设置为null，那么此cookie将被当作Session Cookie处理，并且在浏览器关闭后删除
* path:  (String)          Cookie的路径属性，默认是创建该cookie的页面路径
* domain: (String)     Cookie的域名属性，默认是创建该cookie的页面域名
* secure: (Boolean)  如果设为true，那么此cookie的传输会要求一个安全协议，例如HTTPS
