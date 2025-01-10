/* import { useEffect, useState } from "react"; */
/* import getPersonaje from "../helprs/getPersonaje"; */
import ImgItem from "./ImgItem";
import { useFetchimg } from "../Hooks/useFetchimg";

// Aqui recibimos una new propiedad 👇 de AddCategory que es ValoreArregloCategory
export const ImgGrid = ({ ValoreArregloCategory }) => {


 // creamo un hoosk personalizado   👇  para renderizar  
 const { images , isLoanding} = useFetchimg (ValoreArregloCategory)

  return (
    <>
      <h3 className="tituloPersonaje">{ValoreArregloCategory}</h3>

      {
         isLoanding ? <h3>Cargando...</h3> : null
      }

      <div className="card-grid">
         {
          images.map((item) => (
            <ImgItem 
             key={item.id}
             {... item}

            />
          ))
         }
      </div>
    </>
  );
};
