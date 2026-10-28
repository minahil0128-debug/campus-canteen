import { CATEGORIES } from "../data/menu.js";

export default function Filters({
  category,
  setCategory,
  query,
  setQuery,
  vegOnly,
  setVegOnly,
  sort,
  setSort,
}) {
  return (
    <div className="filters">
      <div className="filters__row">
        <input
          className="input"
          type="search"
          placeholder="Search dishes…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search dishes"
        />
        <select
          className="input input--select"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          aria-label="Sort dishes"
        >
          <option value="default">Sort: Featured</option>
          <option value="low">Price: Low to high</option>
          <option value="high">Price: High to low</option>
          <option value="name">Name: A–Z</option>
        </select>
        <label className="toggle">
          <input
            type="checkbox"
            checked={vegOnly}
            onChange={(e) => setVegOnly(e.target.checked)}
          />
          <span className="toggle__track" aria-hidden="true" />
          Vegetarian only
        </label>
      </div>

      <div className="chips" role="tablist" aria-label="Menu categories">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={category === c}
            className={"chip" + (category === c ? " chip--active" : "")}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
