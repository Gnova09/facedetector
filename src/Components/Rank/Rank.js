import React,{useContext} from "react";
import { StateContext } from "../../Context/StateContext";


const Rank = () => {
    const { usuario } = useContext(StateContext);
    const {user}=usuario;
 
    return(
        <div>
            <div className="white f3">
                {`${user.name}, your current rank is...`}
            </div>
            <div className="white f3">
                {user.entries}
            </div>
          
        </div>
    );
}
export default Rank;