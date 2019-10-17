## F5
![在这里插入图片描述](https://img-blog.csdnimg.cn/2019101514175276.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xvdmVfbG92ZWxvdmU=,size_16,color_FFFFFF,t_70)
使用F5刷新页面，size显示内容来自缓存
size以下集中常见情况
 1、**from memory cache：** 请求数据来自内存，关闭页面后内存会被释放，再次打开会重新请求资源，status为200
 2、**from disk cache：** 请求数据来自磁盘，之前某个时间段加载过该资源，关闭页面后不会释放，再次打开页面，显示的仍然是from disk cache
 3、**资源本身的大小：** status为200，请求服务端资源，size显示的是资源本身的大小
 如果状态吗为304，size表示的不是资源本身的大小，而是客户端与服务器之间的报文大小

>原因：请求头不同（如下）
* chrome
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191015142949818.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xvdmVfbG92ZWxvdmU=,size_16,color_FFFFFF,t_70)
 在chrome浏览器中，请求头中显示**Provisional headers are shown**
 未与服务端正确建立链接，不会正确显示请求头

* firefox
![在这里插入图片描述](https://img-blog.csdnimg.cn/2019101514325352.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xvdmVfbG92ZWxvdmU=,size_16,color_FFFFFF,t_70)
在firefox浏览器中，返回304 Not Modified
请求头中增加If-Modified-Since字段，如果资源未过期，则会命中缓存，不会像服务端发起请求。
``使用F5刷新，chrome和firefox都是从缓存中获取数据，但是表现不一样，因为浏览器内部机制不同，chrome使用强缓存（from disk cache和from memory cache），firefox使用协商缓存``

## Ctrl + F5
chrome和firefox不从缓存中获取，都想服务器发起请求，可以适应缓存服务器资源，但是需要到源服务器进行验证

>Tip: 控制台中Disable cache选项选中表示不从缓存中取数据，向服务器端发起请求。
