
        
function filterByRange() {
  var rangeValue = document.getElementById('priceRange').value; 

  
  var products = document.querySelectorAll('.card');
    var count=0;
  
  products.forEach(function(product) {
    var price = parseFloat(product.dataset.price);
    if (price <= rangeValue) {
        count=count+1;
      product.style.display = 'inline-block'; 
    } else {
      product.style.display = 'none';
    }
  });

  

  document.getElementById('rangeValue').innerText = rangeValue;
  document.getElementById('count').textContent=count;
}
document.getElementById('priceRange').addEventListener('input', function(){
    document.getElementById('rangeValue').textContent=document.getElementById('priceRange').value;
});





if ('WebSocket' in window) {
(function () {
    function refreshCSS() {
        var sheets = [].slice.call(document.getElementsByTagName("link"));
        var head = document.getElementsByTagName("head")[0];
        for (var i = 0; i < sheets.length; ++i) {
            var elem = sheets[i];
            var parent = elem.parentElement || head;
            parent.removeChild(elem);
            var rel = elem.rel;
            if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
                var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
                elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
            }
            parent.appendChild(elem);
        }
    }
    var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
    var address = protocol + window.location.host + window.location.pathname + '/ws';
    var socket = new WebSocket(address);
    socket.onmessage = function (msg) {
        if (msg.data == 'reload') window.location.reload();
        else if (msg.data == 'refreshcss') refreshCSS();
    };
    if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
        console.log('Live reload enabled.');
        sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
    }
})();
}
else {
console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
}

function navigateToNewPage() {
window.location.href = 'cart/cart1.html';
}
function navigateToNewPage2() {
window.location.href = 'cart/cart2.html';
}
function navigateToNewPage3() {
window.location.href = 'cart/cart3.html';
}
function navigateToNewPage4() {
window.location.href = 'cart/cart4.html';
}
function navigateToNewPage5() {
window.location.href = 'cart/cart5.html';
}
function navigateToNewPage6() {
window.location.href = 'cart/cart6.html';
}
function navigateToNewPage7() {
window.location.href = 'cart/cart7.html';
}
function navigateToNewPage8() {
window.location.href = 'cart/cart8.html';
}
function navigateToNewPage9() {
window.location.href = 'cart/cart9.html';
}
function navigateToNewPage10() {
window.location.href = 'cart/cart10.html';
}
function navigateToNewPage11() {
window.location.href = 'cart/cart11.html';
}
function navigateToNewPage12() {
window.location.href = 'cart/cart12.html';
}
function navigateToNewPage13() {
window.location.href = 'cart/cart13.html';
}
function navigateToNewPage14() {
window.location.href = 'cart/cart14.html';
}
function navigateToNewPage15() {
window.location.href = 'cart15.html';
}
function navigateToNewPage16() {
window.location.href = 'cart/cart16.html';
}
function navigateToNewPage17() {
window.location.href = 'cart/cart17.html';
}
