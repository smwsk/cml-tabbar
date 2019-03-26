# cml-navbar

* ## 在线效果 
  [H5效果在线地址](https://smwsk.github.io/cml-navbar/dist/web/cml-navbar.html)
  <br>
* ## 效果截图
  <table  style="text-align:center;vertical-align:middle;">
  <tr>
  <th>H5效果</th>
  <th>微信效果</th>
  </tr>
  <tr>
    <td><img src="https://smwsk.github.io/cml-navbar/dist/screen_img/h5_screen.png" width="250" height="450" alt="H5效果"/></td>
    <td>
      <img src="https://smwsk.github.io/cml-navbar/dist/screen_img/wx_screen.png" width="250" height="450" alt="微信效果"/>
    </td>
  </tr>
  </table>
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
    ```
    content: 代表 tarbar的名称
    info: 代表数组的第一个代表正常情况下的图片地址，第二个代表点击显示的图片地址
    componentName: 代表点击显示的组件名称
    ```  