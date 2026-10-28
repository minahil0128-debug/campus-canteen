import { useState } from "react";
import FoodArt from "./FoodArt.jsx";

export const slugify = (name) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// Shows your own photo from /public/images/<dish-name>.jpg if it exists,
// otherwise falls back to the built-in illustration.
export default function Dish({ item, className = "" }) {
  const [failed, setFailed] = useState(false);

  if (failed) return <FoodArt id={item.id} name={item.name} className={className} />;

  return (
    <img
      className={"dish-photo " + className}
      src={`/images/${slugify(item.name)}.jpg`}
      alt={item.name}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
