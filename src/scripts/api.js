$(document).ready(function(){
    
    const endpoint = 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL'
    

    fetch(endpoint)
    .then(function (resposta) {  
        return resposta.json()
    })
    .then(function (json) {
        const comprarDolar = json.USDBRL.ask
        dolar.innerHTML = comprarDolar


        setInterval(function () {  
        const comprarDolar = json.USDBRL.ask
        dolar.innerHTML = comprarDolar
        },5000)
    })
})

