import { useState } from "react";

//Aqui mandamos el text inputValue por un  👇  parametro de un componente 
export default function AddCategory({onNewCategory}) {
  const [textinput, setTextinput] = useState("");
  // Podemos desustrurar👇
  const textadd = ({ target }) => {
    setTextinput(target.value);
  };

  const onsubmit = (evento ) => {
     evento.preventDefault()
     if(textinput.trim().length < 3 )return;
     /* setCategory(category => [ textinput, ...category ])  */
     onNewCategory(textinput.trim() )
   // 👆 New componente 👆 que mandamos el valor de inputValue para que se refleje en AppGoku
     setTextinput('')
  }

  return (
    <form onSubmit={onsubmit}>
      <input
        type="text"
        placeholder="Bucar Personaje"
        value={textinput}
        onChange={textadd}
      />
    </form>
  );
}
