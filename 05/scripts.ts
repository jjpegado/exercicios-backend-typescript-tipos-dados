const formatador = (texto: string): string =>{
    return texto.split('').join('-');
}

console.log(formatador('programador'))