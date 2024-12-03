import s from "./locations.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AficheCharacters from "../afiche-characters/afiche-characters";
import Icon from "../../assets/icon-location.svg";
import Search from "../../assets/sersh.svg";

const LocationPage = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [pages, setPages] = useState(null);


  useEffect(() => {
    const getData = async () => {
      try {
        setError(null);
        const result = await axios.get(
          `https://rickandmortyapi.com/api/location`,
          {
            params: {
              name: name,
              page: page,
            },
          }
        );

        setData(result.data.results);
        console.log(result.data.results || []);
        setPages(result.data.info.pages);

      } catch (error) {
        console.error("Error", error);
        setError("Error");
      }
    };

    getData();
  }, [name, page]);
  const handlePageChange = () => {
    if (page < pages) {
      setPage(page + 1);
    } else {
      setPage(1);
    }
  };


  return (
    <>
      <AficheCharacters urlAfiche={Icon} />
      <div className={s.filter_wrapper}>
        <div className={s.filter_by_name}>
          <img src={Search} alt="" />
          <input
            type="text"
            placeholder="Filter by name..."
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div className={s.card__list}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {data.map((item) => (
          <Link to={`/location/${item.id}`} className={s.card_location_item} key={item.id}>
            <h3 className={s.name}>{item.name}</h3>
            <h3 className={s.type}>{item.type}</h3>
          </Link>
        ))}
      </div>
      <button className={s.loat__more} onClick={handlePageChange}>
        {page < pages ? "Load more..." : "start over"}
      </button>
    </>
  );
};

export default LocationPage;
