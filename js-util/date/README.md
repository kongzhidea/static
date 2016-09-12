# [Date](http://www.runoob.com/js/js-obj-date.html)
* date = new Date() // 当前时间
* date = new Date(year,month,day)  // 指定年月日
* getTime() 返回从 1970 年 1 月 1 日至今的毫秒数   unix时间戳，精确到 毫秒
* getDay获得是星期几， 从0到6
* getDate() 查看Date对象并返回日期(几号)， 从1开始
* getHours() 返回小时数，24小时制
* getMinutes() 返回分钟数
* getMonth() 返回月份值， 0-11.
* getSeconds() 返回秒数
* getYear() 返回年份，相对1900年得到的年份， 推荐使用 getFullYear()
* getFullYear() 返回实际年份
* setDate() 改变Date对象的日期
* setHours() 改变小时数
* setMinutes() 改变分钟数
* setMonth() 改变月份
* setSeconds() 改变秒数
* setTime() 改变完整的时间
* setFullYear() 设置具体的日期。

# date-util.js
* 自己实现的一些 日期相关函数
* date = new Date();
* date.pattern("yyyy-MM-dd HH:mm:ss")  // 格式化
* date.defaultTime(); // yyyy-MM-dd HH:mm:ss
* date.defaultTimestamp(); // yyyy-MM-dd HH:mm:ss.S
* date.defaultDate()  // yyyy-MM-dd
* date.defaultDateDot()  // yyyy.MM.dd



# [datejs](https://github.com/datejs/Datejs)
* 详见 datajs下的md
* 格式化
    * data.toString("yyyy-MM-dd HH:mm:ss")， data.toString("yyyy-MM-dd")
* 设置时间
    * Date.today() 获取当天凌晨时间，返回Date类型
    * Date.today().at("13:34") 获取当前某个时间，其他写法：
        * Date.today().at("6:15pm");
        * var time = {hour:18, minute:15}; Date.today().at(time);
        * month通过接口返回/设置 从0开始
        * var birthDayParty = {month: 1, day: 20, hour: 20, minute: 30};
          Date.today().set(birthDayParty);// Set date and time with a config object.
* 日期加减
      * date.addDays(n) 日期增加， n可以为负数
      * date.addHours(n) 小时增加，
      * date.addMinutes(n) 分钟相加，类似的还有addMonths等。
* 日期自动解析
    * Date.parse('t')                 // Returns today's date.
    * Date.parse('today')             // Returns today's date.
    * Date.parse('tomorrow')          // Returns tomorrow's date.
    * Date.parse('yesterday')         // Returns yesterday's date.
    * Date.parse('July 8th, 2004')    // Thu Jul 08 2004
    * Date.parse('15-Jan-2004')       // Thu Jan 15 2004
    * Date.parse('7/1/2004')          // Thu Jul 01 2004
    * Date.parse('7.1.2004')          // Thu Jul 01 2004
    * Date.parse('07.15.04')          // Thu Jul 15 2004
    * Date.parse('July 23rd 2004')    // Fri Jul 23 2004
    * Date.parse('Sat July 3, 2004')  // Sat Jul 03 2004
    * Date.parse('10PM')              // Wed Oct 31 2007 22:00:00
    * Date.parse('1997-07-16 19:20:15')
    * Date.parse('1985-04-12')
* 指定format格式解析
    * Date.parseExact("10/4/2004", "d/M/yyyy")
    * Date.parseExact("1988-12-04 19:45:02","yyyy-MM-dd HH:mm:ss")
* 日期比较
    * date1.compareTo(date2)，或者 Date.compare(date1,date2)  // 1 = greater, -1 = less than, 0 = equal
    * date.between(startDate, endDate)                   // true|false
    * date1.equals(date2)，或者 Date.equals(date1,date2)    // true|false


# [moment](http://momentjs.cn/docs/)
* moment 格式化 占位符和通用的占位符不一样
    * YYYY/YY	4 or 2 digit year
    * MM  month
    * DD day of month
    * HH,mm,ss 和通用的保持一致
* 展示为string
    * moment().format()
    * moment().format("YYYY-MM-DD HH:mm:ss")
    * m = moment()
    * m.format("YYYY-MM-DD HH:mm:ss")
* 构建moment对象-Moment
    * 自动解析
        * moment("1995-12-25")
        * moment("1995-12-25 12:58:4")
        * moment("2013-02-08 09:30:26.123")
    * 指定格式化类型：moment(String, String)
        * moment("12-25-1995", "MM-DD-YYYY")
        * moment("12/25/1995", "MM-DD-YYYY")
        * moment("2010-10-20 4:30:11", "YYYY-MM-DD HH:mm:ss")
    * 指定多个格式类型 ：moment(String, String[]);
        * moment("05/06/1995", ["MM-DD-YYYY", "MM/DD/YYYY"])
    * 对象构造：moment({unit: value, ...});
        * month 从0开始
        * moment({ year :2010, month :3, day :5, hour :15, minute :10, second :3, millisecond :123}).format("YYYY-MM-DD HH:mm:ss")
    * Unix 偏移量 (毫秒)
        * moment(Number);
    * Unix 时间戳 (秒)
        * moment.unix(Number)
    * Date 对象
        * moment(Date);
* 日期操作
    * m = moment()
    * m.year()获取年份， m.year(y) 设置年份
    * 同样操作：m.month()， m.date(),m.hour(),m.minute(),m.second()等
    * m.year()与m.years()一致，同理有 m.months(),m.dates()等
    * m.valueOf()， 返回时间戳，精确到毫秒
    * m.unix()   返回时间戳，景区到秒
    * 另一种取值方式:
        * moment().get('year');
        * moment().get('month');  // 0 to 11
        * moment().get('date');
        * moment().get('hour');
        * moment().get('minute');
        * moment().get('second');
        * moment().get('millisecond');
    * 另一种赋值方式：
        * moment().set(String, Int);
        * moment().set(Object(String, Int));
        * moment().set('year', 2013);
        * moment().set({'year': 2013, 'month': 3});
* 日期相加
    * moment().add(Number, String);
    * moment().add(7, 'days').subtract(1, 'months').year(2009).hours(0).minutes(0).seconds(0);
    *  关键词: key， short-key
        *  years	y
        *  quarters	Q
        *  months	M
        *  weeks	w
        *  days	d
        *  hours	h
        *  minutes	m
        *  seconds	s
        *  milliseconds	ms
    * moment().add({days:7,months:1}); // with object literal
* 日期相减
    * moment().subtract(Number, String);
    * moment().subtract(Object);
* 转Date 对象
    * moment().toDate();
* 转对象
    * moment().toObject();

