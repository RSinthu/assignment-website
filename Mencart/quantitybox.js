document.getElementById('increase-btn').addEventListener('click', function() {
    var quantityElement = document.getElementById('quantity');
    var currentQuantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = currentQuantity + 1;
  });

  document.getElementById('decrease-btn').addEventListener('click', function() {
    var quantityElement = document.getElementById('quantity');
    var currentQuantity = parseInt(quantityElement.textContent);
    if (currentQuantity > 1) {
      quantityElement.textContent = currentQuantity - 1;
    }
  });