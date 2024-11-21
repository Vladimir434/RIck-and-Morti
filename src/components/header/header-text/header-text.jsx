import s from '../header-text/header-text.module.css'
const HeaderText = () => {
  return (
    <div className={s.header__nav}>
      <a href="#">Персонажи</a>
      <a href="#">Места</a>
      <a href="#">Эпизоды</a>
    </div>
  )
}

export default HeaderText