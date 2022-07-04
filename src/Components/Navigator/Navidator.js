import React from "react";

const Navidator = ({onRouteChange}) =>{
    return(
        <div className="" style={{display: "flex", justifyContent: "flex-end"}}>
            <p
             onClick={()=>onRouteChange("signin")} //We make onRouteChange into a function, for no running with  render()
             className="white f3 link dim black underline pa3 pointer"
             >Sign out</p>
        </div>
    );
}
export default Navidator;