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
document.querySelector('#search').addEventListener('input', function(event) {
    var v = event.target.value.toLowerCase();
    var products = document.querySelectorAll('.card');
    var count = 0;
    products.forEach(function(product) {
      var name = (product.dataset.name).toLowerCase();
      if (name.includes(v)) {
          count=count+1;
        product.style.display = 'inline-block'; 
      } else {
        product.style.display = 'none';
      }
    });
    document.getElementById('count').textContent=count;
  
})



function changeImage() {
  var selectedColor = document.querySelector('input[name="color"]:checked').value;
  var imageElement = document.getElementById('tshirt19');

  switch (selectedColor) {
      case 'red':
          imageElement.src = 'red.jpg';
          break;
      case 'green':
          imageElement.src = 'greentshrt.jpg';
          break;
      case 'blue':
          imageElement.src = 'blue.jpg';
          break;
      default:
          imageElement.src = 'orangeshirt.jpg';
        break;
      }
}

function changeImage() {
  var selectedColor = document.querySelector('input[name="color"]:checked').value;
  var imageElement = document.getElementById('imageToChange');

  switch (selectedColor) {
      case 'red':
          imageElement.src = 'redshoe.jpg';
          break;
      case 'green':
          imageElement.src = 'greenshoe.jpg';
          break;
      case 'black':
          imageElement.src = 'blackshoe.jpg';
          break;
      case 'blue':
          imageElement.src = 'blue.jpg';
          break;    
      default:
          imageElement.src = 'blue.jpg';
        break;
      }
}


function changeImage() {
  var selectedColor = document.querySelector('input[name="color"]:checked').value;
  var imageElement = document.getElementById('imageToChange');

  switch (selectedColor) {
      case 'red':
          imageElement.src = 'redshoe.jpg';
          break;
      case 'green':
          imageElement.src = 'greenshoe.jpg';
          break;
      case 'black':
          imageElement.src = 'blackshoe.jpg';
          break;
      case 'blue':
          imageElement.src = 'blue.jpg';
          break;    
      default:
          imageElement.src = 'blue.jpg';
        break;
      }
}

function changeImage() {
  var selectedColor = document.querySelector('input[name="color"]:checked').value;
  var imageElement = document.getElementById('imageToChange');

  switch (selectedColor) {
      case 'red':
          imageElement.src = 'red.jpg';
          break;
      case 'green':
          imageElement.src = 'greentshrt.jpg';
          break;
      case 'blue':
          imageElement.src = 'blue.jpg';
          break;
      default:
          imageElement.src = 'orangeshirt.jpg';
        break;
      }
}


