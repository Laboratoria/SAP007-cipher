import cipher from "./cipher.js";
const btnCode = document.getElementById("btnCodificar");
btnCode.addEventListener("click", encryptText)

function encryptText(e) {
  e.preventDefault()
  let offset = Number(document.getElementById("offset").value);
  let string = document.getElementById("codificarTexto").value;
  const encryptando = cipher.encode(offset, string);
  document.getElementById("textcode").value = encryptando;

}
const btnDeco = document.getElementById("btnDecriptar");
btnDeco.addEventListener("click", decryptTexto)

function decryptTexto(e) {
  e.preventDefault()

  let offset = Number(document.getElementById("offset").value);
  let string = document.getElementById("decoficarTexto").value;
  const decryptando = cipher.decode(offset, string);
  document.getElementById("textdecode").value = decryptando;

}


