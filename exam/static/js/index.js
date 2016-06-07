(function(){

  var method = (function () {
    return {
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
      trim: function (str) {
        return str.replace(/\s+/g, "");
      },
      divide: function (str, pattern, replace) {
        return this.trim(str).replace(pattern, '$1 ');
      }
    }
  })();

  var bankInput = document.getElementById("bank-card"),
      topInfo = document.getElementById("card-top-info"),
      pElement = topInfo.getElementsByTagName("p");

  function handler (event) {
    var pattern = /([\d\w]{4})/g,
        replaceStr = "$1 ";
    pElement[0].innerHTML = method.divide(bankInput.value, pattern, replaceStr);
  }

  if (typeof bankInput.onkeyup != 'undefined') {
    // 支持onkeyup事件
    method.EventUtil.addHandler(bankInput, 'keyup', handler);
  } else if (typeof bankInput.onpropertychange != 'undefined') {
    // 不支持onkeyup 则降级使用 onpropertychange
    method.EventUtil.addHandler(bankInput, 'propertychange', handler);
  }

})();
