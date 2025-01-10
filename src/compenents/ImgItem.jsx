

export default function ImgItem({imagen, raza, power, poweMax}) {

   console.log( imagen, raza , power , poweMax)

  return (
    <>
    <img src={imagen} alt=''  className="imgAdjuste"/>
    <div className="card">
        <p>Poder : {power}</p>
        <p>SuperPowe : {poweMax}</p>
        <p>Raza: {raza}</p>
    </div>
    </>
  )
}
