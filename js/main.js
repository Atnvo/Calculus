// Links voor uitleg van gebruikte code\

//  - Eval();
//    https://www.w3schools.com/jsref/jsref_eval.asp

//  - indexOf();
//   https://www.w3schools.com/jsref/jsref_indexof.asp

//  - str.substring(0, n)
//    https://www.w3schools.com/jsref/jsref_substring.asp

//  - parseInt();
//    https://www.w3schools.com/jsref/jsref_parseInt.asp

//  - parseFloat();
//    https://www.w3schools.com/jsref/jsref_parsefloat.asp

//  - Math.pow();
//    https://www.w3schools.com/jsref/jsref_pow.asp

//  - Math.sqrt();
//    https://www.w3schools.com/jsref/jsref_sqrt.asp


//______________________________________________________________________________________


// Pakt de waarde van de geklikte knop en stuurt het naar de input veld met de
// id= "Scherm-veld"en geeft het weer als getal en zet het naast elkaar
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
  // Als de string(variable) een "^" heeft word het door gestuurd naar de
  // Functie pwr()

  // Alse de string "input" een "^"" teken bevat word het doorgestuurd naar "pwr();"
  if (input.indexOf("^") != -1) {
    pwr();

  // Alse de string "input" een "%" teken bevat word het doorgestuurd naar "procent();"
  } else if (input.indexOf("%") != -1) {
    procent(input);

  // Alse de string "input" een "√" teken bevat word het doorgestuurd naar "sqr();"
  // } else if (input.indexOf("√")  != -1){  
  //   sqr(input);

  // Als de string niet de bovense tekens bevaten word de string(variable)
  // In een "eval();" -> "Evaluate/Execute" gezet waardoor het geleest word 
  // Als een berekening en kan de antwoord worden getoon in de value van
  // "Scherm-veld"
  } else {
    var antwoord = eval(input);
    document.getElementById("Scherm-veld").value = antwoord;
  }
}

// Wortel
// De functie sqr pakt de waarde van variable "input" en berekent de square
// root (wortel) van de waarde
function sqr() {
  var input = document.getElementById("Scherm-veld").value;
  document.getElementById("Scherm-veld").value = Math.sqrt(input);
}

// Machten
// De functie pwr pakt de waarde van input en zet het om in 2 variables.
// Zet de getalen in een "Math.pow" om de machtreeks te berekenen
// "indexOf" zoekt de string naar een specifieke waarde en geeft de positie van 
// dat getal aal als een getal.
function pwr() {
  var input = document.getElementById("Scherm-veld").value;

  var str = input;
  var n = str.indexOf("^");
  var g1 = str.substring(0, n);
  var g2 = str.substring(n + 1, str.length);
  document.getElementById("Scherm-veld").value = 
  Math.pow(parseInt(g1), parseInt(g2));
}

// Procenten
//De funcite zet de getallen van de ingevulde waardes in twee variablen
// De getallen voor de % wordt in een variablen en de twee daarna ook in een variablen 
// Door "str.substring" gebruiken.
// "indexOf" zoekt de string naar een specifieke waarde en geeft de positie van 
// dat getal aal als een getal.
function procent(input) {
  // var input = document.getElementById("Scherm-veld").value;
  var str = input;
  var a = str.indexOf("%");
  var g1 = str.substring(0, a);
  var g2 = str.substring(a + 1, str.length);
  // parseFloat kan je gebruiken als de getal een decimaale waarde heeft en daarmee wilt berekenen.
  document.getElementById("Scherm-veld").value =  parseInt(g1) * parseFloat("0."+g2);
}

// maakt de value (waarde) van de input veld "Scherm-veld" leeg
// --> Hierdoor kan de gebruiker opnieuw nieuwe waardes invullen voor berekeningen.
function clr() {
  document.getElementById("Scherm-veld").value = "";
  input = "";
}

