import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ImageURL, box}) => {

    return(
        <div className="center boxIMG">
                <div className="absolute mt2 ">
                    <img 
                    id="ImageInput"
                    className=" ba b--dashed bw2 b--orange pa1" 
                    width="300px"
                    heigth="auto"
                    alt="ImgFacerecognition" 
                    src= {ImageURL}/>
                    <div className="face_box" style={{top: box.top_row, bottom: box.bottom_row, left: box.left_Column, right: box.right_Column}}>
                    </div>
                </div>
        </div>
    );
}
export default FaceRecognition;