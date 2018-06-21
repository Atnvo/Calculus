// Pakt de waarde van de geklikte knop en stuurt het naar de input veld met de 
// id= "Scherm-veld"en geeft het weer als getal
function getInput(value) {
    document.getElementById("Scherm-veld").value += value;
}


// Pakt alle waardes van de ingevoegde knoppen en zet het in een variable "input"
// --> Om later voor berekeningen te gebruiken 
var input = document.getElementById("Scherm-veld").value;


// Pakt de varibale "input" en zet de waardes in de variable "antwoord" 
// wat zorgen maakt dat het gelezen word als een berekening een niet als losse tekst.
// en geeft get weer in de zelfde invul veld met de id "Scherm-veld"
function bereken() {
    var input = document.getElementById("Scherm-veld").value;
    var antwoord = eval(input);
    document.getElementById("Scherm-veld").value = antwoord;
}


// Wortel
// De functie sqr pakt de waarde van variable "input" en berekent de square 
// root (wortel) van de waarde
function sqr() {
    var input = document.getElementById("Scherm-veld").value;
    document.getElementById("Scherm-veld").value = Math.sqrt(input);
}


// Machten
// De functie pwr pakt de waarde van input en zet het naar
function pwr() {
    var input = document.getElementById("Scherm-veld").value;
    
    document.getElementById("Scherm-veld").value = Math.pow(input, input);
}


// maakt de value (waarde) van de input veld "Scherm-veld" leeg
// --> Hierdoor kan de gebruiker opnieuw nieuwe waardes invullen voor berekeningen.
function clr() {
    document.getElementById("Scherm-veld").value = "";
    input = "";
}