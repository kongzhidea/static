
### month 均从0开始

#### date-util.js
* 自己实现的一些 日期相关函数
* date = new Date();
* console.log(date.defaultTime());


#### [datejs](https://github.com/datejs/Datejs)
* 详见 datajs下的md
* 格式化
    * data.toString("yyyy-MM-dd HH:mm:ss")， data.toString("yyyy-MM-dd")
* 设置时间
    * Date.today() 获取当天凌晨时间，返回Date类型
    * Date.today().at("13:34") 获取当前某个时间，其他写法：
        * Date.today().at("6:15pm");
        * var time = {hour:18, minute:15}; Date.today().at(time);
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






