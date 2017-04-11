# NAMI-DEMO 全栈生姜头赞赏
NAMI开发案例，2个客户端页面，3个服务端接口，2张数据库表，实现完整的支付、登录、会话管理、OPEN_ID等资料获取，**十分适合新手入门的DEMO**。

## 真机体验
![](http://i.imgur.com/Qj27zI0.jpg)

*2017年4月12日审核通过*

## 效果图
![](http://i.imgur.com/JsImfs7.jpg)

## 客户端部署
- clone项目（或者下载项目包）
- 打开小程序开发工具，导入项目的client文件夹；直接运行可以直连全栈生姜头部署在腾讯云上的NAMI服务；

![](http://i.imgur.com/HX52vQy.png)

## 服务端部署
- 下载最新的NAMI安装包，详情：[http://pan.baidu.com/s/1nvJfxBr](http://pan.baidu.com/s/1nvJfxBr)，选择适合的版本下载；
- 解压安装包，讲本项目server文件夹的内容分布拷贝到NAMI根目录对应request以及function目录中；
- 打开NAMI内置的h2数据库（windows版本可直接运行db.bat），执行本项目server/sql文件夹的建表语句；如需使用mysql等其他数据库，请自行修改NAMI根目录中conf/jdbc.properties的配置内容；
- 修改NAMI根目录中conf/wx.properties，填入小程序appid与appsecrect，以及小程序支付相关密匙；
- 启动NAMI，修改客户端的nami/config.js文件，将地址配置到自行部署的NAMI服务器；

![](http://i.imgur.com/e2d7abP.png)

## 其他注意事项
- 由于小程序与服务端交互必须使用https，所以在做生产环境部署时需要使用SSL证书（开发时可略过此步骤）
- 腾讯云有自己一整天小程序解决方案，推荐使用，可免去不少烦恼（都是腾讯自家的，兼容得比较好吧）
- NAMI启动的时候自动开放了8080端口（HTTP）以及8443端口（HTTPS），都是可以直接访问的（但没有证书）；推荐的实现方式是使用IAAS提供的负载均衡服务进行转发，或者自行架设nginx服务。

## 相关资料
- NAMI：[https://github.com/wodenwang/nami](https://github.com/wodenwang/nami)
- NAMI客户端：[https://github.com/wodenwang/nami-client](https://github.com/wodenwang/nami-client)
- 详细教程（知乎）：[https://zhuanlan.zhihu.com/p/25372448](https://zhuanlan.zhihu.com/p/25372448)

## 更多内容，请关注“全栈生姜头”
![](http://i.imgur.com/ZbGLfNo.jpg)