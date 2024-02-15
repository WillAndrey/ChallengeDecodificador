const inputCriptografia = document.querySelector('#crip')
const ButtonCriptografia = document.querySelector('#btn-crip')
const ButtonDescriptografia = document.querySelector('#btn-descrip')
const textArea = document.querySelector('textarea')
const notfound = document.querySelector('.not-found')
const aside = document.querySelector('#bordaaside')
let stringOriginal = 0

/* node = document.createElement("p");
        const textnode = document.createTextNode("Foram digitados letras com acento ou Maiúsculas e caracteres especiais.");
        node.appendChild(textnode);
        const header = document.querySelector('header')
        header.appendChild(node)
        node.style.color = 'red' */
function criptografar() {
    let valorCriptografado = inputCriptografia.value; // variavel para receber valor do input da criptografia.
    stringOriginal = valorCriptografado // variavel para receber o array antes da criptografia.
    
    /*  A letra "e" é convertida para "enter"
        A letra "i" é convertida para "imes"
        A letra "a" é convertida para "ai"
        A letra "o" é convertida para "ober"
        A letra "u" é convertida para "ufat" */
    for(let i=0; i < valorCriptografado.length; i++) {
        if(valorCriptografado === 'e') {
            valorCriptografado.replace('e', 'enter')
        }if(valorCriptografado === 'i') {
            valorCriptografado.replace('i', 'imes')
        }if(valorCriptografado === 'a') {
            valorCriptografado.replace('a', 'ai')
        }if(valorCriptografado === 'o') {
            valorCriptografado.replace('o', 'ober')
        }if(valorCriptografado === 'u') {
            valorCriptografado.replace('u', 'ufat')
        }

    }

    console.log(valorCriptografado)
}
function descriptografar() {
    
   
    
}

ButtonCriptografia.addEventListener('click', criptografar)
ButtonDescriptografia.addEventListener('click', descriptografar)
