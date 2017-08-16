# WdatePicker

```
<script src="https://kongzhidea.github.io/static/js-library/My97DatePicker/WdatePicker.js" type="text/javascript"></script>

<script src="http://www.my97.net/My97DatePicker/WdatePicker.js" type="text/javascript"></script>

<input id="date1" class="Wdate" nfocus="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})" value="2016-09-05 12:22:36">
```
```
$('body').delegate('#date1', 'focus', function() {
    WdatePicker({
        skin: "twoer",
        dateFmt: "yyyy-MM-dd HH:mm",
        startDate: '%y-%M-%d 00:00:00'
    })
});
```
# 格式	说明
```
y	将年份表示为最多两位数字。如果年份多于两位数，则结果中仅显示两位低位数。
yy	同上，如果小于两位数，前面补零。
yyy	将年份表示为三位数字。如果少于三位数，前面补零。
yyyy	将年份表示为四位数字。如果少于四位数，前面补零。
M	将月份表示为从 1 至 12 的数字
MM	同上，如果小于两位数，前面补零。
d	将月中日期表示为从 1 至 31 的数字。
dd	同上，如果小于两位数，前面补零。
H	将小时表示为从 0 至 23 的数字。
HH	同上，如果小于两位数，前面补零。
m	将分钟表示为从 0 至 59 的数字。
mm	同上，如果小于两位数，前面补零。
s	将秒表示为从 0 至 59 的数字。
ss	同上，如果小于两位数，前面补零。
w	返回星期对应的数字 0 (星期天) - 6 (星期六) 。
D	返回星期的缩写 一 至 六 (英文状态下 Sun to Sat) 。
W	返回周对应的数字 (1 - 53) 。
WW	同上，如果小于两位数，前面补零 (01 - 53) 。
```
# 示例
```
格式字符串	值
yyyy-MM-dd HH:mm:ss	2008-03-12 19:20:00
yy年M月	08年3月
yyyyMMdd	20080312
今天是:yyyy年M年d HH时mm分	今天是:2008年3月12日 19时20分
H:m:s	19:20:0
y年	8年
```

* 设置 时间小时，分钟，秒 初始值：
```
dateFmt:'yyyy-MM-dd HH:mm:ss',startDate: '%y-%M-%d 00:00:00'
```

* 设置皮肤
```
 skin: 'twoer'
 ```

* 设置最小时间,只能选择本月的日期1号至本月最后一天
```
minDate: '%y-%M-#{%d+1}'
```


* 设置最小时间
```
minDate: '2016-09-20'
```

* 设置最大时间
```
maxDate: '2016-09-22'
```


