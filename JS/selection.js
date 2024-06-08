document.addEventListener('DOMContentLoaded', function () {
    var images = document.querySelectorAll('.img');
    var selectedItems = document.getElementById('selected-items');
    var itemCount = document.getElementById('item-count');
    var totalPrice = 0;
    var count = 0;
  
    images.forEach(function (img) {
      img.addEventListener('click', function () {
        var itemName = img.getAttribute('data-name');
        var itemPrice = parseInt(img.getAttribute('data-price'));
  
        var itemEntry = document.createElement('p');
        itemEntry.textContent = itemName + ' - ' + itemPrice + '원';
        selectedItems.appendChild(itemEntry);
  
        totalPrice += itemPrice;
        count += 1;
  
        itemCount.textContent = count;
      });
    });
  
    document.getElementById('delect-message').addEventListener('click', function () {
      selectedItems.innerHTML = '';
      itemCount.textContent = '0';
      totalPrice = 0;
      count = 0;
    });
  });
  