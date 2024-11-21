import Logo from "../../assets/logo.svg";
import HeaderText from "./header-text/header-text";
import s from "./header.module.css";

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.header__wrapper}>
        <img src={Logo} alt="" />
        <HeaderText />
      </div>
    </div>
  );
};

export default Header;
