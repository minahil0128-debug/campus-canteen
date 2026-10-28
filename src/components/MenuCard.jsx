
const TONES = {
  Breakfast: "tone-sage",
  Lunch: "tone-grey",
  Snacks: "tone-soft",
  Beverages: "tone-dark",
  Desserts: "tone-sage",
};

export default function MenuCard({
  item,
  qty,
  onAdd,
  onRemove,
  onClear,
}) {
  const quantity = qty || 0;

  return (
    <article className="card">
      {/* Food image and category */}
      <div className={`card__media ${TONES[item.category] || ""}`}>
        <img
          src={item.image}
          alt={item.name}
          className="food-image"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <span className="card__cat">{item.category}</span>

        <span
          className={`dot ${
            item.veg ? "dot--veg" : "dot--nonveg"
          }`}
          title={item.veg ? "Vegetarian" : "Non-vegetarian"}
          aria-label={item.veg ? "Vegetarian" : "Non-vegetarian"}
        />

        <span className="price-tag">Rs. {item.price}</span>
      </div>

      {/* Food details */}
      <div className="card__body">
        <h3 className="card__title">{item.name}</h3>

        <p className="card__desc">{item.desc}</p>

        {/* Preparation time and spice level */}
        <div className="card__meta">
          <span>◷ {item.time}</span>

          {item.spicy > 0 && (
            <span
              className="spice"
              aria-label={`Spice level ${item.spicy} of 2`}
            >
              {"●".repeat(item.spicy)}
              {"○".repeat(2 - item.spicy)} spice
            </span>
          )}
        </div>

        {/* Add to Order or Clear */}
        <div className="card__bottom">
  <button
    type="button"
    className="btn btn--dark btn--block"
    onClick={() => onAdd(item.id)}
  >
    Add to Order
  </button>
</div>
      </div>
    </article>
  );
}
