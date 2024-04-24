/*  gode ideer og tips:

hvis du vil begrænse antallet af decimaler på dit resultat, så brug methoden toFixed(antal decimaler)  eks.  result.toFixed(2) giver et resultat med 2 decimaler

hvis du vil have navnet på din valuta med fra options i dit select tag, så undersøg denne linje...
 let myCurrency = mySelectElement.options[mySelectElement.selectedIndex].innerText
 prøv evt. at consol logge mySelectElement.options, hvor mySelectElement er det select element du har fundet i din DOM med getElementById()

 */


 const myButton = document.getElementById("myButton")

 let beløb = document.getElementById("beløb")
 let rate = document.getElementById("rate")
 let resultat = document.getElementById("resultat")

 myButton.addEventListener("click", (e) => {
    omregner()
 })

 function omregner(){
    let myCurrency = rate.options[rate.selectedIndex].innerText
    let myRate = rate.value * beløb.value
    // let beløbResultat = myRate + " " + beløb.value
    resultat.innerText = myRate.toFixed(2) + " " + myCurrency


 }
