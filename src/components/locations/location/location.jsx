import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import s from "./location.module.css";
import Icon from "../../apisodeDetails/episodeIcon/icon";

const Location = () => {
  const param = useParams();
  const [character, setCharacter] = useState([]);
  const [locationData, setLocatijnData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetch(
          `https://rickandmortyapi.com/api/location/${param.id}`
        );
        const resultJson = await result.json();
        setLocatijnData(resultJson);
        console.log(resultJson);

        const characterData = await Promise.all(
          resultJson.residents.map((url) =>
            fetch(url).then((res) => res.json())
          )
        );

        setCharacter(characterData);
      } catch (error) {
        console.error("Erroe", error);
      }
    };

    getData();
  }, [param.id]);
  return (
    <>
      {locationData && (
        <Icon
          name={locationData.name}
          dateNeme={"Type"}
          dateInfo={locationData.type}
          episodeName={"Dimension"}
          episodeInfo={locationData.dimension}
          url={"/locations"}
        />
      )}
      <div className={s.main}>
        <h2 className={s.main_title}>Residents</h2>
        {character.length === 0 ? (
        <h1>Loading...</h1>
        ) : (

          <div className={s.card_list}>
          {character.map((character) => (
            <div className={s.card_item} key={character.id}>
              <img src={character.image} alt={character.name} />
              <div className={s.text}>
              <h2>{character.name}</h2>
              <h2>{character.species}</h2>
              </div>
            </div>
          ))}
        </div>
        )} 
      </div>
    </>
  );
};

export default Location;
