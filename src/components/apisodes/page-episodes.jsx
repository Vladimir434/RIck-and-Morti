import AficheCharacters from "../afiche-characters/afiche-characters"
import Afiche_episodes from '../../assets/rick-and-morty-episodes.svg'
import Episodes from "./card-list-apisodes/episodes"

const PageEpisodes = () => {
  return (
    <>
      <AficheCharacters urlAfiche={Afiche_episodes}/>
      <Episodes/>
    </>
  )
}

export default PageEpisodes