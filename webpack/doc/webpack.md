##webpack
>WebPack可以看做是模块打包机：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其转换和打包为合适的格式供浏览器使用。

##为什么使用webpack
- **模块化**让我们可以把复杂的程序细化为小的文件
- **类似于TypeScript这种在JavaScript基础上拓展的开发语言：使我们能够实现目前版本的JavaScript不能直接使用的特性，并且之后还能转换为JavaScript文件使浏览器可以识别**
- **Scss、Less预处理器**
- **...**

##使用
1、初始化，创建一个packge.json文件，里面包含当前项目的依赖模块，自定义的脚本执行任务等。。。
>npm init

2、安装webpack
>npm install --save-dev webpack 安装到项目目录

>npm install --g webpack 全局安装

3、