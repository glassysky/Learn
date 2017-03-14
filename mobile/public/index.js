window.onload = function() {
  var body = document.body;
  var list = document.getElementById('list');
  var listWrap = document.getElementById('list-wrap');
  var first = document.getElementById('first');
  var startPoint, endPoint, offset;
  var colorOptions = ['red', 'black', 'green', 'blue', 'yellow'];
  // setInterval(function() {
  //   console.log(list.scrollHeight);
  //   console.log(document.body.scrollTop);
  // }, 1000);
  listWrap.addEventListener('touchstart', function(e) {
    startPoint = e.changedTouches[0].clientY;
  }, false);
  listWrap.addEventListener('touchend', function(e) {
    endPoint = e.changedTouches[0].clientX;
    offset = endPoint - startPoint;
    if (offset > 30 && body.scrollTop === 0) {
      list.insertBefore(appendData(10), list.firstElementChild);
      first.scrollIntoView();
      console.log('load');
    }
  }, false)

  list.appendChild(appendData(10));

  function appendData(num) {
    var ul = document.createElement('ul');
    var html = '', count = 0;
    var times = num || 10;
    for(var i = 0; i < times; i++) {
      html += '<li>' + Math.random() + '</li>'
    }
    ul.innerHTML = html;
    if(count === 6) {
      count = 0;
    }
    ul.style.backgroundColor = colorOptions[count++];
    return ul;
  }

}