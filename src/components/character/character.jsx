import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AficheCahacter from "./afiche/afiche-cahacter";
import s from "./character.module.css";
import CharacterInfo from "./character_info/cahrscter-info";

const Character = () => {
  const param = useParams("");
  const [data, setData] = useState("");
  const [episode, setEpisode] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await fetch(
        `https://rickandmortyapi.com/api/character/${param.id}`
      );
      const dataJson = await result.json();
      setData(dataJson);
      console.log(dataJson);
      const episodeLink = dataJson.episode;
      const episodeRes = await Promise.all(
        episodeLink.map((url) => fetch(url).then((res) => res.json()))
      );
      setEpisode(episodeRes);
    };
    getData();
  }, [param.id]);

  return (
    <>
      <div className="main_char">
        <AficheCahacter img={data?.image} name={data?.name} />
      </div>
      <div className={s.main_info}>
        <div className={s.innformstion}>
          <h2 className={s.main_info_title}>Information</h2>
          <CharacterInfo name={"Gender"} info={data?.gender} />
          <CharacterInfo name={"Status"} info={data?.status} />
          <CharacterInfo name={"Specie"} info={data?.species} />
          <CharacterInfo name={"Origin"} info={data?.origin?.name} />
          <CharacterInfo name={"Type"} info={data?.type || "неизвестно"} />
          <CharacterInfo name={"Location"} info={data?.location?.name} />
        </div>
        <div className={s.episoge}>
          <h2 className={s.main_info_title}>Episodes</h2>
          <Link>
            {episode.map((ep) => (
              <div key={ep.id}>
                {ep.name}
              </div>
            ))}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Character;
