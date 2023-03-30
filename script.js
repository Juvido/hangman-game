const letterInput = document.getElementById("letter-input")


const variasPalavras = ["rinoceronte", "elefante", "passaro"]
const palavraChave = variasPalavras[Math.floor(Math.random() * variasPalavras.length)]

const letraCerta =[]
const letraErrada = []
console.log(palavraChave)
//de a ate z - intervalo entre 65 - 90
document.addEventListener("keydown", (evento) => {
    const codigo = evento.keyCode;
    
    if(isLetra(codigo)){
        const letra = evento.key;
        if (letraErrada.includes(letra)){
            alert("Letra Errada!")
        } else{
            if (palavraChave.includes(letra)){
                letraCerta.push(letra)
            } else {
                letraErrada.push(letra);
            }
        }
    atualizar()
    }
})

function atualizar () {
    mostrarLetraErrada()
    mostrarLetraCerta()
}

function mostrarLetraErrada (){
    const errou = document.querySelector(".letras-erradas")
    errou.innerHTML = "<h4>Letras Erradas</h4>"
    letraErrada.forEach(letra =>{
        errou.innerHTML += `<span>${letra}</span>`
    })
}

function mostrarLetraCerta (){
    const certo = document.querySelector(".palavra-certa")
    certo.innerHTML = "";
    palavraChave.split("").forEach(letra =>{
        if(letraCerta.includes(letra)) {
            certo.innerHTML += `<span>${letra}</span>`
        } else {
            certo.innerHTML += `<span> _ </span>`
        }
    })
}

function isLetra (codigo) {
    return codigo >=65 && codigo <= 90;
}




