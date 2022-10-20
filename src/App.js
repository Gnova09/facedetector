
import './App.css';
import React, {  useState } from 'react';
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
import {StateContext} from './Context/StateContext';


/////STARTED PARTICLES BACKGROUND//////
const particlesInit = async (main) => {

  await loadFull(main);
};

function App() {

  const [route, setRoute] = useState("signin"); //creamos el estado de route
  const [isSignedIn, setIsSignedIn]=useState(false);
  const [user, setUser]=useState({});

  //SETTING THE STATE BOX//////////
  const [box, setBox] = useState({});
 
  ////////////////INPUT ////////////  
  const [input, setInput] = useState("");

  /////////BUTTON PRINCIPAL PAGE///////////////////
  const [imageUrl, setImageUrl] = useState("");
  const {data} = useFetch(imageUrl);
 
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
