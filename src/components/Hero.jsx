
export default function Hero() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const stack = [
    {
      name: "Chicken Biryani",
      image :
          "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=700&q=85",    },
    {
      name: "Samosa Chaat",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=85",
    },
    {
      name: "Cold Coffee",
      image:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=85",
    },
  ];

  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="eyebrow">
            <span className="eyebrow__dot" /> {today} · Now serving
          </p>

          <h1>
            Fresh food,
            <br />
            <span className="hl">between</span> classes.
          </h1>

          <p className="hero__lead">
            Browse today's menu, filter by what you're craving, and build your
            order list before you reach the counter.
          </p>

          <div className="hero__cta">
            <a className="btn btn--sage" href="#menu">
              See today's menu
            </a>

            <a className="btn btn--outline" href="#pick">
              Chef's pick
            </a>
          </div>

          <dl className="stats">
            <div>
              <dt>16</dt>
              <dd>dishes daily</dd>
            </div>

            <div>
              <dt>5 min</dt>
              <dd>avg. wait</dd>
            </div>

            <div>
              <dt>Rs. 60+</dt>
              <dd>starting price</dd>
            </div>
          </dl>
        </div>

        <div className="hero__art">
          {stack.map((item, index) => (
            <div
              className={`polaroid polaroid--${index + 1}`}
              key={item.name}
            >
              <img
                src={item.image}
                alt={item.name}
                loading="eager"
                onError={(event) => {
                  event.currentTarget.style.visibility = "hidden";
                }}
              />
              <span>{item.name}</span>
            </div>
          ))}

          <div className="sticker">
            Made
            <br />
            fresh
            <br />
            daily
          </div>
        </div>
      </div>
    </section>
  );
}
