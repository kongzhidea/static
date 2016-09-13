# [参数校验](https://github.com/chriso/validator.js)
* validator 校验的时候，一些方法 限制输入类型为string，否则抛出异常。
    * 调用时候如果不能保证类型，最好加上try，catch
    * try{ validator.isMobilePhone(1) }catch(err){console.log(err)}
* validator.isMobilePhone(string)
    * 校验是否是 手机号，
* validator.isEmail(string)
    * 校验是否是 邮箱
* validator.isAlpha(string)
    * 校验是否是 字母，包含大小写
* validator.isAlphanumeric(string)
    * 校验是否是 大小写字母和数字，不包含 符号，如 -
* validator.isNumeric(string)
    * 校验是否是 数字， 可以是负数
* validator.toInt(string)
    * string转int
* validator.toFloat(string)
* validator.toBoolean(string)
    * "","0","false"  =>  false
    * "1","true"   => true
* validator.isIP(string)
    * 校验是否是IP地址
* validator.isJSON
    * 校验是否是 json格式











