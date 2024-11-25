import { useState, useEffect } from "react";
import s from "../card-list-apisodes/episodes.module.css";
import { useLocation } from "react-router-dom";
import Search from "../../../assets/sersh.svg";

const Episodes = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(null);
  const location = useLocation();
  const [name, setName] = useState("");

  console.log(location);

  useEffect(() => {
    const getData = async () => {
      const result = await fetch(
        `https://rickandmortyapi.com/api/episode/?page=${page}&name=${name}`
      );
      const resulJson = await result.json();
      setData(resulJson.results);
      setPages(resulJson.info.pages);
    };
    getData();
  }, [page, pages, name]);

  const handlePageChange = () => {
    if (page < pages) {
      setPage(page + 1);
    } else {
      setPage(1);
    }
  };

  return (
    <>
      <div className={s.filter_by_name}>
        <img src={Search} alt="" />
        <input
          type="text"
          placeholder="Filter by name or episode (ex. S01 or S01E02)"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={s.card__list}>
        {data.map((item, index) => (
          <div className={s.card__episodes_item} key={index}>
            <h3 className={s.name}>{item.name}</h3>
            <h3 className={s.date}>{item.air_date}</h3>
            <h3 className={s.episode}>{item.episode}</h3>
          </div>
        ))}
      </div>
      <button className={s.loat__more} onClick={handlePageChange}>
        {page < pages ? "Load more..." : "start over"}
      </button>
    </>
  );
};

export default Episodes;
