const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const menuItems = {
  cafe: 3.00,
  chantily: 1.50,
  suco: 6.20,
  sanduiche: 6.50,
  queijo: 2.00,
  salgado: 7.25,
  combo1: 9.50,
  combo2: 7.50,
};

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/calculate', (req, res) => {
  const selectedItems = req.body.items;
  let total = 0;

  selectedItems.forEach(item => {
    if (menuItems[item]) {
      total += menuItems[item];
    }
  });

  res.send({ total });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
