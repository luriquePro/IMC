const button = document.querySelector('#calcular')

const keyConfig = e => {if(e.keyCode == 13)calcularIMC()}

const calcularIMC = () => {

    const peso = document.querySelector('input#peso').value
    const altura = document.querySelector('input#altura').value
    const mensagem = document.querySelector('#mensagem')
    const imc = document.querySelector('#imc')
    const imcValue = (peso / (altura * altura)).toFixed(2)

    if(!validarIMC(peso, altura, imc)) return
    else tabelarIMC(imc, imcValue, mensagem)
}

const validarIMC = (peso, altura, imc) => {
    if(peso == '' || altura == ''){
        mensagem.textContent = 'Não podem haver valores invalidos nos campos'
        mensagem.classList.add('text-danger')
        imc.textContent = '00.00'
        imc.className = 'text-info'
        return false
    }else{
        mensagem.classList.remove('text-danger')
        return true
    }
}

const tabelarIMC = (imc, imcValue, mensagem) => {
    imc.className = ""
    
    if(imcValue < 16.9){
        imc.classList.add('text-warning')
        mensagem.textContent = 'Cuidado! Você está muito abaixo do peso!'
    }else if(imcValue < 18.4){
        imc.classList.add('text-warning')
        mensagem.textContent = 'Cuidado! Você está abaixo do peso!'
    }else if(imcValue < 24.9){
        imc.classList.add('text-success')
        mensagem.textContent = 'Parabens! Você está no peso Ideal'
    }else if(imcValue <29.9){
        imc.classList.add('text-danger')
        mensagem.textContent = 'Cuidado! Você está acima do peso!'
    }else if(imcValue <34,9){
        imc.classList.add('text-danger')
        mensagem.textContent = 'Cuidado! Você está com Obesidade Grau I!'
    }else if(imcValue < 40){
        imc.classList.add('text-danger')
        mensagem.textContent = 'Cuidado! Você está com Obesidade Grau II!'
    }else{
        imc.classList.add('text-danger')
        mensagem.textContent = 'Cuidado! Você está com Obesidade Grau III!'
    }
    
    
    imc.textContent = imcValue
}

button.addEventListener('click', calcularIMC)
document.addEventListener('keydown', keyConfig)
