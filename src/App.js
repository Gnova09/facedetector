
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
import Signin from './Components/Signin/signin';
import Register from './Components/Register/Register';


//PARAMETROS PARA PASAR AL FETCH
const USER_ID = 'bi5o8xa6ktoi';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = '51f2b73146a44bc3b182d69687d4c8cf';
const APP_ID = '75942c613a1344518ee944a0d22d03de';
const MODEL_ID = 'face-detection';
const MODEL_VERSION_ID = '45fb9a671625463fa646c3523a3087d5';

/////STARTED PARTICLES BACKGROUND//////
const particlesInit = async (main) => {
  console.log(main);
  await loadFull(main);
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box: {},
      route: "signin",
      isSignedIn: false
    }
  }

  //SETTING THE STATE BOX//////////
  displayFacebox = (boxData) => {
    this.setState({ box: boxData });
  }

  ///////onRouteChange WITH A BUTTON//////////
  onRouteChange= (route)=> {
    if(route === "home"){
      this.setState({isSignedIn: true})
    }else if(route === "signin"){ 
      this.setState({isSignedIn: false})
    }
    this.setState({route: route})
  }
  

  //CALCULATE FACE LOCATION(BOX) ////////////
  FaceLocation = (data) => {
    const faceDataLocation = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("ImageInput");
    const img_width = Number(image.width);
    const img_height = Number(image.height);
    console.log(img_width, img_height, faceDataLocation)

    return {
      left_Column: (faceDataLocation.left_col * img_width),
      right_Column: (img_width - (faceDataLocation.right_col * img_width)),
      bottom_row: (img_height - (faceDataLocation.bottom_row * img_height)),
      top_row: (faceDataLocation.top_row * img_height),
    }
  }

  ////////////////INPUT & BUTTON PRINCIPAL PAGE///////////////////
  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onButtonChange = async () => {
    await this.setState({ imageUrl: this.state.input });

    const raw = JSON.stringify({
      "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
      },
      "inputs": [
        {
          "data": {
            "image": {
              "url": this.state.imageUrl
            }
          }
        }
      ]
    });

    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + PAT
      },
      body: raw
    };

    await fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
      .then(response => response.json())
      .then(result => this.displayFacebox(this.FaceLocation(result)))
      .catch(error => console.log('error', error));
  }


 ////////////////RENDER PRINCIPAL PAGE///////////////////
  render() {
    const { imageUrl,isSignedIn, box, route} = this.state;
    return (
      <div className="App">
        <Particles options={Particlesconfig} init={particlesInit} />
        <Navigator isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        
        {route === "signin"
          ? <Signin onRouteChange={this.onRouteChange} />
          : ( route === "home" 
           ? <div>
            
            <Logo />
            <Rank />
            <ImageLinkForm onInputChange={this.onInputChange} onButtonChange={this.onButtonChange} />
            <FaceRecognition box={box} ImageURL={imageUrl} />
          </div>
          : <Register onRouteChange={this.onRouteChange} />
          )
        }

      </div>
    );
  }
}

export default App;
