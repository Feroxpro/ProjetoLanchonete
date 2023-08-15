const menuItems = {
  cafe: 3.00,
  chantily: 1.50,
  suco: 6.20,
  sanduiche: 6.50,
  queijo: 2.00,
  salgado: 7.25,
  combo1: 9.50,
  combo2: 7.50
};

const selectedItems = [];
let totalAmount = 0;

function addItem(item, price) {
  selectedItems.push({ item, price });
  updateSelectedItems();
  calculateTotal();
}

function updateSelectedItems() {
  const selectedItemsList = document.getElementById('selected-items-list');
  selectedItemsList.innerHTML = '';
  selectedItems.forEach(({ item, price }) => {
      const li = document.createElement('li');
      li.textContent = `${item} - R$${price.toFixed(2)}`;
      selectedItemsList.appendChild(li);
  });
}

function calculateTotal() {
  totalAmount = selectedItems.reduce((total, { price }) => total + price, 0);
  const discount = parseFloat(document.getElementById('discount').value) || 0;
  totalAmount -= discount;
  document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
}
