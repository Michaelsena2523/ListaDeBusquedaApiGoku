import { useState } from "react";
import AddCategory from "./compenents/AddCategory";
import { ImgGrid } from "./compenents/ImgGrid";


export default function AppGoku() {
  // el que matiene el 👇 estado  y hace el cambio del estado
  const [category, setCategory] = useState(["goku"]);

  //Aqui recubimos el string nuevo  👇  del inputValue
  const onAddcategory = (onNewCategory) => {
    //Aqui me valida 👇 si existe nombre en listado newcategory con el metodo include()
    if (category.includes(onNewCategory)) return;
    // los tres punto trae todo del array list
    setCategory([ ...category ,  onNewCategory]);
    //Aqui llamamos lista 👆     y   👆 insertamos inputValue otro text a lista
  };

  return (
    <>
      <h2>AppGoku</h2>

      <AddCategory
        /* setCategory={setCategory} */
        onNewCategory={onAddcategory} // 👈 Aqui llamamos la funcion para Mandar el parametro prop del text
        // 👆 creamo un nuevo propieda componente para recibir el valor de inputValue
      />

      {/* <button onClick={onAddcategory}>Agregar</button>  */}

    
        {

       // Aqui creamos un iteracion map y dentro hay un objecto
       //OJO ESTUDIAR MEJOR ESTA PARTE   👇   👇       
        category.map((category) =>  (
          //Aqui mandamos la propiedad al componente 👇 ImgGrid 👇 que extrae que inserta el nuevo valor 
            <ImgGrid key={category} ValoreArregloCategory={category} />
          ))
        }

    </>
  );
}
