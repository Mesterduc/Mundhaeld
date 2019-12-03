// var form = document.getElementById("form");
const navn = document.getElementById("bName")
// var errorElement = document.getElementById("error")
const form = document.getElementById('form');
const hej3 = document.getElementById("hej3")

document.getElementById("myInput").addEventListener("focus", myFocusFunction);
//x.addEventListener("blur", myBlurFunction);

function myFocusFunction() {
  // alert("BøhH")
  document.getElementById("myInput").style.backgroundColor = "yellow"; 
}

