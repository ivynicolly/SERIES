const moment = require('moment')

const dataBrasil = (data) => {
    return moment(data, 'YYYY-DD-MM').format('DD/MM/YYYY')
}

const classificacao = (Indicacao) => {
    switch(Indicacao){
        case 18: 
            console.log("Proibida para menores.")
            break;
        case 16:
            console.log("Proibida para menores de " + Indicacao)
            break;
        case 14:
            console.log("Proibida para menores de 14")
            break;
        default: 
            console.log("Livre para todos os públicos.")
            break;
        
    }
}
const repetir = (series) => {
    for (let i = 0; i < series.length; i++){
        console.log(`${series[i].nome}`)
        classificacao(series[i].clasIndica)
        console.log(`Data de lançamento: ${dataBrasil(series[i].dataLancamento)}`)
        if (series[i].trailer != ''){
            console.log(series[i].trailer)
        } else {
            console.log('Não possui trailer')
        }
        console.log( )
    }
}
module.exports = { dataBrasil, repetir }