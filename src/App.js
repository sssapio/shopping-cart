import { useState, useEffect } from "react";
import "./App.css";

const COUPON_CODE = "POWERLABSx";
const DISCOUNT = 0.132;

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [coupon, setCoupon] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then(setProducts)
      .catch(() => setError("Failed to load products."));
  }, []);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const finalTotal =
    coupon === COUPON_CODE ? +(total * (1 - DISCOUNT)).toFixed(2) : total;

  return (
    <div className="App">
      <h1>Shopping Cart</h1>

      {error && <p className="error">{error}</p>}

      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <span>{item.name}</span>
              <span>
                <button onClick={() => updateQty(item.id, -1)}>-</button>
                {item.qty}
                <button onClick={() => updateQty(item.id, 1)}>+</button>
              </span>
              <span>${(item.price * item.qty).toFixed(2)}</span>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}

      <div className="coupon">
        <input
          type="text"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="Enter coupon code"
        />
        {coupon && coupon !== COUPON_CODE && (
          <p className="error">Invalid coupon code</p>
        )}
      </div>

      <h3>Total: ${total.toFixed(2)}</h3>
      {coupon === COUPON_CODE && <h3>Discounted Total: ${finalTotal}</h3>}
    </div>
  );
}

export default App;
