
import './App.css';
import React, { useCallback } from 'react';
import Navigator from "./Components/Navigator/Navidator";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Particlesconfig from "./Components/Particles/Particlesconfig.json";
import Logo from "./Components/Logo/Logo";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import Rank from './Components/Rank/Rank';

function App() {

  const particlesInit = useCallback(main => {
    loadFull(main);
  }, []);

  return (
    <div className="App">
      <Particles options={Particlesconfig} init={particlesInit}/>
      <Navigator/>
      <Logo/>
      <Rank/>
      <ImageLinkForm/>
      
      {/*<FaceRecognition/>*/}
    </div>
  );
}

export default App;
