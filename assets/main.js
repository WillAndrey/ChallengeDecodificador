// Constantes e variáveis
const btnCriptografia = document.querySelector('.btn1')
const btnDescriptografia = document.querySelector('.btn2')
const txtarea1 = document.querySelector('.txtarea1')
const txtarea2 = document.querySelector('.txtarea2')
let valorArrayFinal
let valorOriginal



btnCriptografia.addEventListener('keypress', function(event) {
    const charCode = event.charCode
    const charTyped = String.fromCharCode(charCode)
    const regex = /[a-z ]/g // Expressão regular para verificar se o caractere é uma letra minúscula sem acento.

    if (!regex.test(charTyped)) {
        
        event.preventDefault() // Impede a entrada do caractere se não for uma letra minúscula.
    }

    
})


function criptografar() {


    let valor = txtarea1.value
    valorOriginal = valor
    let valorArray = valor.split('')
    
    
    for(let i=0; i < valorArray.length; i++) {
        if(valorArray[i] === 'e') {
            
           valorArray.splice(i, 1, 'enter')

        }else if(valorArray[i] === 'i') {
            
            valorArray.splice(i, 1, 'imes')


        }else if(valorArray[i] === 'a') {

            valorArray.splice(i, 1, 'ai')
           
        }else if(valorArray[i] === 'o') {

            valorArray.splice(i, 1, 'ober')
           
        }else if(valorArray[i] === 'u') {

            valorArray.splice(i, 1, 'ufat')
           
        }  
        
    }//final do laço for
        valorArrayFinal = valorArray.join('')
        txtarea1.value = valorArrayFinal
       
    
}
       
     

function descriptografar() {

    
    let arrayDescrip = valorArrayFinal.split('')
    
   

    for (let i=0;i < arrayDescrip.length ; i++) {
        if (arrayDescrip[i] === 'e' && arrayDescrip[i + 1]  === 'n' && arrayDescrip[i + 2] === "t" && arrayDescrip[i + 3] === 'e' && arrayDescrip[i + 4] === 'r') {
            arrayDescrip.splice(i, 5, 'e')
        }else if(arrayDescrip[i] === 'i' && arrayDescrip[i + 1]  === 'm' && arrayDescrip[i + 2] === "e" && arrayDescrip[i + 3] === 's') {
            arrayDescrip.splice(i, 4, 'i')
        }else if(arrayDescrip[i] === 'a' && arrayDescrip[i + 1]  === 'i'){
            arrayDescrip.splice(i, 2, 'a')
        }else if(arrayDescrip[i] === 'o' && arrayDescrip[i + 1]  === 'b' && arrayDescrip[i + 2] === "e" && arrayDescrip[i + 3] === 'r') {
            arrayDescrip.splice(i, 4, 'o')
        }else if(arrayDescrip[i] === 'u' && arrayDescrip[i + 1]  === 'f' && arrayDescrip[i + 2] === "a" && arrayDescrip[i + 3] === 't') {
            arrayDescrip.splice(i, 4, 'u')
        }
    }//fim do for descriptografia.
  

    let arrayDescriptografadoFinal = arrayDescrip.join('')
    txtarea2.value = arrayDescriptografadoFinal

 }



btnCriptografia.addEventListener("click", criptografar)
btnDescriptografia.addEventListener("click", descriptografar)
