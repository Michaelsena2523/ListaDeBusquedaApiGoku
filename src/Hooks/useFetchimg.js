
// un hoosk es una funcion que regresa algo

import { useEffect, useState } from "react";
import getPersonaje from "../helprs/getPersonaje";

export const useFetchimg = ( ValoreArregloCategory ) => {

   const [images, setImages] = useState([]);
   const [isLoanding, setIsLoanding] = useState(true)

  const llamaFuncionImg = async() => {
                         // aqui  👇 estamos llamando la funcion de api de goku
    const newImagenes = await getPersonaje(ValoreArregloCategory);
    setImages(newImagenes);
    setIsLoanding(false)
  };

  useEffect(() => {  
    llamaFuncionImg()
  }, []);
 


 return{
    images,
    isLoanding,
 }
}
