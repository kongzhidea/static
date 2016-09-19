# 图片缩放

引入文件
```
<link rel="stylesheet" href="css/zoomify.min.css">
<script src="js/jquery.min.js"></script>
<script src="js/zoomify.min.js"></script>
```
HTML
```
<img class="zoomify" src="images/img1.jpg" alt="">
```
JavaScript
```
$('.zoomify').zoomify();
```
配置
```
名称	类型	默认值	说明
duration	整数	200	动画持续时间
scale	整数/浮点数	0.9	图片最大缩放比例
```