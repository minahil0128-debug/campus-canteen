import { MENU } from "../data/menu.js";

export default function ChefPick() {
  // A different featured dish each day of the year.
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0)) /
      86400000
  );

  const item = MENU[dayOfYear % MENU.length];

  return (
    <section className="pick" id="pick">
      <div className="container pick__inner">
        <div className="pick__art">
          <img
            src={item.image}
            alt={item.name}
            className="chef-pick-image"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>

        <div className="pick__body">
          <p className="eyebrow eyebrow--dark">
            Chef's pick of the day
          </p>

          <h2>{item.name}</h2>

          <p className="pick__desc">{item.desc}</p>

          <p className="pick__meta">
            {item.category} · {item.time} ·{" "}
            {item.veg ? "Vegetarian" : "Non-veg"}
          </p>

          <div className="pick__row">
            <span className="pick__price">
              Rs. {item.price}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}