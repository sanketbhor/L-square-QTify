import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Styles from "./Section.module.css";

function Section({ title, dataSource }) {
  const [cards, setCards] = useState([]);
  const [isShowAll, setIsShowAll] = useState(false);

  useEffect(() => {
    dataSource().then((data) => {
      setCards(data);
    });
  }, []);

  return (
    <div className={Styles.sectiongrid}>
      <div className={Styles.wrapper}>
        <div>
          <h4>{title}</h4>
        </div>
        <div>
          <h4 className={Styles.showall}>Show All</h4>
        </div>
      </div>
      {/* {isShowAll ? ( */}
      <div className={Styles.cardsWrapper}>
        {cards.map((card) => (
          <Card
            data={{
              title: card.title,
              image: card.image,
              follows: card.follows,
            }}
            type="album"
          />
        ))}
      </div>
      // ) : ( // <div>Carousel</div>
      // )}
    </div>
  );
}

export default Section;
