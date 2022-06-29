
import './App.css';
import React, { Component } from 'react';
import Navigator from "./Components/Navigator/Navidator";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Particlesconfig from "./Components/Particles/Particlesconfig.json";
import FaceRecognition from "./Components/FaceRecognition/FaceRecognition";
import Logo from "./Components/Logo/Logo";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import Rank from './Components/Rank/Rank';



//API KEY For Clarifai
const raw = JSON.stringify({
  "user_app_id": {
      "user_id": "clarifai",
      "app_id": "main"
  },
"inputs": [
  {
    "data": {
      "image": {
        "url": "https://samples.clarifai.com/metro-north.jpg"
      }
    }
  }
]
});

const requestOptions = {
method: 'POST',
headers: {
  'Accept': 'application/json',
  'Authorization': 'Key 51f2b73146a44bc3b182d69687d4c8cf'
},
body: raw
};

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
    fetch("https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  }
 
  render(){
    return (
      <div className="App">
        <Particles options={Particlesconfig} init={particlesInit}/>
        <Navigator/>
        <Logo/>
        <Rank/>
        <ImageLinkForm onInputChange={this.onInputChange} onButtonChange={this.onButtonChange}/>  
        <FaceRecognition/>
      </div>
    );
  }  
}

export default App;
