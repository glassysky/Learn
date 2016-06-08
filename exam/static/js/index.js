(function(){

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
      }
    }
  })();

  // bank 对象
  var bankObj = (function () {
    var bankInput = document.getElementById("bank-card"),
        topInfo = document.getElementById("card-top-info"),
        pElement = topInfo.getElementsByTagName("p"),
        cardWarnInfo = document.getElementById("card-warn-info"),
        cardCorrectInfo = document.getElementById("card-correct-info"),
        cardWarnText = document.getElementById("warn-info-text"),
        uiBankIcon = document.getElementById("ui-bank-icon-show"),
        bankMap = null;

    return {
      bankInput: bankInput,
      topInfo: topInfo,
      pElement: pElement,
      cardWarnInfo: cardWarnInfo,
      cardCorrectInfo: cardCorrectInfo,
      cardWarnText: cardWarnText,
      uiBankIcon: uiBankIcon,
      bankMap: [
        {
          cn: '中国建设银行',
          en: 'CBC',
          rules: [
            {
              num: '622280',
              digit: '19'
            },
            {
              num: '621081',
              digit: '19'
            },
            {
              num: '436742',
              digit: '16'
            },
            {
              num: '436742',
              digit: '16'
            }
          ]
        },
        {
          cn: '招商银行',
          en: 'CMB',
          rules: [
            {
              num: '622579',
              digit: '16'
            },
            {
              num: '622577',
              digit: '16'
            },
            {
              num: '439227',
              digit: '16'
            }
          ]
        }
      ],
      // 获取Input值
      getValue: function () {
        return bankInput.value;
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
        bankInput.style.border = "1px solid #ff0000";
      },
      rightNotice: function () {
        bankInput.style.border = "1px solid #ccc";
      },
      // 输入框过滤
      inputFilter: function (str) {
        var result = {},
            state = false,
            msg = "";

        if (str.match(/([\d]{12,19})/g)) {
          // 格式正确
          var info = this.bankSearch(str);
          if (info.state) {
            // 匹配到
            state = true;
            msg = info.msg;
          } else {
            state = false;
            msg = "无法识别您的卡号，请填写正确的银行卡卡号。";
          }
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
      },
      bankSearch: function (str) {
        var bankMap = this.bankMap;
        var markStr = str.slice(0, 6);

        for(var i = 0;i < bankMap.length;i++){
          for(var j = 0;j < bankMap[i].rules.length;j++){
            if (((bankMap[i].rules)[j]).num == markStr && ((bankMap[i].rules)[j]).digit == str.length) {
              // 匹配到卡号
              return {
                state: true,
                msg: bankMap[i].en
              }
            }
          }
        }
        return {
          state: false
        }
      }
    }
  })();

  function inputHandler (event) {
    // 匹配每四位 数字||字母 组合
    var pattern = /([\d\w]{4})/g,
        replaceStr = "$1 ";
    bankObj.pElement[0].innerHTML = method.divide(bankObj.getValue(), pattern, replaceStr);
    bankObj.toggleInfo();
  }

  function focusHandler (event) {
    if (bankObj.getValue() !== "") {
      bankObj.topInfo.style.display = "block";
    } else {
      bankObj.topInfo.style.display = "none";
    }
    bankObj.uiBankIcon.style.display = "none";
    bankObj.cardWarnInfo.style.display = "none";
    bankObj.cardCorrectInfo.style.display = "none";
    bankObj.uiBankIcon.className = "ui-bank-icon";
  }

  function blurHandler (event) {
    var value = bankObj.getValue(),
        result = bankObj.inputFilter(value);

    bankObj.hideInfo();
    // 输入内容有误
    if (!result.state) {
      // 边框变红
      bankObj.errorNotice();
      // 提示错误信息
      bankObj.cardWarnText.innerHTML = result.msg;
      bankObj.cardWarnInfo.style.display = "block";
    } else {
      bankObj.rightNotice();
      bankObj.uiBankIcon.style.display = "block";
      bankObj.cardCorrectInfo.style.display = "block";
      bankObj.uiBankIcon.className += " ui-bank-icon-" + result.msg;
    }
  }

  // 添加input事件监听
  if (typeof bankObj.bankInput.onkeyup != 'undefined') {
    // 支持onkeyup事件
    method.EventUtil.addHandler(bankObj.bankInput, 'keyup', inputHandler);
  } else if (typeof bankObj.bankInput.onpropertychange != 'undefined') {
    // 不支持onkeyup 则降级使用 onpropertychange
    method.EventUtil.addHandler(bankObj.bankInput, 'propertychange', inputHandler);
  }

  // 添加focus && blur事件监听
  method.EventUtil.addHandler(bankObj.bankInput, 'focus', focusHandler);
  method.EventUtil.addHandler(bankObj.bankInput, 'blur', blurHandler);

})();
