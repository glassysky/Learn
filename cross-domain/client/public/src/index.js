window.onload = function() {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
        console.log(xhr.responseText);
      } else {
        alert('Request fail with status code: ' + xhr.status);
      }
    }
  }
  xhr.open('GET', 'http://localhost:3000', 'false');
  xhr.send(null);
}