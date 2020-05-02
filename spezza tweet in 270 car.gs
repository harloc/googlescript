/** @OnlyCurrentDoc */

function spezza_tweet() {
  // dal foglio attivo prende la selazione e la mette nella variabile data
  var spreadsheet = SpreadsheetApp.getActive();
  var data = spreadsheet.getActiveRange().getValues(); 
  //si posiziona nel nuovo foglio di lavoro e scrive li
  var val_es = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('lab_tweet');
  
  for (var i=0; i<data.length; i++) {
     var tweet = tweet + data[i][0];
     var len_tweet = tweet.length;
     var num_tweet = Math.round(len_tweet/270); //divido per 270 la lunghezza del tweet e lo arrottondo all'intero successivo
  }

  var in_num_tw = 1; //variabile per numerare i tweet
  var partenza = 1; //variabile utilizzata per iniziare ogni singolo tweet
  var tweet_def = []; //array con i tweet definitivi e la loro numerazione
  
  for (var i=0; i<num_tweet*2; i=i+2) {
    //substring accetta due paramentri il primo e il numero da cui partire e il secondo è la lunghezza della stringa
    tweet_def[i] = tweet.substr(partenza,270);
    tweet_def[i+1] = in_num_tw+"/"+num_tweet;
    in_num_tw++;
    partenza = partenza + 270;  
  }  
  //scrive sul secondo folgio di lavoro tutti i tweet
  for (var b=0; b<tweet_def.length; b++) {
    val_es.getRange(b+1, 1).setValue(tweet_def[b]); 
  }        
};


