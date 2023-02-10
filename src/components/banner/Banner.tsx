import React from "react";
import  Styles   from "./style";
// CSS-in-JS

const Banner = () => {
  const [ boolean, setBoolean ] = React.useState(false);
  const { buttonBase, flex, textAlign, generalFontSize, containerBg, font } =
    Styles();

  const handleColorClick = ()=>{
    setBoolean(!boolean);
  }

  return (
    <>
      <div className={`${containerBg(boolean)} ${flex}`}>
        <h1 className={`${font(boolean)}`}>Rick and Morty</h1>
        <p className={`${textAlign} ${generalFontSize}`}>
          Rick and Morty es una serie animada para adultos de ciencia ficción y
          comedia estadounidense creada por Justin Roiland y Dan Harmon para el
          bloque de programación nocturna Adult Swim, transmitido en el canal
          Cartoon Network.
        </p>
        <button
          className={`${buttonBase} ${generalFontSize} `}
          onClick={() => handleColorClick()}
        >
          Ver el trailer
        </button>
        <button className={` ${buttonBase} ${generalFontSize}`}>
          Guardar en favoritos
        </button>
      </div>
    </>
  );
};

export default Banner;
