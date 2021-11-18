# 河南省宗教自动答题脚本，可自定义时间

![GIF](https://inews.gtimg.com/newsapp_ls/0/14194170153/0.gif)

作者：tanyiqu，也就是本人自己

软件是一个浏览器扩展，安装后点击图标即可使用



项目地址：https://github.com/tanyiqu/religious-auto

下载：https://github.com/tanyiqu/religious-auto/releases

太慢了的话，用网盘链接：https://tanyiqu.lanzoui.com/b0cqofvfe

**一定对你有用的，请给我的项目点个star**



**仅做学习用途**

思路：

- 使用浏览器扩展方式
- 注入jquery.js
- 注入script.js脚本
- 在script.js中，遍历已有的题库，使用jquery在页面中获取这道题。如果有这道题就把答案选中，没有这道题就跳过
- 最后点击交卷的时候，系统会自动查找哪道题没有做，最后再做了就行
