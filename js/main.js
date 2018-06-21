// maakt de value (waarde) van de input veld "Scherm-veld" leeg
// --> Hierdoor kan de gebruiker opnieuw nieuwe waardes invullen voor berekeningen.
function clr() {document.getElementById("Scherm-veld").value = "";}


// Pakt de waarde van de geklikte knop en stuurt het naar de input veld met de id= "Scherm-veld"
// en geeft het weer als getal
function getInput(value) {document.getElementById("Scherm-veld").value += value;}


// Pakt alle waardes van de ingevoegde knoppen en zet het in een variable om weer te gebruiken
// in een ander variable die "antwoord" heet waarbij de variable "input" in een eval gezet word
// wat zorgen maakt dat het gelezen word als een berekening een nit als een losse tekst.
// en geeft get weer in de zelfde invul veld "Scherm-veld"
function bereken() {
    var input = document.getElementById("Scherm-veld").value + " ";
    
    var antwoord = eval(input);
    document.getElementById("Scherm-veld").value = antwoord;
}


// De functie sqr pakt de waarde van variable "input" en berekent de square root (wortel) van de waarde
function sqr() {
    document.getElementById("Scherm-veld").value = Math.sqrt(input);
}