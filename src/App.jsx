import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import YesButton from './components/YesButton'
import Counter from './components/Counter.jsx'
import NoButton from './components/NoButton.jsx'
import Header from './components/Header.jsx'
import './index.css'
function App() {
  const [count, setCount] = useState(0)

  return (
<div className="flex flex-col justify-center items-center h-screen w-screen bg-gradient-to-br from-pink-200 via-rose-100 to-pink-300">
  <Header text="Shavya, will you marry me?" />
<div>
    <YesButton />
  <NoButton />
</div>
</div>


   

   
  )
}

export default App
