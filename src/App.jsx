import { StrictMode, React } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Title from './pages/Title.jsx'
import Intro from './pages/Intro.jsx'
import BuildABot from './pages/BuildABot.jsx'

function App() {
  return (
    <div className="w-screen h-screen min-w-170 min-h-125">
      <Routes>
        <Route path="/" element={<Title/>}/>
        <Route path="/intro" element={<Intro/>}/>
        <Route path="/custom" element={<BuildABot/>}/>
      </Routes>
    </div>
  );
};
export default App;
