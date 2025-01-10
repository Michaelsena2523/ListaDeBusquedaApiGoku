import { useState } from "react";
import AddCategory from "./compenents/AddCategory";
import { ImgGrid } from "./compenents/ImgGrid";



const alertaExiste = ( ) => {
  Swal.fire({
    title: "Oops...",
    text: "YA Existe",
  });
}


export default function AppGoku() {
  // el que matiene el 👇 estado  y hace el cambio del estado
  const [category, setCategory] = useState([]);

  //Aqui recubimos el string nuevo  👇  del inputValue
  const onAddcategory = (onNewCategory) => {
    //Aqui me valida 👇 si existe nombre en listado newcategory con el metodo include()
    if (category.includes(onNewCategory)){
      alertaExiste()
    }else{
      // los tres punto trae todo del array list
      setCategory([  onNewCategory  ,  ...category ]);
      //insertamos inputValue 👆     👆  Aqui llamamos lista 
      // otro text a lista
    };
  };

  return (
    <>
      <h2>Busca Tu Personaje Saiyajin</h2>

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
