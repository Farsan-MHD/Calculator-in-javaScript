const buttonsValues = ['1','2','3','-','4','5','6','*','7','8','9','+','0','00','c','=']
const numberContainer = document.getElementById('numberContainer')

buttonsValues.forEach((value) => {
    const button = document.createElement('button')
    button.innerText = value
    button.className = 'number'
    button.onclick = () => handleButtonClick(value)
    numberContainer.appendChild(button)
})

function handleButtonClick(value){
    const resultField = document.getElementById('inputNumber')
    if (value === '='){
        try{
            resultField.value = eval(resultField.value)
        }catch{
            resultField.value = "Errore"
        }
    }else if(value === 'c'){
        resultField.value = ''
    }else{
        resultField.value += value
    }
}
    

