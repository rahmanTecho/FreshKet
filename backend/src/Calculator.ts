export type Item =
  | "red"
  | "green"
  | "blue"
  | "yellow"
  | "pink"
  | "purple"
  | "orange";
export type Order = Record<Item, number>;

export class Calculator {
  private prices: Record<Item, number> = {
    red: 50,
    green: 40,
    blue: 30,
    yellow: 50,
    pink: 80,
    purple: 90,
    orange: 120,
  };

  calculateOrder(order: Order, hasMemberCard: boolean): number {
    let total = 0;
    for (const [item, quantity] of Object.entries(order)) {
      let price = this.prices[item as Item] * quantity;

      // Bundle discount for Orange, Pink, and Green sets
      if (
        (item === "orange" || item === "pink" || item === "green") &&
        quantity >= 2
      ) {
        price *= 0.95; // 5% discount for each bundle
      }

      total += price;
    }

    // Member card discount
    if (hasMemberCard) {
      total *= 0.9; // 10% discount
    }

    return Math.ceil(total);
  }
  
  getPrices(): Record<Item, number> {
    return this.prices;
  }
}
