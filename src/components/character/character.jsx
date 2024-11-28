import { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import AficheCahacter from "./afiche/afiche-cahacter";
import s from "./character.module.css";
import CharacterInfo from "./character_info/cahrscter-info";
import CharacterEpisodeInfo from "./character_info/info-episodes/character_episode-info";

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
      console.log(dataJson);

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
          <div className={s.info__pe}>
            <CharacterInfo name={"Gender"} info={data?.gender || "неизвестно"} />
            <CharacterInfo name={"Status"} info={data?.status || "неизвестно"} />
            <CharacterInfo name={"Specie"} info={data?.species || "неизвестно"} />
            <CharacterInfo name={"Origin"} info={data?.origin?.name || "неизвестно"} />
            <CharacterInfo name={"Type"} info={data?.type || "неизвестно"} />
            <CharacterInfo name={"Location"} info={data?.location?.name || "неизвестно"} arrow={'>'}/>
          </div>
        </div>
        <div className={s.episoge}>
          <h2 className={s.main_info_title}>Episodes</h2>
          <div className={s.episode__info}>
            {episode.map((ep) => (
              <CharacterEpisodeInfo
                key={ep.id}
                origin={ep.episode}
                name={ep.name}
                date={ep.air_date}
                img={">"}
                id={ep.id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Character;
