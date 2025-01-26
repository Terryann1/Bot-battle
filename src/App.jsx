import { useState } from 'react'
import './App.css'
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import './styles/main.css';

function App() {

  return(
    <div>
        <BotCollection/>
        <YourBotArmy/>  
    </div>
    

  )
}

export default App
