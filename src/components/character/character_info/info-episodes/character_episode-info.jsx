/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import s from './character_episode-info.module.css'

const CharacterEpisodeInfo = ({name,origin,date,img,id}) => {
  
  return (
    <Link className={s.episodes} to={`/episodedetails/${id}`}>
        <div className={s.episode_text}>
          <h3 className={s.origin}>{origin}</h3>
          <h3 className={s.name}>{name}</h3>
          <h3 className={s.date}>{date}</h3>
        </div>
        <p>{img}</p>
    </Link>
  )
}

export default CharacterEpisodeInfo