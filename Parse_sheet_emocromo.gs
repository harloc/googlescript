/** @OnlyCurrentDoc 

"questo è quello che funziona meglio!!!" refuso di una serie di funzioni utilizzate prima di arrivare alla definitva.
funzione che in un foglio a parte chiamato lab_dati
genera una tabella prelevando i dati dal documento fornito dal laboratorio.

*/

/**
Emocromo
*/



function genera_tab() {
  var spreadsheet = SpreadsheetApp.getActive();
  //var data = spreadsheet.getRange('Sheet1!A13:I21312').getValues(); //primo terzo file Emocromo
  //var data = spreadsheet.getRange('Sheet1!A21313:I44114').getValues(); //secondo terzo del file Emocromo
  var data = spreadsheet.getRange('Sheet1!A44115:I61833').getValues(); //terzo terzo del file Emocromo
  
  //var data = spreadsheet.getRange('Sheet1!A13:I82').getValues(); //due pazienti di prova
  
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('lab_dati'), true);
  var val_es = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('lab_dati');
  
  for (var i=0; i<data.length; i++) {
    if (data[i][0] == "Paziente") {
        // prende il nome del paziente
        val_es.getRange(i+1, 1).setValue(data[i][3]);
        //prende la data di nascita del paziente 
        var dat_nasc = i+7;
        val_es.getRange(i+1, 2).setValue(data[dat_nasc][4]);
        // prende la data dell'esame
        var data_es = i+2;
        val_es.getRange(i+1, 3).setValue(data[data_es][3]);
        
        // recupera i valori dell'emocromo
        // non avendo la stessa struttura probibilemnte bisogna eseguire un if else di tutti i dati
        // per tutti i dati che vogliamo recuperate
      
        var p1_val = i+9;
        var gb_eti = data[p1_val][7];
        var gb_val = data[p1_val][8];
              
        
        for (var a=1; a<13; a++) {
        //9 primovalore      
          if (gb_eti == "Globuli Bianchi") {
           val_es.getRange(i+1, 4).setValue(data[p1_val][7]);
           val_es.getRange(i+1, 5).setValue(data[p1_val][8]);
          };  
           p1_val = p1_val+2;
           gb_eti = data[p1_val][7];
           gb_val = data[p1_val][8]; 
        };     
        
    }  
  }
    
};







