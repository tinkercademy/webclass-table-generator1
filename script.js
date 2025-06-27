function computeTable() {
  var rows = Number(document.getElementById("rows").value);
  var cols = Number(document.getElementById("cols").value);
  
  var table = "<table><tbody>"
  for (var i = 0; i < cols; i++) {
    var table = table + "<tr>"
    for (var x = 0; x < rows; x++){
      var ie = i + 1
      var xe = x + 1
      var iee = ie.toString()
      var xee = xe.toString()
      var table = table + "<td class='color'>" + iee + ", " + xee + "</td>"
      }
    var table = table + "</tr>"
  }
  
  document.getElementById("butoon").innerHTML=table;
}