function divide_tweet() {
   
  //Get the document body as a variable
  var body = DocumentApp.openById("1BCEmEmUiqDXoBjXwia3-98s7ucrfP4n6SyW4t5KAIHE").getBody();
  // get the text of document
  var ppp1 = body.getText();
  //lunghezza del testo
  var n_ch = ppp1.length;
  
  if (n_ch > 280) {
     var blocchi = n_ch / 280; 
    //va preso l'intero più 1
  }
  else {
    //qui va il testo se minore di 280 caratteri
  }
  
  //prende la substringa da 0 a 100
  var ciccio = ppp1.substring(0,100);
  
  Logger.log(ppp1.length);
  Logger.log(blocchi);
  Logger.log(ciccio);
  
}
