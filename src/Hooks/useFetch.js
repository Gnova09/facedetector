import { useEffect, useState } from "react";



export default function useFetch(imageUrl) {


  //PARAMETROS PARA PASAR AL FETCH
  const USER_ID = 'bi5o8xa6ktoi';
  // Your PAT (Personal Access Token) can be found in the portal under Authentification
  const PAT = '51f2b73146a44bc3b182d69687d4c8cf';
  const APP_ID = '75942c613a1344518ee944a0d22d03de';
  const MODEL_ID = 'face-detection';
  const MODEL_VERSION_ID = '45fb9a671625463fa646c3523a3087d5';
  const urlclarifai = "https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs";

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const raw = JSON.stringify({
    "user_app_id": {
      "user_id": USER_ID,
      "app_id": APP_ID
    },
    "inputs": [
      {
        "data": {
          "image": {
            "url": imageUrl
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

  useEffect(() => {
    
    

   
      setLoading(true);
       fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
        .then(response => response.json())
        .then(result => setData(result))
        .catch(error => setError(error))
        .finally(setLoading(false))
    
     
            
    
      
  },[imageUrl]);

  return [data, loading, error ];
}

