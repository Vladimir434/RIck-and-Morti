/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Back from "../../../assets/arrow.svg";

import s from "./icon.module.css";
const Icon = ({ name, dateNeme, dateInfo, episodeName, episodeInfo, url}) => {
  return (
    <div className={s.main_wrapper}>
      <div className={s.main_cont}>
        <Link className={s.back} to={url}>
          <img src={Back} alt="неполадки" />
          GO BACK
        </Link>

        <h1 className={s.name}>{name}</h1>
        <div className={s.info}>
          <div className={s.date}>
            <p>{dateNeme}</p>
            <p>{dateInfo}</p>
          </div>
          <div className={s.episode}>
            <p>{episodeName}</p>
            <p>{episodeInfo}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Icon;
