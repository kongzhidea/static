# 字符串操作
* javascript 采用unicode编码。
* 如果把数字与字符串相加，结果将成为字符串
* charAt(i)	返回指定索引位置的字符， 也可以直接  s[i]访问
* charCodeAt()	返回指定索引位置字符的 Unicode 值
* concat()	连接两个或多个字符串，返回连接后的字符串
* fromCharCode()	将 Unicode 转换为字符串
* indexOf()	返回字符串中检索指定字符第一次出现的位置
* lastIndexOf()	返回字符串中检索指定字符最后一次出现的位置
* localeCompare()	用本地特定的顺序来比较两个字符串
* match()	找到一个或多个正则表达式的匹配
* replace()	替换与正则表达式匹配的子串， 只替换第一个出现的字符串
* search()	检索与正则表达式相匹配的值
* slice()	提取字符串的片断，并在新的字符串中返回被提取的部分 [start,end)
* split()	把字符串分割为子字符串数组
* substr()	从起始索引号提取字符串中指定数目的字符, start,length
* substring()	提取字符串中两个指定的索引号之间的字符,[start,end)
* toLowerCase()	把字符串转换为小写
* toString()	返回字符串对象值
* toUpperCase()	把字符串转换为大写
* trim()	移除字符串首尾空白
* String.replace( ) 的简单用法
    * var text = "javascript 非常强大 ！";
    * text.replace(/javascript/i, "JavaScript"); // 返回：JavaScript 非常强大 ！
* String.replace( ) 替换所有出现的目标字符
    * var text= "javascript 非常强大 ！JAVASCRIPT 是我最喜欢的一门语言 ！";
    * text.replace(/javascript/ig, "JavaScript"); // 返回：JavaScript 非常强大 ！JavaScript 是我最喜欢的一门语言 ！


# [string-js](https://github.com/jprichardson/string.js)
* 详情见 内部md
* 方法调用样例：  S(string).left(i)
* 转string:
    * S(string).s
    * S(string).toString()
    * S.extendPrototype();
      var name = 'Your name is JP'.right(2); //'JP'
      S.restorePrototype(); //be a good citizen and clean up
* left(n)
    * 返回左侧字符串， 返回结果 对象S
* right(n)
    * 返回右侧字符串， 返回结果 对象S
* endsWith(s)
    * 是否以s结尾, true/false
* startsWith(s)
    * 是否以s开头, true/false
* camelize()
    * Remove any underscores or dashes and convert a string into camel casing.
    * 下划线写法转换成 驼峰式写法
    * 如 user_id   =>  userId
* underscore()
    * Returns converted camel cased string into a string delimited by underscores.
    * S('dataRate').underscore().s; //'data_rate'
* capitalize()
    * 首字母大写, 如 uid  => Uid
* chompLeft(prefix)
    *
    * S('foobar').chompLeft('foo').s; //'bar'
    * S('foobar').chompLeft('bar').s; //'foobar'
* chompRight(suffix)
    * Removes suffix from end of string.
    * S('foobar').chompRight('bar').s; //'foo'
    * S('foobar').chompRight('foo').s; //'foobar'
* collapseWhitespace()
    * Converts all adjacent whitespace characters to a single space.
    * 删除左右空白符，合并中间多余空白符
* contains(s)， 同include(s)
    * 是否包含子串
* count(substring)
    * Returns the count of the number of occurrences of the substring.
* escapeHTML()
    * HTML 转义
    * S('<div>hi</div>').escapeHTML().s; //&lt;div&gt;hi&lt;/div&gt;
* unescapeHTML()
    * HTML 转义符解析
    * S("&lt;div&gt;hi&lt;/div&gt;").unescapeHTML().s //"<div>hi</div>"
* ensureLeft(prefix)
    * Ensures string starts with prefix.
    * S('subdir').ensureLeft('/').s; //'/subdir'
    * S('/subdir').ensureLeft('/').s; //'/subdir'
* ensureRight(suffix)
    * Ensures string ends with suffix.
* isAlpha()
    * Return true if the string contains only letters.
* isAlphaNumeric()
    * Return true if the string contains only letters and numbers，不包含 符号，如 -
* isNumeric()
    * Return true if the string only contains digits
* isEmpty()
    * Return true if the string is solely composed of whitespace or is null/undefined.
    * S(' ').isEmpty(); //true
    * S('\t\t\t    ').isEmpty(); //true
    * S('\n\n ').isEmpty(); //true
    * S('helo').isEmpty(); //false
    * S(null).isEmpty(); //true
    * S(undefined).isEmpty(); //true
* isLower()
    * Return true if the character or string is lowercase
    * S('z').isLower(); //true
    * S('B').isLower(); //false
    * S('hijp').isLower(); //true
    * S('hi jp').isLower(); //false
* isUpper()
    * Returns true if the character or string is uppercase
* length
    * Property to return the length of the string object. 不是方法，是属性
    * S('hi').length; //2
* lines()
    * Returns an array with the lines. 以\n或 \r\n分割字符串，返回数组
* repeat(n)， 同 times(n)
    * Returns a string repeated n times.  返回S 对象
* replaceAll(ss, newstr)
    * Return the new string with all occurrences of ss replaced with newstr.
* setValue(value)
    * Sets the string to a value.
    * var myString = S('War');
    * myString.setValue('Peace').s; // 'Peace'
* trim()
    * Return the string with leading and trailing whitespace removed. Reverts to native `trim()` if it exists.
    * S('hello ').trim().s; //'hello'
    * S(' hello ').trim().s; //'hello'
    * S('\nhello').trim().s; //'hello'
    * S('\nhello\r\n').trim().s; //'hello'
    * S('\thello\t').trim().s; //'hello'
* trimLeft()
    * Return the string with leading and whitespace removed
* trimRight()
    * Return the string with trailing whitespace removed.
* strip([string1],[string2],...)
    * Returns a new string with all occurrences of [string1],[string2],... removed.
    * S(' 1 2 3--__--4 5 6-7__8__9--0').strip(' ', '_', '-').s; //'1234567890'
    * S('can words also be stripped out?').strip('words', 'also', 'be').s; //'can    stripped out?'
* trimLeft()
    * Return the string with leading and whitespace removed
* trimRight()
    * Return the string with trailing whitespace removed.
* wrapHTML()
    * S('Venkat').wrapHTML('div').s //<div>Venkat</div>
    * S('Venkat').wrapHTML('div', {
            "class": "left bullet"
        }).s //<div class="left bullet">Venkat</div>
    * S('Venkat').wrapHTML('div', {
            "id": "content",
            "class": "left bullet"
        }).s // <div id="content" class="left bullet">Venkat</div>


