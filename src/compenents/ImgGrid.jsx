import { useEffect, useState } from "react";
import getPersonaje from "../helprs/getPersonaje";
import ImgItem from "./ImgItem";

// Aqui recibimos una new propiedad 👇 de AddCategory que es ValoreArregloCategory
export const ImgGrid = ({ ValoreArregloCategory }) => {
  const [images, setImages] = useState([]);

  const llamaFuncionImg = async() => {
                         // aqui  👇 estamos llamando la funcion de api de goku
    const newImagenes = await getPersonaje(ValoreArregloCategory);
    setImages(newImagenes);
  };

  useEffect(() => {  
    llamaFuncionImg()
  }, []);

  return (
    <>
      <h3>{ValoreArregloCategory}</h3>
      <div className="card-grid">
         {
          images.map(({id, raza}) => (
            <ImgItem />
          ))
         }
      </div>
    </>
  );
};
