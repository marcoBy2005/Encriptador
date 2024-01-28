
let ind
let i = 0
let inputLength
let inputUsuario = document.getElementById("input")
let resultado = []
let indiceLetraAgregar
let tmñLista
let textoEncriptadoArray = []
let textoEncriptado
let textoValue = []
const btnEncriptar = document.getElementById("btnEncriptar")
btnEncriptar.addEventListener("click", pressEncriptar)
const btnDesencriptar = document.getElementById("btnDesencriptar")
btnDesencriptar.addEventListener("click", pressDesencriptar)
const text = document.getElementById("text")

// Para elegir la cantidad de letras a agregar de manera aleatoria (entre 2 y 10)
function new_ind() {
  ind = Math.floor(Math.random() * 9) + 2
  return ind
}

function generarRandom(ind) {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  const charactersLength = characters.length;
  let result = "";
  for (let i = 0; i < ind; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  resultado = [...result]

  return result
}

// Para indicar el lugar donde se va a colocar cada una de las letras de acuerdo al valor del input del usuario(es un arreglo)
// y agregarlas una por una en lugares diferentes mediante la iteracion

function indiceLetraAleatoria(array) {
  tmñLista = inputLength
  let letra
  for (let j = 0; tmñLista > j; j++) {
    indiceLetraAgregar = Math.floor(Math.random() * tmñLista)
    letra = resultado[j]
    array.splice(indiceLetraAgregar, 0, letra)
  }
  textoEncriptado = array.join('')
  textoEncriptadoArray.push(textoEncriptado)
  textoValue.push(inputUsuario.value)
  return textoEncriptado
}

// función para encriptar

function pressEncriptar() {
  let inputValue = []
  let cadaLetra = []
  inputValue = inputUsuario.value
  cadaLetra = [...inputValue]
  inputLength = cadaLetra.length
  if (inputUsuario.value == "") {
    alert("Introduzca cualquier texto antes de encriptar ;)")
  }
  else {
    new_ind()
    generarRandom(ind)
    indiceLetraAleatoria(cadaLetra)
    text.innerHTML = textoEncriptado
  }
}

// Función para desencriptar

function pressDesencriptar() {
  let valorTexto = inputUsuario.value
  if (inputUsuario.value == "") {
    alert("Introduzca cualquier texto antes de desencriptar ;)")
  }
  else{
    for(let u = 0; textoEncriptadoArray.length > u; u++){
      if(valorTexto == textoEncriptadoArray[u]){
        text.innerHTML = textoValue[u]
        break
      }
    }
  }
}






































