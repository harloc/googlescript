function onInstall(e){}

var PREFERENCES = [
  {
    fileId: '1qdxo5qa3GNRdpTrD3a0Y9T0nSmrfhu-egzYGrQUSXDI',
    toFolderId: '1gDf8qVUQCLx0Vkz2aeiy2NiJGLvRxBbu'
  }
]

function batch(){
  for(var item in PREFERENCES){
    downloadXLSX(PREFERENCES[item]['fileId'], PREFERENCES[item]['toFolderId'])
  }
}
