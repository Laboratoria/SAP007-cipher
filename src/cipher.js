const cipher = {
  encode: function (numDeslocamento, MsgCod) {
    let tamAlfabeto = 26;
    //codigo Ascii é utilizado para codificar
    let CodigoAscii = 65;//codigo de codificar
    let Soma = "";
    //i+ incremento desloca letras para + / -
    for (let i = 0; i < MsgCod.length; i++) { //incrementar/avançar uma casinha
      //charcode converte para string o numero do alf para letra
      Soma += String.fromCharCode(//trazer o valor de numero para letras
        ((MsgCod.charCodeAt(i) - CodigoAscii + numDeslocamento) % tamAlfabeto) +
          CodigoAscii
      );      
    }
    return Soma;
  },
  decode: function (numDeslocamento, MsgCod) {
    let tamAlfabeto = 26;
    let CodigoAscii = 65;
    let SomaDecode = "";
    for (let i = 0; i < MsgCod.length; i++) {
      SomaDecode += String.fromCharCode(
        ((MsgCod.charCodeAt(i) - CodigoAscii - numDeslocamento) % tamAlfabeto) +
          CodigoAscii
      );

      console.log(SomaDecode);
    }
    return SomaDecode;
  },
};
export default cipher;
