/* eslint-disable react/prop-types */
import s from '../afiche-characters/afiche-characters.module.css'

const AficheCharacters = ({urlAfiche}) => {
  return (
    <div className={s.afiche}>
      <img src={urlAfiche} alt="что-то не так" />
    </div>
  )
}

export default AficheCharacters