import express from 'express';
import { Calculator, Order } from './Calculator';
import cors from 'cors';

const app = express();
app.use(cors());

app.use(express.json());

const calculator = new Calculator();

app.get('/store-items', (req, res) => {
  res.json(calculator.getPrices());
});

// Endpoint to calculate the total cost of an order
app.post('/calculate', (req, res) => {
  const { order, hasMemberCard }: { order: Order; hasMemberCard: boolean } = req.body;
  
  if (!order) {
    return res.status(400).send('Order data is required.');
  }

  const total = calculator.calculateOrder(order, hasMemberCard);
  res.json({ total });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
