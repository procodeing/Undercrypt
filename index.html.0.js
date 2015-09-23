ok.onclick = function() {var r = encryptable(txt.value); outp.innerHTML = r.en; var url = 'data:text/json;charset=utf8,' + encodeURIComponent(JSON.stringify(r.key));
window.open(url, '_blank');
window.focus();};

ko.onclick = function() {outt.innerHTML = decryptable(tet.value,JSON.parse(tkt.value));};