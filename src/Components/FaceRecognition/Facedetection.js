import React from "react";


//PARAMETROS PARA PASAR AL FETCH
const USER_ID = 'bi5o8xa6ktoi';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = '51f2b73146a44bc3b182d69687d4c8cf';
const APP_ID = '75942c613a1344518ee944a0d22d03de';
const MODEL_ID = 'face-detection';
const MODEL_VERSION_ID = '45fb9a671625463fa646c3523a3087d5';
// Change this to whatever image URL you want to process
let IMAGE_URL2 = "";


///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

const raw = JSON.stringify({
    "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
    },
    "inputs": [
        {
            "data": {
                "image": {
                    "url": Url
                }
            }
        }
    ]
});

const requestOptions = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + PAT
    },
    body: raw
};
const FaceDetection = (Url) => {
    
    

     
    return(

        fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        
    );

}
export default FaceDetection;