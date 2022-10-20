
import './App.css';
import React, { useEffect, useState, useContext } from 'react';
import useFetch from "./Hooks/useFetch.js";
import useFacelocation from './Hooks/useFacelocation';
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
import {StateContext} from './Context/StateContext';


/////STARTED PARTICLES BACKGROUND//////
const particlesInit = async (main) => {
 // console.log(main);
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

function App() {

  const [route, setRoute] = useState("signin");//creamos el estado de route
  const [isSignedIn, setIsSignedIn]=useState(false);
  const [user, setUser]=useState({});

  //SETTING THE STATE BOX//////////
  const [box, setBox] = useState({});
  /*const displayFacebox = (boxData) => {
    // this.setState({ box: boxData });
    setBox(boxData);
  }*/

  //CALCULATE FACE LOCATION(BOX) ////////////
 /* const FaceLocation = async (data) => {
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
  }*/

  ////////////////INPUT ////////////  
  const [input, setInput] = useState("");

  /////////BUTTON PRINCIPAL PAGE///////////////////
  const [imageUrl, setImageUrl] = useState("");
  const {data} = useFetch(imageUrl);
  //const {box:boxlocation} = useFacelocation(data);
  /*const onButtonChange = async () => {
    await imageset()

    displayFacebox(FaceLocation(data));
  }
  const imageset = async () => {
    setImageUrl(input);
    console.log("Image set")
  }*/
  //    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
  //     .then(response => response.json())
  //     .then(result =>displayFacebox(FaceLocation(result)))
  //     .catch(error => console.log('error', error));

  ////////Context APP//////////
  let Context_value={
    route:{
      route,
      setRoute
    },
    login:{
      isSignedIn,
      setIsSignedIn
    },
    usuario:{
     user,
     setUser
    },
    
    img:{
      input,
      setInput,
      imageUrl,
      setImageUrl,
      box,
      setBox,
      data
    }
  }
  ////////////////RENDER PRINCIPAL PAGE///////////////////

  return (
    <div className="App">
     <Particles options={Particlesconfig} init={particlesInit} />
      <StateContext.Provider value={Context_value}>
        <Navigator  />

        {route === "signin"
          ? <Signin />
          : (route === "home"
            ? <div>
              <Logo />
              <Rank />
              <ImageLinkForm  />
              <FaceRecognition />
            </div>
            : <Register/>
          )
        }
      </StateContext.Provider>
    </div>
  );

}
export default App;
