const mensagem = document.querySelector(".principal");
const codigo = document.querySelector(".resultado");

function codificar(){
    const mensagemCodificada = encriptar(mensagem.value)
    codigo.value = mensagemCodificada

}


function descodificar(){
    let mensagemDescodificada = descriptar(mensagem.value)
    codigo.value = mensagemDescodificada

}

function copiar(){
    let mensagemCopiada = document.querySelector(".resultado");
    mensagemCopiada.select();
    document.execCommand("copy");
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["a", "w"], ["e", "zdtyr"], ["i", "jmxs"], ["o", "jbqr"], ["u", "pfit"]]
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }

    return stringEncriptada
}

function descriptar(stringDescriptada){
    let matrizCodigo = [["w", "a"], ["zdtyr", "e"], ["jmxs", "i"], ["jbqr", "o"], ["pfit", "u"]]
    stringDescriptada = stringDescriptada.toLowerCase()

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringDescriptada.includes(matrizCodigo[i][0])){
            stringDescriptada = stringDescriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }

    return stringDescriptada
}