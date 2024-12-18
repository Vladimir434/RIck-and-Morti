/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import s from "./cahracter-info.module.css";

const CharacterInfo = ({ name, info, arrow, id }) => {
  return (
    <div className={s.information__text}>
      <div className={s.info_text}>
        <p className={s.name}>{name}</p>
        <p className={s.info}>{info}</p>
      </div>
      <Link to={`/location/${id}`}>{arrow}</Link>
    </div>
  );
};

export default CharacterInfo;
