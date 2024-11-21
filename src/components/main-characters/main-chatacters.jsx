import AficheCharacters from "../afiche-characters/afiche-characters"
import CardList from "../card__list/card__list"
import Afiche from '../../assets/afiche.svg'

const MainChatacters = () => {
  return (
    <>
      <AficheCharacters urlAfiche={Afiche}/>
      <CardList/>
    </>
  )
}

export default MainChatacters