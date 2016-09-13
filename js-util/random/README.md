# [random](https://github.com/ckknight/random-js)
* Math.random() 为从0到1的随机数
* 调用样例1
    * r = new Random()
    * r.integer(min,max)
* 调用样例2
    * var engine = Random.engines.nativeMath;
    * Random.integer(0, 99)(engine)
* integer(min, max)，Random.integer(min, max)(engine) 包含min和max的整数随机数
* bool()，Random.bool()(engine) 随机返回 true/false，概率均为50%
* bool(percentage)，Random.bool(percentage)(engine)  percentage概率为true, percentage  0-1
* pick(ar) ，Random.pick(engine, array)随机从数组中挑选一个
* pick(ar,begin,end)，Random.pick(engine, array[, begin[, end]]) 随机从数组[begin,end]中挑选一个
* shuffle(ar)，Random.shuffle(engine, array) 将数据随机打乱，  原数组数据会变化
* string(length)，Random.string()(engine, length)  随机返回length长度的字符串， 随机范围：大小写字母，数字，不包含符号
* string(length,pool)，Random.string(pool)(engine, length)  随机从pool中选择， 返回length长度的字符串
*