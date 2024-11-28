import { Route, Routes } from 'react-router-dom'
import './App.css'
import PageEpisodes from './components/apisodes/page-episodes'
import Header from './components/header/header'
import MainChatacters from './components/main-characters/main-chatacters'
import Character from './components/character/character'
import PageEpisodeDetails from './components/apisodeDetails/pageEpisodeDetails'
import LocationPage from './components/location/location-page'

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='*' element={<h1>404 erroe...</h1>}/>
      <Route path='/' element={<MainChatacters/>}/>
      <Route path='/episode' element={<PageEpisodes/>}/>
      <Route path='/character/:id' element={<Character/>}/>
      <Route path='/episodedetails/:id' element={<PageEpisodeDetails/>}/>
      <Route path='/locations' element={<LocationPage/>}/>
    </Routes>
    </>
  )
}

export default App
