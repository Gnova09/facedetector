import React,{useContext} from "react";
import { StateContext } from "../../Context/StateContext";

const Navidator = () =>{
    const { route,login, img,usuario } = useContext(StateContext);
    const {setRoute}=route;
    const{setUser}=usuario;
    const {isSignedIn,setIsSignedIn}=login;
    const {setBox,setImageUrl,setInput}=img;

    const handleSingOut=() =>{
        setBox({});
        setUser({})
        setImageUrl("")
        setInput("")
        setIsSignedIn(false);
        setRoute("signin")
    }
    if(isSignedIn){
        return(
            <div className="" style={{display: "flex", justifyContent: "flex-end"}}>
                <p
                 onClick={handleSingOut} //We make onRouteChange into a function, for no running with  render()
                 className="white f3 link dim black underline pa3 pointer"
                 >Sign out</p>
            </div>
        );
    }else{
        return(
            <div className="" style={{display: "flex", justifyContent: "flex-end"}}>
                <p
                 onClick={()=>setRoute("signin")} //We make onRouteChange into a function, for no running with  render()
                 className="white f3 link dim black underline pa3 pointer"
                 >Sign In</p>
                 <p
                 onClick={()=>setRoute("register")} //We make onRouteChange into a function, for no running with  render()
                 className="white f3 link dim black underline pa3 pointer"
                 >Register</p>
            </div>
        );
    }
    
}
export default Navidator;