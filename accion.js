const campo_texto = document.querySelector("#texto1");
const mensaje = document.querySelector("#mensaje");

const matriz_codigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

function copiar() {
    navigator.clipboard.writeText(mensaje.value)
}


function encriptar(){
    const texto = encriptado(texto1.value);
    mensaje.value = texto
    texto1.value = "";
    persona.style.backgroundImage = "none"
}

function encriptado (mensajeEncriptado){
    for(let i = 0; i < matriz_codigo.length; i++){
        if(mensajeEncriptado.includes(matriz_codigo[i][0])){
            mensajeEncriptado = mensajeEncriptado.replaceAll(
                matriz_codigo [i][0],
                matriz_codigo [i][1]
            )
        }
    }
    return mensajeEncriptado;
}

    
function desencriptar(){
    for(let i = 0; i < matriz_codigo.length; i++){
        if(campo_texto.value.includes(matriz_codigo[i][1])){
            campo_texto.value = campo_texto.value.replaceAll(
                matriz_codigo [i][1],
                matriz_codigo [i][0]
            )
        }
    }
    mensaje.value = campo_texto.value
    campo_texto.value = ""

    // campo_texto.value = "";
    persona.style.backgroundImage = "none"
}
    
    

  