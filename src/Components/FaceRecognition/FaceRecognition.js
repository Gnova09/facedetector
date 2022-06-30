import React from "react";

const FaceRecognition = ({ImageURL}) => {

    return(
        <div className="center">
                <img 
                className="w-30 ba b--dashed bw2 b--orange pa1"
                alt="ImgFacerecognition" 
                src= {ImageURL}/>
        </div>
    );
}
export default FaceRecognition;