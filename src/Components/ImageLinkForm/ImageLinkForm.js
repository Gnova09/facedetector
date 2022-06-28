import React from "react";

const ImageLinkForm = ({onInputChange,onButtonChange}) => {

    return(
        <div className="">
          <p>This Magic Brain will detect faces in your pictures. Git it a try.</p>
          <div>
                <div className="pa4 br3 shadow-2">
                    <input classname=" f4 pa2 w-70" type="text" onChange={onInputChange}/>
                    <button className=" ml1 ba b--white br2 grow ph3 white pv2 bg-gray"
                    onClick={onButtonChange}
                    >Enter</button>
                </div>
          </div>
        </div>
    );
}
export default ImageLinkForm;