function doGet() {
  return HtmlService.createHtmlOutputFromFile("Index");
}

function getChartData(){
  const ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Data");
  const data = ss.getDataRange().getValues();

  return data;
}
