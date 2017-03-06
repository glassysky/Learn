(function(){
  window.onload = function(){
    var showDialogButton = document.querySelector('#show-dialog');
    var dialog = new Dialog();

    showDialogButton.onclick = function() {
      dialog.showDialog();
    }
  };


  // dialog
  function Dialog(options) {
    options = options || {};
    this._options = {
      title: options['title'] || '提示框',
      content: options['content'] || '请设置option以更改提示内容',
      width: options['width'] || 450,
      height: options['height'] || 'auto',
    },
    this._dialog = this.createComponent();
  }

  Dialog.prototype.createComponent = function() {
    var options = this._options;
    var dialog = document.createElement('div'),
        contentElement = document.createElement('div'),
        contentTitle = document.createElement('div'),
        contentBody = document.createElement('div');
        buttonWrap = document.createElement('div');
        cross = document.createElement('div');

    dialog.id = 'c-dialog';
    
    contentElement.className = 'c-content-element';
    contentElement.style.width = typeof options.width === 'string' ? options.width : options.width + 'px';
    contentElement.style.height = typeof options.height === 'string' ? options.height : options.height + 'px';
    contentElement.onclick = (function(self) {
      return function(e) {
        var targetClass = e.target.classList;
        if(targetClass.contains('confirm-button') || targetClass.contains('cancel-button') || targetClass.contains('c-title-cross')) {
          self.hideDialog();
        }
      }
    }(this));

    contentTitle.className = 'c-content-title';
    contentTitle.innerHTML = options['title'];

    cross.className = 'c-title-cross';
    cross.innerHTML = '<b></b>';

    contentBody.className = 'c-content-body';
    contentBody.innerHTML = '<div class="c-content-text">' + options["content"] + '</div>';
    
    buttonWrap.className = 'c-button-wrap';
    buttonWrap.innerHTML = 
      '<button class="button confirm-button">确认</button>' + 
      '<button class="button cancel-button">取消</button>';

    contentTitle.appendChild(cross);
    contentBody.appendChild(buttonWrap);
    contentElement.appendChild(contentTitle);
    contentElement.appendChild(contentBody);
    dialog.appendChild(contentElement);

    return dialog;
  }
  Dialog.prototype.showDialog = function() {
    document.querySelector('body').appendChild(this._dialog);
  }
  Dialog.prototype.hideDialog = function() {
    var dialog = document.getElementById('c-dialog');
    dialog.parentNode.removeChild(dialog);
  }
})();