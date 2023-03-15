import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Styles from "./Section.module.css";

function Section({ title, dataSource }) {
  const [cards, setCards] = useState([]);
  const [isShowAll, setIsShowAll] = useState(false);

  useEffect(() => {
    dataSource().then((data) => {
      setCards(data);
    });
  }, []);

  const handleToggle = () => {
    setIsShowAll((prevState) => !prevState);
  };

  return (
    <div className={Styles.sectiongrid}>
      <div className={Styles.wrapper}>
        <div>
          <h4>{title}</h4>
        </div>
        <div className={Styles.showall} onClick={handleToggle}>
          <h4>{isShowAll ? "Collapse" : "Show All"}</h4>
        </div>
      </div>
      <div className={Styles.cardsWrapper}>
        {isShowAll ? (
          cards.map((card) => (
            <Card
              data={{
                title: card.title,
                image: card.image,
                follows: card.follows,
              }}
              type="album"
            />
          ))
        ) : (
          <Carousel
            data={cards}
            renderComponent={(data) => <Card data={data} type="album" />}
          />
        )}
      </div>
    </div>
  );
}

export default Section;
