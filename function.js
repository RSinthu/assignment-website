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