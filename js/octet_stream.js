
function filePDF(){

    var json = '{'+
                    '"typeFile":"3"'+
                '}';

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8092/file', true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.responseType = 'blob';

    xhr.onload = function(e) {
      if (this.status == 200) {
        // Note: .response instead of .responseText
        var blob = new Blob([this.response], {type: 'application/octet-stream'}),
            url = URL.createObjectURL(blob),
            _iFrame = document.createElement('iframe');

        _iFrame.setAttribute('src', url);
        _iFrame.setAttribute('style', 'visibility:hidden;');
        $('#mainPDF').append(_iFrame)        
      }
    };

    xhr.send(JSON.stringify(eval('('+json+')')));

}
