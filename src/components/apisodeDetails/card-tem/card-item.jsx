/* eslint-disable react/prop-types */
import s from './card-item.module.css'
const CardItem = ({image, name, species}) => {
  return (
    <div className={s.item}>
      <img src={image} alt="" />
      <div className={s.info}>
        <p className={s.name}>{name}</p>
        <p className={s.species}>{species} </p>
      </div>
    </div>
  )
}

export default CardItem