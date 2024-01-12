import React, { useState } from "react";
import ItemCard from "./ItemCard";
import useFetch from "../hooks/useFetch";
import { baseUrl } from "../constans";

type ItemsState = Record<string, number>;
type OrderState = Record<string, number>;

const Store: React.FC = () => {
  const [order, setOrder] = useState<OrderState>({});
  const [total, setTotal] = useState<number>(0);
  const [hasMemberCard, setHasMemberCard] = useState<boolean>(false);
  const [isOrderSubmitted, setIsOrderSubmitted] = useState<boolean>(false);
  const { data, error, loading } = useFetch<ItemsState>(
    `${baseUrl}/store-items`
  );

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error!</p>;

  const handleAddToOrder = (itemName: string, quantity: number) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      [itemName]: (prevOrder[itemName] || 0) + quantity,
    }));
  };

  const calculateTotal = (currentOrder: OrderState) => {
    fetch(`${baseUrl}/calculate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ order: currentOrder, hasMemberCard }),
    })
      .then((response) => response.json())
      .then((data) => {
        setTotal(data.total);
        setIsOrderSubmitted(true);
      })
      .catch(console.error);
  };

  const toggleMemberCard = () => {
    setHasMemberCard(!hasMemberCard);
  };

  return (
    <div className="app">
      <div className="item-card-container">
        {Object.entries(data).map(([name, price]) => (
          <ItemCard
            key={name}
            name={name}
            price={price as any}
            onAddToOrder={handleAddToOrder}
          />
        ))}
      </div>
      {isOrderSubmitted && (
        <div className="order-total">
          <h2>Order Total: {total} THB</h2>
        </div>
      )}
      <div className="order-summary">
        <button onClick={toggleMemberCard} className="member-card-button">
          {hasMemberCard ? "Remove Member Card" : "Apply Member Card"}
        </button>
        <button
          onClick={() => calculateTotal(order)}
          className="submit-order-button"
        >
          Submit Order
        </button>
      </div>
    </div>
  );
};

export default Store;
