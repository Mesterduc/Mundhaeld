// var form = document.getElementById("form");
const error = document.getElementById("error")
const navn = document.getElementById("bName")
const email = document.getElementById("bEmail")
const nr = document.getElementById("bPhone")
const antal = document.getElementById("bPersons")
const sumbit = document.getElementById("bookingSubmit")


navn.addEventListener("blur", myFocusFunction);
email.addEventListener("blur", tjekEmail);
nr.addEventListener("blur", tjekNr);
antal.addEventListener("blur", tjekAntal);
sumbit.addEventListener("click", send);

function send() {
  if(navn.validity.valid && email.validity.valid && nr.validity.valid && antal.validity.valid){
    alert("Tak for din henvendelse, vi vender hurtigst muligt tilbage til dig")
  }
  // alert("sendt");
  }

function myFocusFunction() {
  let messages = [] 

  if(navn.value === "" || navn.value == null){
    messages.push("Du skal skrive et navn")
    navn.style.borderColor = "red"
  }else{
    navn.style.borderColor = "green" 
    errorNavn.innerText = ""
  }
  if(messages.length > 0){
    errorNavn.innerText = messages.join(", ")
  }
}

function tjekEmail() {
  let messages = [] 

  if(email.value === "" || email.value == null || !email.validity.valid){
    messages.push("Du skal skrive en email")
    email.style.borderColor = "red"
  }else{
    email.style.borderColor = "green"
    errorEmail.innerText = ""
  }
  if(messages.length > 0){
    errorEmail.innerHTML = messages[0]
  }
}

function tjekNr() {
  let messages = []

  if(nr.value === "" || nr.value == null){
    messages.push("Du skal skrive et nr")
    nr.style.borderColor = "red"
  }else{
    nr.style.borderColor = "green"
    errorNr.innerText = ""
  }
  
  if(messages.length > 0){
    errorNr.innerText = messages[0];
  }
}

function tjekAntal() {
  let messages = [] 

  if(antal.value === "" || antal.value == null){
    messages.push("Du skal skrive et antal")
    antal.style.borderColor = "red"
  }else{
    antal.style.borderColor = "green"
    errorAntal.innerText = ""
  }
  if(messages.length > 0){
    errorAntal.innerText = messages.join(", ")
  }
}

