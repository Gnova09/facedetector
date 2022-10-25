import { useEffect, useState } from "react";
export default function useFetch(imageUrl) {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "url": imageUrl
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    setLoading(true);
    new Promise(async (resolve, reject) => {
      await fetch("http://localhost:3000/ImageURL", requestOptions)
        .then(response => response.json())
        .then(result => { resolve(setData(result)) })
        .catch(error => reject(setError(error)))
        .finally(setLoading(false))

    })
    /*  fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
     .then(response => response.json())
     .then(result => setData(result))
     .catch(error => setError(error))S
     .finally(setLoading(false)) */

  }, [imageUrl]);


  return { data, loading, error };
}

