# cml-navbar

* ## 在线效果 
  [H5效果地址](https://smwsk.github.io/cml-navbar/dist/web/cml-navbar.html)
* ## 使用方法
  修改项目中constant目录的index.js文件<br>
```
export const navbarList = [
  {
    "content": "主页",
    "info" : [require("../assets/icon/home/home_normal.png"),require("../assets/icon/home/home_show.png")],
    "componentName" : "home"
  },
  {
    "content": "类别",
    "info" : [require("../assets/icon/type/type_normal.png"),require("../assets/icon/type/type_show.png")],
    "componentName" : "type"
  },
  {
    "content": "个人",
    "info" : [require("../assets/icon/my/my_normal.png"),require("../assets/icon/my/my_show.png")],
    "componentName" : "my"
  }
]
```
### content 代表 tarbar的名称<br>
### info 代表数组的第一个代表正常情况下的图片地址，第二个代表点击显示的图片地址<br>
### componentName: 代表点击显示的组件名称
  