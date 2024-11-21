import { useState, useEffect } from "react";
import s from "./card__list.module.css";
import Select from "../select/select";
import Sersh from '../../assets/sersh.svg'

const CardList = () => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [name, setName] = useState('')
  const [species, setSpecies] =useState('');
  const [page, setPage] = useState(1)

  const handleFilterChange = (value,setter) => {
    setter(value)
    setPage(1)
  }


  useEffect(() => {
    const getData = async () => {
      try {
        setIsError(false);
        const result = await fetch(
          `https://rickandmortyapi.com/api/character/?gender=${gender}&status=${status}&name=${name}&species=${species}&page=${page}`
        );
        if (!result.ok) {
          return setIsError(true);
        }
        const resultJson = await result.json();
        console.log(resultJson);

        setData(resultJson.results);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
      setIsLoading(false);
    };
    getData();
  }, [gender,status,name,species,page]);
  if (isLoading) {
    return <h1>IS loading...</h1>;
  }

  return (
    <>
      <div className={s.container__nav}>
        <div className={s.containet__navigation}>
          <img src={Sersh} alt="" />
          <input type="text"  placeholder="Фильтрация по имени" onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className={s.containet__navigation}>
        <Select onHendleChange={(value) => handleFilterChange(value,setSpecies)} option={[{value:'',label: 'Раса'},{value: 'human', label: 'Human'},{value:'alien' ,label:'Alien'},{value:'humanoid' ,label:'Humanoid'}]}/>
        </div>
        <div className={s.containet__navigation}>
        <Select onHendleChange={(value) => handleFilterChange(value,setGender)} option={[{value:'',label: 'Гендер'},{value: 'male', label: 'Male'},{value:'female' ,label:'Female'},{value:"genderless", label:'genderless'}]}/>
        </div>
        <div className={s.containet__navigation}>
        <Select onHendleChange={(value) => handleFilterChange(value,setStatus)} option={[{value:'',label:'Статус'},{value:'alive',label:'Alive'},{value:'dead',label:'Dead'}]}/>
        </div>
      </div>
      <div className={s.card__list}>
        {isError ? (
          <h1>Error...</h1>
        ) : (
          data.map((item, index) => (
            <div className={s.card__item} key={index}>
              <img src={item.image} alt={item.name} />
              <h2 className={s.name}>{item.name}</h2>
              <h2 className={s.species}>{item.species}</h2>
            </div>
          ))
        )}
        ;
      </div>
      <button className={s.loat__more} onClick={() => setPage(page+1)}>loat more...</button>
    </>
  );
};

export default CardList;
