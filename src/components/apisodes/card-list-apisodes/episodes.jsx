import { useState, useEffect } from "react";
import s from "../card-list-apisodes/episodes.module.css";

const Episodes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await fetch(`https://rickandmortyapi.com/api/episode`);
      const resultson = await result.json();
      console.log(resultson);
      setData(resultson.results);
    };
    getData();
  }, []);

  return (
    <>
          <div className={s.card__list}>
      {data.map((item, index) => (
            <div className={s.card__episodes_item} key={index}>
              <h3>{item.name}</h3>
              <h4>{item.episode}</h4>
              <p>{item.air_date}</p>
            </div>

      ))}
      </div>
    </>
  );
};

export default Episodes;
