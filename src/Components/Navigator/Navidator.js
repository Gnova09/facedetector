import React from "react";

const Navidator = ({isSignedIn,onRouteChange}) =>{
    if(isSignedIn){
        return(
            <div className="" style={{display: "flex", justifyContent: "flex-end"}}>
                <p
                 onClick={()=>onRouteChange("signin")} //We make onRouteChange into a function, for no running with  render()
                 className="white f3 link dim black underline pa3 pointer"
                 >Sign out</p>
            </div>
        );
    }else{
        return(
            <div className="" style={{display: "flex", justifyContent: "flex-end"}}>
                <p
                 onClick={()=>onRouteChange("signin")} //We make onRouteChange into a function, for no running with  render()
                 className="white f3 link dim black underline pa3 pointer"
                 >Sign In</p>
                 <p
                 onClick={()=>onRouteChange("register")} //We make onRouteChange into a function, for no running with  render()
                 className="white f3 link dim black underline pa3 pointer"
                 >Register</p>
            </div>
        );
    }
    
}
export default Navidator;