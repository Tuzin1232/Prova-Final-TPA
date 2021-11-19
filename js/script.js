document.getElementById("calcular").onclick = function () {
    
    let result = document.getElementById("lblResult")
    let divResult = document.getElementById("result")

    let ValorMensal = parseFloat(document.getElementById("valorMensal").value)
    let TaxaJuros = parseFloat(document.getElementById("taxaJuros").value/100)
    let Parcelas = parseFloat(document.getElementById("numeroParcelas").value)

    if(ValorMensal != NaN && TaxaJuros != 0 && Parcelas != NaN){
        var formatter = new Intl.NumberFormat(undefined,{
            style: 'currency',
            currency: 'BRL',
        })

        let Valor = (ValorMensal * ((((1 + TaxaJuros) ** Parcelas) - 1) / TaxaJuros)).toFixed(2)
        divResult.style.display = "block"
        result.innerHTML = `Fulano, se você aplicar ${formatter.format(ValorMensal)}, à taxa de juros de ${TaxaJuros}% por ${Parcelas}Meses, você ganhará ${Valor} no final.`
    }
    else{
        divResult.style.display ="block"
        result.innerHTML = "Complete o Formulário acima"
    }
}