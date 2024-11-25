/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Back from "../../../assets/arrow.svg";
import s from "../afiche/afiche-character.module.css";

const AficheCahacter = ({ img, name }) => {
  return (
    <>
      <div className={s.logo_contaiber}>
        <div className={s.afiche}>
          <Link className={s.back} to={"/"}>
            <img  src={Back} alt="неполадки" />
            GO BACK
          </Link>
          <img className={s.image} src={img} alt="неполадки" />
          <h1 className={s.name}>{name}</h1>
        </div>
      </div>
    </>
  );
};

export default AficheCahacter;
