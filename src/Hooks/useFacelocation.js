import { useEffect, useState } from "react";

export default function useFacelocation(data) {
    const [box2, setBox2] = useState(null)
    
    useEffect(()=>{
        let faceDataLocation = data.outputs[0].data.regions[0].region_info.bounding_box;
        const image = document.getElementById("ImageInput");
        const img_width = Number(image.width);
        const img_height = Number(image.height);
        console.log(img_width, img_height, faceDataLocation);

        setBox2({
            left_Column: (faceDataLocation.left_col * img_width),
            right_Column: (img_width - (faceDataLocation.right_col * img_width)),
            bottom_row: (img_height - (faceDataLocation.bottom_row * img_height)),
            top_row: (faceDataLocation.top_row * img_height),
        });

    },[data])
    console.log(box2);
    return {box2}
}