import AficheCharacters from "../afiche-characters/afiche-characters"
import Afiche from '../../assets/afiche.svg'
import CardList from "../card__list/card__list_characters"

const MainChatacters = () => {
  return (
    <>
      <AficheCharacters urlAfiche={Afiche}/>
      <CardList/>
    </>
  )
}

export default MainChatacters