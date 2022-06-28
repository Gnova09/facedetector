
import './App.css';
import React, { Component } from 'react';
import Navigator from "./Components/Navigator/Navidator";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Particlesconfig from "./Components/Particles/Particlesconfig.json";
import Logo from "./Components/Logo/Logo";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import Rank from './Components/Rank/Rank';


//aqui es donde se inicilizan las particulas
const particlesInit = async (main) => { 
  console.log(main);
  await loadFull(main);
};

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: "",
    }
  }
  //funcion para input y button
  onInputChange(event){
    console.log(event.target.value);
  }
  onButtonChange(event){
    console.log("Click");
  }
 
  render(){
    return (
      <div className="App">
        <Particles options={Particlesconfig} init={particlesInit}/>
        <Navigator/>
        <Logo/>
        <Rank/>
        <ImageLinkForm onInputChange={this.onInputChange} onButtonChange={this.onButtonChange}/>  
        {/*<FaceRecognition/>*/}
      </div>
    );
  }  
}

export default App;
