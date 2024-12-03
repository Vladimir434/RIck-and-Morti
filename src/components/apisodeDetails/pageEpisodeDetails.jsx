import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Icon from "./episodeIcon/icon";
import s from './pageEpisodeDetail.module.css'
import CardItem from "./card-tem/card-item";

const PageEpisodeDetails = () => {
  const param = useParams();
  const [episode, setEpisode] = useState(null);
  const [characters, setCharacter] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await fetch(
        `https://rickandmortyapi.com/api/episode/${param.id}`
      );
      const dataJson = await result.json();
      setEpisode(dataJson);
      console.log(dataJson);
      const charactersData = await Promise.all(
        dataJson.characters.map((url) => fetch(url).then((res) => res.json()))
      );
      setCharacter(charactersData);
    };
    getData();
  }, [param.id]);
  if (!episode) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
    <Icon name={episode.name} episodeName={'Episode'} episodeInfo={episode.episode} dateNeme={'Date'} dateInfo={episode.air_date} url={'/episode'}/>
      <div className={s.main}>
        <h2 className={s.main_title}>Cast</h2>
        <div className={s.card_list}>
          {characters.map((character) => (
              <CardItem key={character.id} image={character.image} name={character.name} species={character.species}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default PageEpisodeDetails;
