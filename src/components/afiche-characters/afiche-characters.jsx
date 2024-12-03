/* eslint-disable react/prop-types */
import s from '../afiche-characters/afiche-characters.module.css'

const AficheCharacters = ({urlAfiche}) => {
  return (
    <div className={s.icon_wrapper}>
    <div className={s.afiche}>
      <img src={urlAfiche} alt="что-то не так" />
    </div>
    </div>
  )
}

export default AficheCharacters