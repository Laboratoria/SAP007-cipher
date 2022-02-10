const cipher = {
  encode: function (offset, string) {
    if (offset == 0 || offset == null || offset == undefined) {
      throw new TypeError ();
   }


    let mgsCode = "";

    for (let i=0; i <string.length; i++) { //criando o loop
    let encrypto = string[i].charCodeAt();
    //pega as posições conforme a tabela
    if (encrypto >= 65 && encrypto <= 90) {
         mgsCode += String.fromCharCode(((encrypto - 65 + offset) % 26) + 65);
      //para pegar as posições das letras maículas
    }else if(encrypto >= 97 && encrypto <= 122) {
        mgsCode += String.fromCharCode(((encrypto - 97 + offset) % 26) + 97);
        //letras minúsculas
    }else if (encrypto  >= 33 && encrypto <= 47) {//! " # $ % & ' ( ) * + ´ - etc
      mgsCode += string.charAt(i);//devolve o prória caracter

    }else if (encrypto  >= 58 && encrypto <= 64) {
      mgsCode += string.charAt(i);

    }else if (encrypto  >=91 && encrypto <= 96) {
        mgsCode += string.charAt(i);

    }else if(encrypto >= 123 && encrypto <= 254) {
      mgsCode += string.charAt(i);
  
    }else if (encrypto == 32) {//caracter do espaço
      mgsCode += string.charAt(i);//devolve o prória caracter

  }
  }
 

    return mgsCode; //resultado 
  },


  decode: function (offset, string) {
    if (offset == 0 || offset == null || offset == undefined) {
       throw new TypeError ();
    }

  let mgsDecode = "";
    for (let i=0; i <string.length; i++) {
      let decrypto= string[i].charCodeAt();

      if (decrypto >= 65 && decrypto <= 90) {
        mgsDecode += String.fromCharCode(((decrypto + 65 - offset) % 26) + 65);

    }else if (decrypto >= 97 && decrypto <= 122) {
      mgsDecode += String.fromCharCode(((decrypto - 122 - offset) % 26) +122);

    }else if(decrypto >= 33 && decrypto <=47 ) {
      mgsDecode += string.charAt(i);

    }else if(decrypto >= 58 && decrypto <=64 ) {
      mgsDecode += string.charAt(i);
    }else if(decrypto >= 91 && decrypto <=96 ) {
         mgsDecode += string.charAt(i);        
    }else if (decrypto >= 123 && decrypto <= 254 ) {
      mgsDecode += string.charAt(i);

    }else if (decrypto == 32) {
      mgsDecode += string.charAt(i);

}
}
    return mgsDecode;
  }
};
export default cipher;
