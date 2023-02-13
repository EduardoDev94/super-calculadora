console.log ('Script Vinculado')



var buttonCalculate = document.querySelector('#button-calculate')

function hadleButtonClick (){

    calcularSoma ()
    calcularSubAB()
    calcularSubBA()
    multiplicacao()
    divAB()
    divBA()
    potAB()
    potBA()
    raizA()
    raizB()
    fatorialA()
    fatorialB()
    percentAB ()
    percentBA ()
    media()
    
}
buttonCalculate.addEventListener ('click', hadleButtonClick)




function calcularSoma() {
    var soma = document.querySelector ('#soma')
    var inputA = document.querySelector ('#inputA')
    var inputB = document.querySelector('#inputB')
    var valueA = Number(inputA.value)
    var valueB = Number(inputB.value)  
    let somaResult = (valueA + valueB) 

   return soma.textContent = somaResult
}
function calcularSubAB() {
    var subAB = document.querySelector ("#sub-a-b")
    var inputA = document.querySelector ('#inputA')
    var inputB = document.querySelector('#inputB')
    var valueA = Number(inputA.value)
    var valueB = Number(inputB.value)  
    let subABResult = (valueA - valueB) 

   return subAB.textContent = subABResult.toFixed(2)

}
function calcularSubBA() {
    var subBA = document.querySelector ("#sub-b-a")
    var inputA = document.querySelector ('#inputA')
    var inputB = document.querySelector('#inputB')
    var valueA = Number(inputA.value)
    var valueB = Number(inputB.value)  
    let subBAResult = (valueB - valueA) 

   return subBA.textContent = subBAResult.toFixed(2)

}
function multiplicacao() {
    var multiplicacao = document.querySelector ("#multiplicacao")
    var inputA = document.querySelector ('#inputA')
    var inputB = document.querySelector('#inputB')
    var valueA = Number(inputA.value)
    var valueB = Number(inputB.value)  
    let multiplicacaoResult = (valueA * valueB) 

   return multiplicacao.textContent = multiplicacaoResult.toFixed(2)

}
function divAB() {
    var divAB = document.querySelector ("#divA-B")
    var inputA = document.querySelector ('#inputA')
    var inputB = document.querySelector('#inputB')
    var valueA = Number(inputA.value)
    var valueB = Number(inputB.value)  
    let divABResult = (valueA / valueB) 

   return divAB.textContent = divABResult.toFixed(2)

}
function divBA() {
    var divBA = document.querySelector ("#divB-A")
    var inputA = document.querySelector ('#inputA')
    var inputB = document.querySelector('#inputB')
    var valueA = Number(inputA.value)
    var valueB = Number(inputB.value)  
    let divBAResult = (valueB / valueA) 

   return divBA.textContent = divBAResult.toFixed(2)

}
function potAB() {
    var potAB = document.querySelector ("#potAB")
    var inputA = document.querySelector ('#inputA')
    var inputB = document.querySelector('#inputB')
    var valueA = Number(inputA.value)
    var valueB = Number(inputB.value)  
    let potABResult = (valueA ** valueB) 

   return potAB.textContent = potABResult.toFixed(2)

}
function potBA() {
    var potBA = document.querySelector ("#potBA")
    var inputA = document.querySelector ('#inputA')
    var inputB = document.querySelector('#inputB')
    var valueA = Number(inputA.value)
    var valueB = Number(inputB.value)  
    let potBAResult = (valueB ** valueA) 

   return potBA.textContent = potBAResult.toFixed(2)

}
function raizA() {
    var raizA = document.querySelector ("#raizA")
    var inputA = document.querySelector ('#inputA')
    var inputB = document.querySelector('#inputB')
    var valueA = Number(inputA.value)
    var valueB = Number(inputB.value)  
    let raizAResult = (Math.sqrt(valueA)) 

   return raizA.textContent = raizAResult.toFixed(2)

}
function raizB() {
    var raizB = document.querySelector ("#raizB")
    var inputA = document.querySelector ('#inputA')
    var inputB = document.querySelector('#inputB')
    var valueA = Number(inputA.value)
    var valueB = Number(inputB.value)  
    let raizBResult = (Math.sqrt(valueB)) 

   return raizB.textContent = raizBResult.toFixed(2)

}
const fatorial = n => {
    if (n > 1) {
        return n * fatorial(n - 1)
    }
    return n
}

function fatorialA() {
    var fatorialA = document.querySelector ("#fatorialA")
    var inputA = document.querySelector ('#inputA')
    var inputB = document.querySelector('#inputB')
    var valueA = Number(inputA.value)
    var resultFatorialA = fatorial(valueA)
     return fatorialA.textContent = resultFatorialA 
    }
function fatorialB() {
        var fatorialB = document.querySelector ("#fatorialB")
        var inputA = document.querySelector ('#inputA')
        var inputB = document.querySelector('#inputB')
        var valueB = Number(inputB.value)
        var resultFatorialB = fatorial(valueB)
         return fatorialB.textContent = resultFatorialB         
        }
function percentAB() {
            var percentAB = document.querySelector ("#percentAB")
            var inputA = document.querySelector ('#inputA')
            var inputB = document.querySelector('#inputB')
            var valueA = Number(inputA.value)
            var valueB = Number(inputB.value)  
            let percentABResult = (valueA / valueB)*100
        
           return percentAB.textContent = percentABResult.toFixed(2) +"%"
}
function percentBA () {
            var percentBA = document.querySelector ("#percentBA")
            var inputA = document.querySelector ('#inputA')
            var inputB = document.querySelector('#inputB')
            var valueA = Number(inputA.value)
            var valueB = Number(inputB.value)  
            let percentBAResult = (valueB / valueA)*100
        
           return percentBA.textContent = percentBAResult.toFixed(2)+"%"
}
function media() {
    var media = document.querySelector ("#media")
    var inputA = document.querySelector ('#inputA')
    var inputB = document.querySelector('#inputB')
    var valueA = Number(inputA.value)
    var valueB = Number(inputB.value)  
    let mediaResult = ((valueA+valueB) / 2 ) 

   return media.textContent = mediaResult.toFixed(2)

}