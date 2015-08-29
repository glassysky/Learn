# AngularJS NOTES
1. 什么是AngularJS
    完全使用JavaScript编写的客户端技术。同其他历史悠久的Web技术（HTML,CSS和JavaScript）配合使用，使Web应用开发比以往更简单、更快捷。
2. NG中的数据绑定
    ```html
    <!DOCTYPE html>
    <html ng-app>
    <head>
        <title>Document</title>
        <script src="http://cdn.staticfile.org/angular.js/1.3.0-beta.13/angular.js"></script>
    </head>
    <body>
        <div ng-controller='MyController'>
             <input type="text" ng-model="name" placeholder="Your name">
             <h1>Hello {{ name }}</h1>
        </div>
    </body>
    </html>
    ```
  引用angular.js，并在DOM元素上声明设置 `ng-app` 属性即可（即用ng-app确定要应用NG的范围）。上图代码中，将input中的值用`{{}}`与name绑定。
  而`ng-model`则将**数据模型对象**（$scope）中的 `name` 绑定到了input表单上。
  `ng-controller`则声明被它包含的元素都来自某个控制器
3. 最佳绑定
  最佳绑定应该绑定到对象属性上，而非对象本身。
  如：绑定到`$scope.clock.now`，而不是`$scope.clock`
4. 模块
  把函数定义在全局命名空间会带来很多麻烦，所以我们把代码封装在一个**模块**（module）里，在NG中，模块是定义应用的最主要方式。
  方法：`angular.module('模块名称',[(依赖列表)])`
  第二个参数：包含了一个字符串变量组成的列表，每个元素都是一个模块名称，新声明木块依赖于这些模块
