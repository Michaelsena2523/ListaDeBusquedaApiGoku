const getPersonaje = async (ValoreArregloCategory) => {
    const url = `https://dragonball-api.com/api/characters?name=${ValoreArregloCategory}`;
    const data = await fetch(url);
    const resultado = await data.json();

    // aqui estamos rectornado un objecto meto map de la informacion Api de Goku
    const getInfop = resultado.map((infop) => ({
        id: infop.id,
        imagen: infop.image,
        raza: infop.race,
        power: infop.ki,
        poweMax: infop.maxKi,
    }));
    return getInfop;
};


export default getPersonaje
