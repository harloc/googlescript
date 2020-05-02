function downloadXLSX(fileId, folderId) {
  //var ssID = SpreadsheetApp.getActive().getId();
  var URL = "https://docs.google.com/spreadsheets/d/" + fileId + "/export?format=xlsx";
  var blob;
  var response = "";
  var token = ScriptApp.getOAuthToken();

  response = UrlFetchApp.fetch(URL, {
    headers: {
      'Authorization': 'Bearer ' +  token
    }
  });

  blob = response.getBlob().setName('copia_backup_agenda_C19.xlsx');// Convert the response to a blob 
  var file = DriveApp.createFile(blob)
  
    if(folderId) {
    try{
      var d = DriveApp.getFolderById(folderId);
      moveToFolder_(file, d);
    }
    catch(e){
    }
  }
  
}

function moveToFolder_(file, folder){
  folder.addFile(file);
  DriveApp.getRootFolder().removeFile(file);
}
