import React, { useContext } from "react";
import { StateContext } from "../../Context/StateContext";

const ImageLinkForm = () => {
    const { img } = useContext(StateContext);
    const { input, setInput, ImageUrl, setImageUrl, setBox, data } = img
    const setImg = async () => {
        await setImageUrl(input);
        if(data){
            FaceLocation(data);
        }
      


    }
    const FaceLocation = async (data) => {
       
            const faceDataLocation = data.outputs[0].data.regions[0].region_info.bounding_box;
            const image = document.getElementById("ImageInput");
            const img_width = Number(image.width);
            const img_height = Number(image.height);
            console.log(img_width, img_height, faceDataLocation)

            setBox({
                left_Column: (faceDataLocation.left_col * img_width),
                right_Column: (img_width - (faceDataLocation.right_col * img_width)),
                bottom_row: (img_height - (faceDataLocation.bottom_row * img_height)),
                top_row: (faceDataLocation.top_row * img_height),
            });
      
    }
    return (
        <div className="">
            <p>This Magic Brain will detect faces in your pictures. Git it a try.</p>
            <div>
                <div className="pa4 br3 shadow-2">
                    <input classname=" f4 pa2 w-70" type="text" onChange={(e) => setInput(e.target.value)} />
                    <button className=" ml1 ba b--white br2 grow ph3 white pv2 bg-gray"
                        onClick={setImg}
                    >Enter</button>
                </div>
            </div>
        </div>
    );
}
export default ImageLinkForm;