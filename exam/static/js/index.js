(function(){

  var bankInput = document.getElementById("bank-card"),
      topInfo = document.getElementById("card-top-info"),
      pElement = topInfo.getElementsByTagName("p");

  // 提供一些基本方法
  var method = (function () {
    return {
      // 封装事件handler
      EventUtil: {
        addHandler: function (element, type, handler) {
          if (element.addEventListener) {
            element.addEventListener(type, handler, false);
          } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
          } else {
            element["on" + type] = handler;
          }
        },
        removeHandler: function (element, type, handler) {
          if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
          } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
          } else {
            element["on" + type] = null;
          }
        }
      },
      // 删去字符串里所有的空格
      trim: function (str) {
        return str.replace(/\s+/g, "");
      },
      // 将字符串分割成几部分
      divide: function (str, pattern, replace) {
        return this.trim(str).replace(pattern, '$1 ');
      },
      // 切换上方提示信息显隐
      toggleInfo: function () {
        if (bankInput.value !== "") {
          this.showInfo();
        } else {
          this.hideInfo();
        }
      },
      showInfo: function () {
        topInfo.style.display = "block";
      },
      hideInfo: function () {
        topInfo.style.display = "none";
      },
      // 信息正确性提示
      errorNotice: function () {
        bankInput.style.border = "1px solid red";
      },
      rightNotice: function () {
        bankInput.style.border = "1px solid blue";
      },
      inputFilter: function (str) {
        var result = {},
            state = false,
            msg = "";

        if (str.match(/([\d]{12,19})/g)) {
          // 匹配成功
          state = true;
          msg = "";
        } else {
          if (str === "") {
            // 输入为空
            state = false;
            msg = "请填写银行卡号。";
          } else if (str.match(/([^\d])/g)) {
            // 匹配到非数字
            state = false;
            msg = "无法识别您的卡号，请填写正确的银行卡卡号。";
          } else {
            state = false;
            msg = "银行卡号是12－19位数字。";
          }
        }

        result.state = state;
        result.msg = msg;

        return result;
      }
    }
  })();

  function inputHandler (event) {
    console.log("input");
    // 匹配每四位 数字||字母 组合
    var pattern = /([\d\w]{4})/g,
        replaceStr = "$1 ";
    pElement[0].innerHTML = method.divide(bankInput.value, pattern, replaceStr);
    method.toggleInfo();
  }

  function focusHandler (event) {
    console.log("focus");
    method.toggleInfo();
  }

  function blurHandler (event) {
    console.log("blur");
    var value = bankInput.value,
        result = method.inputFilter(value);
    method.hideInfo();

    console.log(result.msg);
  }

  // 添加input事件监听
  if (typeof bankInput.onkeyup != 'undefined') {
    // 支持onkeyup事件
    method.EventUtil.addHandler(bankInput, 'keyup', inputHandler);
  } else if (typeof bankInput.onpropertychange != 'undefined') {
    // 不支持onkeyup 则降级使用 onpropertychange
    method.EventUtil.addHandler(bankInput, 'propertychange', inputHandler);
  }

  // 添加focus && blur事件监听
  method.EventUtil.addHandler(bankInput, 'focus', focusHandler);
  method.EventUtil.addHandler(bankInput, 'blur', blurHandler);

})();
