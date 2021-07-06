import React, { useState } from 'react'
import "./App.css"
import Sidebar from './Sidebar'
import Chat from './Chat'
import {BrowserRouter as Router ,Switch,Route} from "react-router-dom"
import Login from './Login'
import { useStateValue } from './StateProvider'
function App() {
  const [{user},dispatch]=useStateValue()
  return (
    <div className="app">

      {
        !user?(
          <Login/>

        ):(
          <div className="app__body">
          <Router>
            <Switch>
            
            <Route path="/rooms/:roomid">
           
              <Sidebar/>
              <Chat />
            </Route>
            
              <Route path="/">

       
              <Sidebar/>
              <img className="app__image" src="https://www.vidpaw.com/img/blog/whatsapp-connection.jpg"/>
              </Route>
            </Switch>
   
          </Router>
        
        </div>
        )
      }
     

    </div>
  )
}

export default App
