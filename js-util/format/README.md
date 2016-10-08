# string-format.js
* 为string对象增加format方式，未匹配到的参数 原样展示
* 调用方式1：
    * x  ={"id":1,"name":"kk"}
    * "id={id},name={name}".format(x)
* 调用方式2：
    * "abc{0}".format(11)


# [format.js](https://github.com/davidchambers/string-format)  推荐使用
* http://cdn.bootcss.com/string-format/0.5.0/string-format.js
* 如果要展示  {}, 则可以 使用 {{}}进行 转义
* 调用方式1：
    * x  ={"id":1,"name":"kk"}
    * format("id={id},name={name}",x)   // action1
    * format('Hello, {}!','Alice')  // action2
    * format('Hello, {1}!',1, 'Alice')  // action3
* 调用方式2：
    * format.extend(String.prototype, {})
    * 'Hello, {}!'.format(1)
    * 其他调用方法同上
* formar对象时候，如果有多个对象，可以在字符串中使用 {i.fieldName}
    * var bobby = {firstName: 'Bobby', lastName: 'Fischer'}
    * var garry = {firstName: 'Garry', lastName: 'Kasparov'}
    * '{0.firstName} {0.lastName} vs. {1.firstName} {1.lastName}'.format(bobby, garry)
    * 0. may be omitted when referencing a property of {0}:








