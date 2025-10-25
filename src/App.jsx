import { useState } from 'react';
import oliveyaGif from './assets/oliveya.gif';
import YesButton from './components/YesButton';
import NoButton from './components/NoButton.jsx';
import Header from './components/Header.jsx';
import './index.css';
function App() {
  const [showGif, setShowGif] = useState(false);

  const handleYesClick = () => setShowGif(true);


//   return (

// <div className="flex flex-col justify-center items-center h-screen w-screen bg-gradient-to-br from-pink-200 via-rose-100 to-pink-300 gap-8">
//   {showGif && (
//         <img src={src/assets/oliveya.gif} alt="Love GIF" className="mt-4 w-64 h-64 object-contain" />
//       )}

//   <Header text="Shavya do you want to talk to me?" />
// <div className="flex flex-row gap-4 items-center">
//     <YesButton onClick={handleYesClick} />
//   <NoButton />
// </div>
// </div>
//   )

return (
    <div className="flex flex-col justify-center items-center h-screen w-screen" style={{
  background: 'linear-gradient(to bottom right, #fce7f3 0%, #fae8ff 50%, #ede9fe 100%)'
}}>
      {showGif && (
        <img
          src={oliveyaGif}
          alt="Love GIF"
          className="mt-4 w-64 h-64 object-contain opacity-0 animate-fade-in"
        />
      )}

      <Header text="Shavya do you want to talk to me?" />
      <div className="flex flex-row gap-4 items-center">
        <YesButton onClick={handleYesClick} />
        <NoButton />
      </div>
    </div>
  );

}

export default App