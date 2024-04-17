const etiquetas = (valores: {
    produto: string,
    lote: number,
    ano: number,
    qtd: number
}): string[] => {
    let resultado: string[] = [];

    for (let i = 1; i <= valores.qtd; i++) {
        resultado.push(`${valores.lote}-${valores.ano}-${i.toString().padStart(3, '0')}`)
        
    }

return resultado
}

console.log(etiquetas( {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
}));