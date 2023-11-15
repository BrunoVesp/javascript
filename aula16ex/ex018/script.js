var numero = document.getElementById('txtnumero')
var res = document.getElementById('res')
var res2 = document.getElementById('res2')
var numeros = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }
    else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }
    else {
        return false
    }
}

function adicionar() {
    if(isNumero(numero.value) && !inLista(numero.value, numeros)) {
        numeros.push(Number(numero.value))
        var item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado.`
        res.appendChild(item)
        res2.innerHTML = ''
    }
    else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    numero.value = ''
    numero.focus()
}  

function finalizar() {
    if (numeros.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    }
    else {
        var total = numeros.length
        var maior = numeros[0]
        var menor = numeros[0]
        var soma = 0
        var media = 0
        for (var i in numeros) {
            soma += numeros[i]
            if (numeros[i] > maior) {
                maior = numeros[i]
            }
            if (numeros[i] < menor) {
                menor = numeros[i]
            }
        }
        media = soma / total
        res2.innerHTML = ''
        res2.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res2.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res2.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res2.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res2.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}