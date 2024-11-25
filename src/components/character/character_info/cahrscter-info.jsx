/* eslint-disable react/prop-types */
import s from "./cahracter-info.module.css";

const CharacterInfo = ({ name, info }) => {
  return (
    <div className={s.information__text}>
      <p className={s.name}>{name}</p>
      <p className={s.info}>{info}</p>
    </div>
  );
};

export default CharacterInfo;
