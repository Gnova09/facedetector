import React, { useContext } from "react";
import { StateContext } from "../../Context/StateContext";

const ImageLinkForm = () => {
    const { img, usuario } = useContext(StateContext);
    const { input, setInput, setImageUrl, setBox } = img
    const { user, setUser } = usuario;


    const handlebutton = async () => {
        setImg();
        fetch(`http://localhost:3000/Image/${user.email}`)
            .then(response => response.json())
            .then(entrie => setUser({ ...user, entries: entrie.entries }))

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "url": input
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        await fetch("http://localhost:3000/ImageURL", requestOptions)
            .then(response => response.json())
            .then(result => { FaceLocation(result) })


    }
    const setImg = async () => {
        await setImageUrl(input);
        console.log("Image Set")
    }

    const FaceLocation = async (data) => {

        const faceDataLocation = data.regions[0].region_info.bounding_box;
        const image = document.getElementById("ImageInput");
        const img_width = Number(image.width);
        const img_height = Number(image.height);
        //console.log(img_width, img_height, faceDataLocation)

        setBox(
            {
                left_Column: (faceDataLocation.left_col * img_width),
                right_Column: (img_width - (faceDataLocation.right_col * img_width)),
                bottom_row: (img_height - (faceDataLocation.bottom_row * img_height)),
                top_row: (faceDataLocation.top_row * img_height)
            }
        );

    }
    return (
        <div className="">
            <p>This Magic Brain will detect faces in your pictures. Git it a try.</p>
            <div>
                <div className="pa4 br3 shadow-2">
                    <input classname=" f4 pa2 w-70" type="text" onChange={(e) => setInput(e.target.value)} />
                    <button className=" ml1 ba b--white br2 grow ph3 white pv2 bg-gray"
                        onClick={handlebutton}
                    >Enter</button>
                </div>
            </div>
        </div>
    );
}
export default ImageLinkForm;