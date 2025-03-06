import React, { useState } from "react";
import "./OrderPage.css";

const burgerOptions = [
  { name: "Classic Cheeseburger", price: 10 },
  { name: "BBQ Bacon Burger", price: 12 },
  { name: "Mushroom Swiss Burger", price: 11 },
  { name: "Double Patty Burger", price: 14 },
  { name: "Spicy Jalapeno Burger", price: 11 },
  { name: "Vegan Beyond Burger", price: 13 },
];

const drinkOptions = [
  { name: "Classic Lager (Beer)", price: 5 },
  { name: "IPA (Beer)", price: 6 },
  { name: "Stout (Beer)", price: 7 },
  { name: "Coca-Cola (Soft Drink)", price: 3 },
  { name: "Lemonade (Soft Drink)", price: 3 },
  { name: "Iced Tea (Soft Drink)", price: 4 },
];

const tipOptions = [0, 5, 10, 15, 20];

const OrderPage = () => {
  const initialOrderState = {
    name: "",
    burgers: [{ name: "", quantity: 1 }],
    drinks: [{ name: "", quantity: 1 }],
    tipPercentage: 0,
    hasAllergy: false,
    allergyType: "",
    receiptNumber: "",
  };

  const [order, setOrder] = useState(initialOrderState);
  const [receipt, setReceipt] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setOrder((prevOrder) => ({
      ...prevOrder,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleBurgerChange = (index, field, value) => {
    const updatedBurgers = [...order.burgers];
    updatedBurgers[index][field] = value;
    setOrder({ ...order, burgers: updatedBurgers });
  };

  const handleDrinkChange = (index, field, value) => {
    const updatedDrinks = [...order.drinks];
    updatedDrinks[index][field] = value;
    setOrder({ ...order, drinks: updatedDrinks });
  };

  const handleAddBurger = () => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      burgers: [...prevOrder.burgers, { name: "", quantity: 1 }],
    }));
  };

  const handleAddDrink = () => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      drinks: [...prevOrder.drinks, { name: "", quantity: 1 }],
    }));
  };

  const generateReceiptNumber = () => {
    return `#${Math.floor(100000 + Math.random() * 900000)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let burgerTotal = 0;
    let drinkTotal = 0;

    const selectedBurgers = order.burgers.map((burger) => {
      const burgerInfo = burgerOptions.find((b) => b.name === burger.name);
      if (burgerInfo) {
        const total = burgerInfo.price * burger.quantity;
        burgerTotal += total;
        return { ...burger, price: burgerInfo.price, total };
      }
      return burger;
    });

    const selectedDrinks = order.drinks.map((drink) => {
      const drinkInfo = drinkOptions.find((d) => d.name === drink.name);
      if (drinkInfo) {
        const total = drinkInfo.price * drink.quantity;
        drinkTotal += total;
        return { ...drink, price: drinkInfo.price, total };
      }
      return drink;
    });

    const totalPrice = burgerTotal + drinkTotal;
    const tipAmount = (totalPrice * order.tipPercentage) / 100;
    const grandTotal = totalPrice + tipAmount;
    const receiptNum = generateReceiptNumber();

    setReceipt({
      ...order,
      burgers: selectedBurgers,
      drinks: selectedDrinks,
      burgerTotal,
      drinkTotal,
      total: totalPrice,
      tipAmount,
      grandTotal,
      receiptNumber: receiptNum,
    });

    setOrder(initialOrderState);
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Welcome to BurgerHaven</h1>
      <p className="text-center my-4 fs-5">Please make an order</p>

      <div className="row">
        {/* Order Form */}
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
            {/* Name */}
            <div className="mb-3">
              <label className="form-label">Customer Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={order.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Burger Selection */}
            <div className="mb-3">
              <label className="form-label">Choose Your Burgers</label>
              {order.burgers.map((burger, index) => (
                <div key={index} className="d-flex gap-2 mb-2">
                  <select
                    className="form-control"
                    value={burger.name}
                    onChange={(e) =>
                      handleBurgerChange(index, "name", e.target.value)
                    }
                    required
                  >
                    <option value="">-- Select a Burger --</option>
                    {burgerOptions.map((b, i) => (
                      <option key={i} value={b.name}>
                        {b.name} - ${b.price}
                      </option>
                    ))}
                  </select>
                  <input
                    type="number"
                    className="form-control w-25"
                    value={burger.quantity}
                    onChange={(e) =>
                      handleBurgerChange(
                        index,
                        "quantity",
                        parseInt(e.target.value)
                      )
                    }
                    min="1"
                    required
                  />
                </div>
              ))}
              <button
                type="button"
                style={{
                  backgroundColor: "#722f37",
                  color: "#fff",
                  height: "40px",
                  width: "200px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                onClick={handleAddDrink}
              >
                Add Another Drink
              </button>
            </div>

            {/* Drink Selection */}
            <div className="mb-3">
              <label className="form-label">Choose Your Drinks</label>
              {order.drinks.map((drink, index) => (
                <div key={index} className="d-flex gap-2 mb-2">
                  <select
                    className="form-control"
                    value={drink.name}
                    onChange={(e) =>
                      handleDrinkChange(index, "name", e.target.value)
                    }
                    required
                  >
                    <option value="">-- Select a Drink --</option>
                    {drinkOptions.map((d, i) => (
                      <option key={i} value={d.name}>
                        {d.name} - ${d.price}
                      </option>
                    ))}
                  </select>
                  <input
                    type="number"
                    className="form-control w-50"
                    value={drink.quantity}
                    onChange={(e) =>
                      handleDrinkChange(
                        index,
                        "quantity",
                        parseInt(e.target.value)
                      )
                    }
                    min="1"
                    required
                  />
                </div>
              ))}
              <button
                type="button"
                style={{
                  backgroundColor: "#722f37",
                  color: "#fff",
                  height: "40px",
                  width: "200px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                onClick={handleAddDrink}
              >
                Add Another Drink
              </button>
            </div>
            {/* Allergy Checkbox */}
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input custom-checkbox"
                name="hasAllergy"
                checked={order.hasAllergy}
                onChange={handleChange}
              />
              <label className="form-check-label">
                Do you have any allergies?
              </label>
            </div>

            {/* Allergy Type Input */}
            {order.hasAllergy && (
              <div className="mb-3">
                <label className="form-label">Specify Allergy Type</label>
                <input
                  type="text"
                  className="form-control"
                  name="allergyType"
                  value={order.allergyType}
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            {/* Tip Selection */}
            <div className="mb-3">
              <label className="form-label">Add a Tip</label>
              <select
                className="form-control"
                name="tipPercentage"
                value={order.tipPercentage}
                onChange={handleChange}
              >
                {tipOptions.map((tip, index) => (
                  <option key={index} value={tip}>
                    {tip}% {tip === 0 ? "(No Tip)" : ""}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <div className="d-flex justify-content-center">
              <button type="submit" className="order-btn btn btn-primary">
                Place Order
              </button>
            </div>
          </form>
        </div>
        

        {/* Receipt Display */}
        {receipt && (
          <div className="col-md-6">
            <div className="p-4 border rounded shadow bg-light receipt-box">
              <h2 className="text-center">🧾 Order Receipt</h2>
              <p>
                <strong>Receipt Number:</strong> {receipt.receiptNumber}
              </p>
              <p>
                <strong>Name:</strong> {receipt.name}
              </p>
              {receipt.hasAllergy && (
                <p>
                  <strong>Allergy:</strong> {receipt.allergyType}
                </p>
              )}
              <hr />
              <p>
                <strong>Subtotal:</strong> ${receipt.total.toFixed(2)}
              </p>
              <p>
                <strong>Tip ({receipt.tipPercentage}%):</strong> $
                {receipt.tipAmount.toFixed(2)}
              </p>
              <h4 className="text-center fw-bold">
                Grand Total: ${receipt.grandTotal.toFixed(2)}
              </h4>
              <p className="text-center fw-bold">
                Thank you for your order! 🍔🥤
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderPage;
