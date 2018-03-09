## Axios
>用于浏览器和node.js的基于Promise的HTTP客户端
### 目录
#### <a href="#feature">一、特征</a>
#### <a href="#install">二、安装</a>
#### <a href="#example">三、栗子🌰</a>
#### <a href="#axios-API">四、axios API</a>

#### <a name="feature">一、特征</a>
- **从浏览器中创建XMLHttpRequests**
- **从node.js创建http请求**
- **支持Promise API**
- **拦截请求和响应**
- **转换请求数据和响应数据**
- **取消请求**
- **自动转换JSON数据**
- **客户端支持防御XSRF**
#### <a name="install">二、安装</a>
1、npm安装
>npm install axios

2、bower install axios
>bower install axios

3、CDN引入
```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```
#### <a name="example">三、栗子🌰</a>
GET请求
```javascript
//将请求参数挂载到请求的url中的形式：
axios.get('user?ID=12345')
    .then(function(response){
        console.log(response);//请求正确执行代码
    })
    .catch(function(){
        console.log(error);//请求错误执行代码
    })

或者

//将请求参数单独的params属性传入的形式：
axios.get('/user',{
        params:{//请求参数
            ID:12345
        }
    }）
    .then(function(response){
        console.log(response);//请求正确执行代码
    })
    .catch(function(){
        console.log(error);//请求错误执行代码
    })

```
POST请求
```javascript

```
#### <a name="axios-API">四、axios API</a>