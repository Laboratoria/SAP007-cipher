import cipher from "./cipher.js";
const btnCode=document.getElementById("btnCodificar");//botão
btnCode.addEventListener("click", encryptText)// ao click do botão retorna o valor do botão da função encryptexto

function encryptText (e){
  e.preventDefault()//evita que a pagina recarregue
  let offset = Number(document.getElementById("offset").value);//pega o valor do deslocamento escolido pelo usuário
  let string = document.getElementById("codificarTexto").value; //pega o texto escrito pelo usuário na caixa de texto
  const encryptando=cipher.encode(offset,string);//pega a função do arquivo cipher
  document.getElementById("textcode").value=encryptando;//vai na area de resultado e mostra o valor na caixa de texto
  
}
 const btnDeco = document.getElementById("btnDecriptar");
 btnDeco.addEventListener("click", decryptTexto)
 
 function  decryptTexto (e){
  e.preventDefault()

  let offset = Number(document.getElementById("offset").value);
  let string = document.getElementById("decoficarTexto").value;
  const decryptando= cipher.decode(offset,string);
  document.getElementById("textdecode").value=decryptando;
  
}


