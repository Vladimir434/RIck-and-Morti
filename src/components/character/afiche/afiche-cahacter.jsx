/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Back from "../../../assets/arrow.svg";
import s from "../afiche/afiche-character.module.css";
import { useContext } from "react";
import { userContext } from "../../../../contaxt/userContext";

const AficheCahacter = ({ img, name }) => {
  const provierDate = useContext(userContext)
  console.log(provierDate);
  
  return (
    <>
      <div className={s.logo_contaiber}>
        <div className={s.afiche}>
          <Link className={s.back} to={"/"}>
            <img  src={Back} alt="неполадки" />
            GO BACK
          </Link>
          <div className={s.image_wrapper}>

          <img className={s.image} src={img} alt="неполадки" />
          </div>
          <h1 className={s.name}>{name}</h1>
        </div>
      </div>
    </>
  );
};

export default AficheCahacter;
