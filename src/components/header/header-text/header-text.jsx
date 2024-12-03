import { Link } from 'react-router-dom'
import s from '../header-text/header-text.module.css'
import { useState } from 'react'
import Menu1 from '../../../assets/menu1.svg'
import Menu2 from '../../../assets/menu2.svg'

const HeaderText = () => {
  const [isMenu,setIsMenu] = useState(false)

  const toggleMenu = () => {
    setIsMenu(!isMenu)
  }
  return (
    <>
    <div className={s.header__nav}>
      <Link to="/">Персонажи</Link>
      <Link to="/locations">Места</Link>
      <Link to="/episode">Эпизоды</Link>
    </div>
    <img className={s.header__nav__img} onClick={toggleMenu} src={isMenu ? Menu1 : Menu2} alt="" />
{isMenu && (
  <div  className={s.header__nav__adaptiv}>
    <div  className={s.header__nav__adaptiv__wrapper}>
     <Link to={'/'} className={s.header__nav__adaptiv__link}  onClick={toggleMenu}>Characters</Link>
     <Link to={'/locations'} className={s.header__nav__adaptiv__link}  onClick={toggleMenu}>Locations</Link>
     <Link to={'/episode'} className={s.header__nav__adaptiv__link}  onClick={toggleMenu}>Episodes</Link>
    </div>
  </div>
)}
</>
  )
}

export default HeaderText