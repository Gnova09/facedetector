
import './App.css';
import React, { useEffect, useState } from 'react';
import useFetch from "./Hooks/useFetch.js";
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



/////STARTED PARTICLES BACKGROUND//////
const particlesInit = async (main) => {
  console.log(main);
  await loadFull(main);
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       input: "",
//       imageUrl: "",
//       box: {},
//       route: "signin",
//       isSignedIn: false
//     }
//   }

function App(){
  
  const [route,setRoute]=useState("signin");//creamos el estado de route

  //SETTING THE STATE BOX//////////
  const [box,setBox] = useState({});
  const displayFacebox = (boxData) => {
    // this.setState({ box: boxData });
    setBox(boxData);
  }

  ///////onRouteChange WITH A BUTTON//////////
  
  const [isSignedIn, setIsSigned] = useState(false);
  const onRouteChange= (route)=> {
    if(route === "home"){
      // this.setState({isSignedIn: true})
      setIsSigned(true);
    }else if(route === "signin"){ 
      // this.setState({isSignedIn: false})
      setIsSigned(false);
    }
    // this.setState({route: route})
    setRoute(route);
  }
  

  //CALCULATE FACE LOCATION(BOX) ////////////
  const FaceLocation = (data) => {
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

  ////////////////INPUT ////////////
  const [input, setInput] = useState(""); 
  const onInputChange = (event) => {
    // this.setState({ input: event.target.value });
    setInput(event.target.value);
    
  }

  /////////BUTTON PRINCIPAL PAGE///////////////////
  const [imageUrl,setImageUrl]=useState("");
  const [data,loading, error] = useFetch(imageUrl);
   
  const onButtonChange = async () => {
    
     setImageUrl(input);
    if (data!==null){
       displayFacebox(FaceLocation(data))
    }  
  }
 
    
  //    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
  //     .then(response => response.json())
  //     .then(result =>displayFacebox(FaceLocation(result)))
  //     .catch(error => console.log('error', error));


 ////////////////RENDER PRINCIPAL PAGE///////////////////
  
    return (
      <div className="App">
        <Particles options={Particlesconfig} init={particlesInit} />
        <Navigator isSignedIn={isSignedIn} onRouteChange={onRouteChange} />
        
        {route === "signin"
          ? <Signin onRouteChange={onRouteChange} />
          : ( route === "home" 
           ? <div>
            <Logo />
            <Rank />
            <ImageLinkForm onInputChange={onInputChange} onButtonChange={onButtonChange} />
            <FaceRecognition box={box} ImageURL={imageUrl} />
          </div>
          : <Register onRouteChange={onRouteChange} />
          )
        }

      </div>
    );
  
}
export default App;
