import cipher from "./cipher.js";

const buttonCodificar = document.getElementById("codificar");
buttonCodificar.addEventListener("click", function () {
let MsgCod = document.getElementById("MsgCod").value;
let offsetCod = document.getElementById("offsetCod").value;

let encode = cipher.encode(Number(offsetCod), MsgCod);

document.getElementById("codResultado").value = encode;
});

const buttonDecodificar = document.getElementById("btnDecodificar");
buttonDecodificar.addEventListener("click", function () {
let MsgDecodificar = document.getElementById("MsgDecodificar").value;
let offsetDeco = document.getElementById("offsetDeco").value;

let decode = cipher.decode(Number(offsetDeco), MsgDecodificar);
document.getElementById("decoResultado").value = decode;
});
