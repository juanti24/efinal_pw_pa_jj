const obtenerPokemons = async () => {

    const obt1 = arrayPokemons()
    console.log(obt1)
    const obt2 = arraySolo3()
    console.log(obt2)
    const obt3 = arrayIdsSolo3(obt1, obt2)
    console.log(obt3)
    
    return await obtenerNombres(obt3)
}

const obtenerRandoms = (max, min) => {
    const random = Math.floor(Math.random() * (max - min) + min)
    return random
}

const arrayPokemons = () => {
    const arrayP = [
        obtenerRandoms(6, 1),
        obtenerRandoms(6, 1),
        obtenerRandoms(6, 1),
        obtenerRandoms(6, 1),
        obtenerRandoms(6, 1)]
    return arrayP
}

const arraySolo3 = () => {
    const arrayP = [
        obtenerRandoms(5, 0),
        obtenerRandoms(5, 0),
        obtenerRandoms(5, 0)
    ]
    return arrayP
}

const arrayIdsSolo3 = (array1, array2) => {
    const arrayP = []
    for (var i = 0; i <= 2; i++) {
        arrayP.push(array1[array2[i]])
    }
    return arrayP
}

const obtenerNombres = async ([opc1, opc2, opc3] = []) => {
    const data1 = await obtenerNombresApis(opc1)
    const data2 = await obtenerNombresApis(opc2)
    const data3 = await obtenerNombresApis(opc3)
    return [
        { nombre: data1.name, id: data1.id, imagen: obtenerImagen(opc1)},
        { nombre: data2.name, id: data2.id, imagen: obtenerImagen(opc2)},
        { nombre: data3.name, id: data3.id, imagen: obtenerImagen(opc3)}
    ]
}

const obtenerNombresApis = async (id) => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((r) => r.json());
    console.log(data.id)
    console.log(data.name)
    return data
}

const obtenerImagen = (id) => {
    const imagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
    return imagen
}
const getPokemons = async () => {
    return await obtenerPokemons()
}

export default getPokemons