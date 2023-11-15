function gerar() {
    var numero = document.getElementById('txtnumero')
    var res = document.getElementById('res')

    if (numero.value.length == 0) {
        window.alert('Por favor, digite um número!')
    }
    else {
        var n = Number(numero.value)
        res.innerHTML = ''
        
        for (var i = 1; i <= 10; i++) {
        var item = document.createElement('option')
        item.text = `${n} x ${i} = ${n*i}`
        item.value = `res${i}`
        res.appendChild(item)
        }
    }
}