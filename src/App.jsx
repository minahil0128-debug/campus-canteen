
import { useMemo, useState } from "react";
import { MENU } from "./data/menu.js";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Filters from "./components/Filters.jsx";
import MenuCard from "./components/MenuCard.jsx";
import CartDrawer from "./components/CartDrawer.jsx";
import Footer from "./components/Footer.jsx";
import Marquee from "./components/Marquee.jsx";
import OrdersPage from "./components/OrdersPage.jsx";
import ChefPick from "./components/ChefPick.jsx";

export default function App() {
  // Menu filters
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [vegOnly, setVegOnly] = useState(false);
  const [sort, setSort] = useState("default");

  // Cart, orders, and page navigation
  const [cart, setCart] = useState({});
  const [orderedItems, setOrderedItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activePage, setActivePage] = useState("menu");

  // Filter and sort menu
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();

    let list = MENU.filter(
      (m) =>
        (category === "All" || m.category === category) &&
        (!vegOnly || m.veg) &&
        (!q ||
          m.name.toLowerCase().includes(q) ||
          m.desc.toLowerCase().includes(q))
    );

    if (sort === "low") {
      list = [...list].sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      list = [...list].sort((a, b) => b.price - a.price);
    }

    if (sort === "name") {
      list = [...list].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    return list;
  }, [category, query, vegOnly, sort]);

  // Add a dish to the cart
  const add = (id) => {
    setCart((current) => ({
      ...current,
      [id]: (current[id] || 0) + 1,
    }));
  };

  // Remove one dish from the cart
  const remove = (id) => {
    setCart((current) => {
      const next = { ...current };

      if (next[id] > 1) {
        next[id] -= 1;
      } else {
        delete next[id];
      }

      return next;
    });
  };

  // Add a dish and open checkout
  const addAndOpenOrder = (id) => {
    setCart((current) => ({
      ...current,
      [id]: (current[id] || 0) + 1,
    }));

    setDrawerOpen(true);
  };

  // Save each complete order
  const handlePlaceOrder = (order) => {
    if (!order || !Array.isArray(order.items)) {
      console.error("Invalid order:", order);
      return;
    }

    setOrders((previous) => [order, ...previous]);

    const newIds = order.items
      .filter(({ item }) => item && item.id != null)
      .map(({ item }) => item.id);

    setOrderedItems((previous) => [
      ...new Set([...previous, ...newIds]),
    ]);

    // Clear the cart for the next order
    setCart({});
  };
  const handleCancelOrder = (orderId) => {
  setOrders((previous) =>
    previous.map((order) =>
      order.id === orderId
        ? { ...order, status: "Cancelled" }
        : order
    )
  );
};

  // Reset a menu card if needed
  const clearItem = (id) => {
    setOrderedItems((previous) =>
      previous.filter((itemId) => itemId !== id)
    );
  };

  // Calculate cart items and total
  const lines = MENU.filter((item) => cart[item.id]).map((item) => ({
    item,
    qty: cart[item.id],
  }));

  const count = lines.reduce((sum, line) => sum + line.qty, 0);

  const total = lines.reduce(
    (sum, line) => sum + line.qty * line.item.price,
    0
  );

  return (
    <>
     <Header
  cartCount={count}
  orderCount={orders.length}
  onCartClick={() => {
    setActivePage("menu");
    setDrawerOpen(true);
  }}
  onOrdersClick={() => {
    setDrawerOpen(false);
    setActivePage("orders");
  }}
/>

      {activePage === "menu" ? (
        <>
          <main>
            <Hero />
            <Marquee />

            <ChefPick
              qty={(id) => cart[id] || 0}
              onAdd={add}
            />

            <section className="section" id="menu">
              <div className="container">
                <div className="section__head">
                  <h2>Today's menu</h2>
                  <p>{visible.length} dishes</p>
                </div>

                <Filters
                  category={category}
                  setCategory={setCategory}
                  query={query}
                  setQuery={setQuery}
                  vegOnly={vegOnly}
                  setVegOnly={setVegOnly}
                  sort={sort}
                  setSort={setSort}
                />

                {visible.length === 0 ? (
                  <p className="empty">
                    No dishes match your filters. Try clearing the search.
                  </p>
                ) : (
                  <div className="grid">
                    {visible.map((item) => (
                      <MenuCard
                        key={item.id}
                        item={item}
                        qty={0}
                        onAdd={addAndOpenOrder}
                        onRemove={remove}
                        onClear={clearItem}
                      />
                    ))}
                  </div>
                )}
              </div>
            </section>
          </main>

          <Footer />
        </>
      ) : (
        <OrdersPage
  orders={orders}
  onBackToMenu={() => setActivePage("menu")}
  onCancelOrder={handleCancelOrder}
/>
      )}

      <CartDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        lines={lines}
        total={total}
        onAdd={add}
        onRemove={remove}
        onClear={() => setCart({})}
        onPlaceOrder={handlePlaceOrder}
      />
    </>
  );
}
