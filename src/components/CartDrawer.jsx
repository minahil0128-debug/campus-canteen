
import { useState } from "react";

const initialCustomer = {
  name: "",
  studentId: "",
  phone: "",
  collection: "Pickup at canteen",
  notes: "",
};

export default function CartDrawer({
  open,
  onClose,
  lines,
  total,
  onAdd,
  onRemove,
  onClear,
  onPlaceOrder,
}) {

  const [customer, setCustomer] = useState({ ...initialCustomer });
  const [confirmation, setConfirmation] = useState("");
  const [completedOrder, setCompletedOrder] = useState(null);

  // Update customer information.
  const handleChange = (event) => {
    const { name, value } = event.target;

    setCustomer((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // Validate and submit the complete order.
  const handleCheckout = (event) => {
    event.preventDefault();

    if (lines.length === 0) {
      alert("Please add a dish to your order first.");
      return;
    }

    if (
      !customer.name.trim() ||
      !customer.studentId.trim() ||
      !customer.phone.trim()
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    const order = {
      id: Date.now(),
      customer: {
        ...customer,
        name: customer.name.trim(),
        studentId: customer.studentId.trim(),
        phone: customer.phone.trim(),
        notes: customer.notes.trim(),
      },
      items: lines.map(({ item, qty }) => ({
        item: { ...item },
        qty,
      })),
      total,
      placedAt: new Date().toLocaleString(),
    };

    // Save the order in App.jsx.
   // Save the complete order in App.jsx only once.
if (typeof onPlaceOrder !== "function") {
  alert("Order could not be submitted. Please try again.");
  return;
}

onPlaceOrder(order);

// Keep the confirmation visible in the drawer.
setCompletedOrder(order);
setConfirmation(
  `Thank you, ${customer.name.trim()}! Your order has been placed successfully.`
);

    // Reset the form for the next order.
    setCustomer({ ...initialCustomer });
  };

  // Finish after viewing confirmation.
  const handleDone = () => {
    setConfirmation("");
    setCompletedOrder(null);
    onClose();
  };

  // Close the drawer.
  const handleClose = () => {
    setConfirmation("");
    setCompletedOrder(null);
    onClose();
  };

  return (
    <>
      <div
        className={`overlay ${open ? "overlay--open" : ""}`}
        onClick={handleClose}
      />

      <aside
        className={`drawer ${open ? "drawer--open" : ""}`}
        aria-hidden={!open}
        aria-label="Canteen checkout"
      >
        <div className="drawer__head">
          <h2>{confirmation ? "Order Status" : "Checkout"}</h2>

          <button
            type="button"
            className="icon-btn"
            onClick={handleClose}
            aria-label="Close checkout"
          >
            ✕
          </button>
        </div>

        {confirmation && completedOrder ? (
          <div className="order-success" role="status">
            <div className="order-success__icon">✓</div>

            <h3>Order Confirmed!</h3>
            <p>{confirmation}</p>

            <hr />

            <h4>Order Details</h4>

            <p>
              <strong>Order ID:</strong> {completedOrder.id}
            </p>

            <p>
              <strong>Customer:</strong>{" "}
              {completedOrder.customer.name}
            </p>

            <p>
              <strong>Student ID:</strong>{" "}
              {completedOrder.customer.studentId}
            </p>

            <p>
              <strong>Phone:</strong>{" "}
              {completedOrder.customer.phone}
            </p>

            <p>
              <strong>Collection:</strong>{" "}
              {completedOrder.customer.collection}
            </p>

            {completedOrder.customer.notes && (
              <p>
                <strong>Special Instructions:</strong>{" "}
                {completedOrder.customer.notes}
              </p>
            )}

            <h4>Ordered Dishes</h4>

            {completedOrder.items.map(({ item, qty }) => (
              <p key={item.id}>
                {item.name} × {qty} — Rs. {item.price * qty}
              </p>
            ))}

            <p>
              <strong>Total:</strong> Rs. {completedOrder.total}
            </p>

            <button
              type="button"
              className="btn"
              onClick={handleDone}
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <h3>Your Order</h3>

            {lines.length === 0 ? (
              <p className="drawer__empty">
                Your cart is empty. Add a dish from the menu first.
              </p>
            ) : (
              <ul className="drawer__list">
                {lines.map(({ item, qty }) => (
                  <li key={item.id} className="line">
                    <div>
                      <strong>{item.name}</strong>
                      <small>
                        Rs. {item.price} × {qty}
                      </small>
                    </div>

                    <div className="stepper stepper--sm">
                      <button
                        type="button"
                        onClick={() => onRemove(item.id)}
                        aria-label={`Remove one ${item.name}`}
                      >
                        −
                      </button>

                      <span>{qty}</span>

                      <button
                        type="button"
                        onClick={() => onAdd(item.id)}
                        aria-label={`Add one ${item.name}`}
                      >
                        +
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            <div className="total">
              <span>Total</span>
              <strong>Rs. {total}</strong>
            </div>

            <form
              className="order-form"
              onSubmit={handleCheckout}
            >
              <h3>Customer Information</h3>

              <label htmlFor="customer-name">Full Name *</label>
              <input
                id="customer-name"
                name="name"
                type="text"
                value={customer.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                autoComplete="name"
                required
              />

              <label htmlFor="student-id">Student ID *</label>
              <input
                id="student-id"
                name="studentId"
                type="text"
                value={customer.studentId}
                onChange={handleChange}
                placeholder="Enter your student ID"
                required
              />

              <label htmlFor="customer-phone">Phone Number *</label>
              <input
                id="customer-phone"
                name="phone"
                type="tel"
                value={customer.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                autoComplete="tel"
                required
              />

              <label htmlFor="collection">Order Collection</label>
              <select
                id="collection"
                name="collection"
                value={customer.collection}
                onChange={handleChange}
              >
                <option value="Pickup at canteen">
                  Pickup at canteen
                </option>
                <option value="Dine in">Dine in</option>
              </select>

              <label htmlFor="customer-notes">
                Special Instructions (Optional)
              </label>
              <textarea
                id="customer-notes"
                name="notes"
                value={customer.notes}
                onChange={handleChange}
                placeholder="Any special requests?"
                rows={3}
              />

              <button
                className="btn"
                type="submit"
                disabled={lines.length === 0}
              >
                Place Order — Rs. {total}
              </button>
            </form>
          </>
        )}
      </aside>
    </>
  );
}
