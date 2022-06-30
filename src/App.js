
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



//PARAMETROS PARA PASAR AL FETCH
const USER_ID = 'bi5o8xa6ktoi';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = '51f2b73146a44bc3b182d69687d4c8cf';
const APP_ID = '75942c613a1344518ee944a0d22d03de';
const MODEL_ID = 'face-detection';
const MODEL_VERSION_ID = '45fb9a671625463fa646c3523a3087d5';
// Change this to whatever image URL you want to process
var IMAGE_URL2 = "";


///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

var raw = JSON.stringify({
    "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
    },
    "inputs": [
        {
            "data": {
                "image": {
                    "url": IMAGE_URL2
                }
            }
        }
    ]
});

var requestOptions = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + PAT
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
      IMAGE_URL: "",
    }
  }

  //funcion para input y button
  onInputChange = (event) => {
    this.setState({input: event.target.value});
    console.log(this.state.input);
  }
  

  onButtonChange= ()=>{
    this.setState({IMAGE_URL: this.state.input});
    IMAGE_URL2 = this.state.IMAGE_URL;
    
    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
        .then(response => response.json())
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
        <FaceRecognition ImageURL = {this.state.IMAGE_URL}/>
      </div>
    );
  }  
}

export default App;
