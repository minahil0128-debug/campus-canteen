const WORDS = [
  "Hot chai",
  "Fresh parathas",
  "Biryani at noon",
  "Cold coffee",
  "Samosa chaat",
  "Made daily",
  "Gulab jamun",
];

export default function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {row.map((w, i) => (
          <span key={i}>
            {w} <i>✦</i>
          </span>
        ))}
      </div>
    </div>
  );
}
