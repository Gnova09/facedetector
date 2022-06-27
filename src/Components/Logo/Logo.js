import React from "react";
import Tilt from 'react-parallax-tilt';
import cerebro from "./cerebro.png";

const Logo = () =>{

    return(
        <div className="ma4 mt0" style={{display: "flex", justifyContent: "flex-start"}}>
           <Tilt className="Tilt" options={{ max : 45 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner br2 shadow-2"> <img alt="logo" src={cerebro}/></div>
            </Tilt>
        </div>
    );
}
export default Logo;