import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './pages/header/Header'
import WatchList from './components/watchList/WatchList'
import Watched from './components/watched/Watched'
import Add from './components/add/Add'
import GlobalProvider from './components/contexts/GlobalContext'

function App() {

  return (
    <HashRouter >
    <GlobalProvider >
      <Header />
      <Routes>
          <Route path='/' element={<WatchList />}/>
          <Route path='/watched' element={<Watched />}/>
          <Route path='/add' element={<Add />}/>
      </Routes>
    </GlobalProvider>
    </HashRouter>
  )
}

export default App
