import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";

function Main({ weatherData }) {
  return (
    <main>
      <WeatherCard />
      <section className="cards">
        <p className="cards__text">
          Today is 75 &deg; F / You May want to wear:
        </p>
        <ul className="cards__list">
          {defaultClothingItems
            //.filter((item) => {
            //  return item.weather === weatherData.type;
            //  }) commentint out for styling
            .map((item) => {
              return <ItemCard key={item._id} item={item} />;
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
