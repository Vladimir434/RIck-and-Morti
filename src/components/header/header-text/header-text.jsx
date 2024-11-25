import { Link } from 'react-router-dom'
import s from '../header-text/header-text.module.css'
const HeaderText = () => {
  return (
    <div className={s.header__nav}>
      
      <Link to="/">Персонажи</Link>
      <Link to="/location">Места</Link>
      <Link to="/episode">Эпизоды</Link>
    </div>
  )
}

export default HeaderText