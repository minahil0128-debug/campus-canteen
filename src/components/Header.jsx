export default function Header({
  cartCount,
  orderCount,
  onCartClick,
  onOrdersClick,
}) {
  return (
    <header className="header">
      <div className="container header__inner">
        <a className="brand" href="#top" aria-label="Campus Canteen home">
          <span className="brand__mark">CC</span>
          <span className="brand__name">Campus Canteen</span>
        </a>

        <nav className="header__nav">
          <a href="#menu">Menu</a>
          <a href="#hours">Hours</a>
        </nav>

        <button
          type="button"
          className="btn btn--dark"
          onClick={onOrdersClick}
        >
          Order list
          <span className="badge">{orderCount}</span>
        </button>
      </div>
    </header>
  );
}