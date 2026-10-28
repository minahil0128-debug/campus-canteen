export default function OrdersPage({
  orders,
  onBackToMenu,
  onCancelOrder,
}) {
  return (
    <main className="section">
      <div className="container">
        <h1>My Orders</h1>

        {orders.length === 0 ? (
          <p className="empty">You have not placed any orders yet.</p>
        ) : (
          orders.map((order) => (
            <article
              key={order.id}
              className="order-success"
              style={{ marginTop: "20px", padding: "20px" }}
            >
              <h2>Order Details</h2>
              <p>Order ID: {order.id}</p>
              <p>Date: {order.placedAt}</p>
              <p>Name: {order.customer.name}</p>
              <p>Student ID: {order.customer.studentId}</p>
              <p>Phone: {order.customer.phone}</p>

              <h3>Ordered Dishes</h3>
              {order.items.map(({ item, qty }) => (
                <p key={item.id}>
                  {item.name} × {qty} — Rs. {item.price * qty}
                </p>
              ))}

              <h3>Total: Rs. {order.total}</h3>

              {order.status === "Cancelled" ? (
                <p>Order Status: Cancelled</p>
              ) : (
                <button
                  type="button"
                  className="btn"
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you want to cancel this order?"
                      )
                    ) {
                      onCancelOrder(order.id);
                    }
                  }}
                >
                  Cancel Order
                </button>
              )}
            </article>
          ))
        )}

        <button
          type="button"
          className="btn"
          onClick={onBackToMenu}
          style={{ marginTop: "20px" }}
        >
          Back to Menu
        </button>
      </div>
    </main>
  );
}