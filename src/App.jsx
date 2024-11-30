import { Route, Routes } from 'react-router-dom'
import './App.css'
import PageEpisodes from './components/apisodes/page-episodes'
import Header from './components/header/header'
import MainChatacters from './components/main-characters/main-chatacters'
import Character from './components/character/character'
import PageEpisodeDetails from './components/apisodeDetails/pageEpisodeDetails'
import { userContext } from '../contaxt/userContext'
import { useState } from 'react'
import Location from './components/locations/location/location'
import LocationPage from './components/locations/locations-page'

function App() {
  const [data, setData] = useState([])
  const providerData = {
    onChange: setData,
    ptoducts:data
  }
  return (
    <>
    <Header/>
    <userContext.Provider value={providerData}>
    <Routes>
      <Route path='*' element={<h1>404 erroe...</h1>}/>
      <Route path='/' element={<MainChatacters/>}/>
      <Route path='/episode' element={<PageEpisodes/>}/>
      <Route path='/character/:id' element={<Character/>}/>
      <Route path='/episodedetails/:id' element={<PageEpisodeDetails/>}/>
      <Route path='/locations' element={<LocationPage/>}/>
      <Route path='/location/:id' element={<Location/>}/>
    </Routes>
    </userContext.Provider>
    </>
  )
}

export default App
