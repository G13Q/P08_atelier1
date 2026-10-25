import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";
import { PlantItem } from "./PlantItem";

function ShoppingList() {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    [],
  );

  return (
    <div className="lmj-shopping-list">
      {/* Category Pills */}
      <ul className="lmj-categories">
        {categories.map((cat) => (
          <li key={cat} className="lmj-category">
            {cat}
          </li>
        ))}
      </ul>

      {/* Grid of Plant Cards */}
      <ul className="lmj-plant-list">
        {plantList.map((plant) => (
          <PlantItem
            key={plant.id}
            id={plant.id}
            cover={plant.cover}
            name={plant.name}
            water={plant.water}
            light={plant.light}
            isSpecialOffer={plant.isSpecialOffer}
            isBestSale={plant.isBestSale}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
