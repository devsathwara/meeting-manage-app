import { useState } from 'react'
import './css/App.css'
import Nav from './components/nav'
import { Route,Routes } from 'react-router-dom'
import UpcomingMeeting from './pages/UpcomingMeeting'
import NotFound from './pages/NotFound'
import PastMeeting from './pages/PastMeeting'
import AddMeeting from './pages/AddMeeting'
import Home from './pages/HOme'
function App() {

  return (
    <>
    <div className="App">
      <Nav />
      <Routes>

<Route path='/' element={<Home/>}/>
<Route path='/upcoming-meeting' element={<UpcomingMeeting/>}/>
<Route path='/past-meeting' element={<PastMeeting/>}/>
<Route path='/add-meeting' element={<AddMeeting/>}/>
<Route path='*' element={<NotFound/>}/>
</Routes>
      {/* <div className="head">
   <img src={meetingimg} className='meetingimg' />
      </div>
      <h1 class="gradient-text">Organize all your Meetings in One place </h1> */}
      
    
    </div>
    </>
   
  )
}

export default App
