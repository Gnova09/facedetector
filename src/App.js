
import './App.css';
import Navigator from "./Components/Navigator/Navidator";
import Logo from "./Components/Logo/Logo";
import ParticlesBackground from './Components/Particles/ParticlesBackground';
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import Rank from './Components/Rank/Rank';

function App() {
  return (
    <div className="App">
      <ParticlesBackground/>
      <Navigator/>
      <Logo/>
      <Rank/>
      <ImageLinkForm/>
      {/*<FaceRecognition/>*/}
    </div>
  );
}

export default App;
