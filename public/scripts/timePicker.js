function changingTime() {
  let indeks = document.getElementById('starttimepicker').selectedIndex
  let slut = document.getElementById('sluttimepicker');
  let start = document.getElementById('starttimepicker');
  let len = slut.length;

  document.getElementById('sluttimepicker').options.length = 0;
  for (let i = indeks + 1; i < start.length; i++) {
      let option = document.createElement("option");
      option.text = start[i].value;
      slut.add(option);
  }
}     

window.onload = changingTime();