import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import FilterSection from "../FilterSection/FilterSection";
import Styles from "./Section.module.css";

export default function Section({ title, dataSource, filterSource, type }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
  const [isShowAll, setIsShowAll] = useState(false);

  const fetchData = async (source) => {
    const data = await source();
    setData(data || []);
  };
  useEffect(() => {
    fetchData(dataSource);
    if (filterSource) {
      filterSource().then((response) => {
        const { data } = response;
        setFilters([...filters, ...data]);
      });
    }
  }, []);

  const handleToggle = () => {
    setIsShowAll((prevState) => !prevState);
  };

  // const filteredData = data.filter;
  const filteredCards = data.filter((card) =>
    selectedFilterIndex !== 0
      ? card.genre.key === filters[selectedFilterIndex].key
      : card
  );

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
      {filterSource && (
        <FilterSection
          data={filters}
          selectedFilterIndex={selectedFilterIndex}
          setSelectedFilterIndex={setSelectedFilterIndex}
        />
      )}
      <div className={Styles.cardsWrapper}>
        {isShowAll ? (
          filteredCards.map((card) => (
            <Card
              data={{
                title: card.title,
                image: card.image,
                follows: card.follows,
              }}
              type={type}
            />
          ))
        ) : (
          <Carousel
            data={filteredCards}
            renderComponent={(data) => <Card data={data} type={type} />}
          />
        )}
      </div>
    </div>
  );
}
