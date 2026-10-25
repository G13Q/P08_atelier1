import { CareScale } from "./CareScale";

export function PlantItem({
  name,
  cover,
  light,
  water,
  isSpecialOffer,
  isBestSale,
}) {
  return (
    <li className="lmj-plant-item">
      {isSpecialOffer && <span className="lmj-sale">Solde</span>}
      {isBestSale && <span className="lmj-badge">🔥 Best seller</span>}

      <img src={cover} alt={`${name} cover`} className="lmj-plant-cover" />

      <div className="lmj-plant-body">
        <h3 className="lmj-plant-name">{name}</h3>

        {/* Container matching .lmj-plant-details in your CSS */}
        <div className="lmj-plant-details">
          <CareScale scaleValue={light} careType="light" />
          <CareScale scaleValue={water} careType="water" />
        </div>
      </div>
    </li>
  );
}
