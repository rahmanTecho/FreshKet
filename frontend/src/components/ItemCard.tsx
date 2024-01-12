import React, { useState } from "react";

interface ItemCardProps {
  name: string;
  price: number;
  onAddToOrder: (name: string, quantity: number) => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ name, price, onAddToOrder }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleAddClick = () => {
    onAddToOrder(name, quantity);
  };

  return (
    <div className="item-card">
      <div className="item-info">
        <h3 className="item-name">{name} Set</h3>
        <p className="item-price">{price} THB/set</p>
      </div>
      <div className="item-actions">
        <label htmlFor={`${name}-quantity`} className="quantity-label">Quantity:</label>
        <input
          type="number"
          id={`${name}-quantity`}
          name="quantity"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="quantity-input"
        />
        <button onClick={handleAddClick} className="add-button">
          Add to Order
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
