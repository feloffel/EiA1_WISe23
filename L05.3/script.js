stories = [
    "Du startet den Antrieb und fliegt los. Auf einmal leuchtet ein Gefahrensymbol auf dem Disyplay auf. Möchtest du 'anhalten' oder 'weiterfliegen'?", 
    "Du findest den Schaden. Ein Weltraumwesen hat deinen Antrieb manipuliert. Du reparierst ihn und erreichst Arrakis wohlauf.", 
    "Du bist kurz davor Arrakis zu erreichen. Plötzlich stoppt dein Raumschiff. Der Antrieb überhitzt und du musst das Schiff in einer Rettungskapsel verlassen. Du erreicht Arrakis mit kleinen Schrammen und siehst wie dein Raumschiff explodiert.", 
    "Du startest den Antrieb und fliegt los. Kurz vor Krypton nähern sich dir fünf Patroullienschiffe. Sie verlangen von dir das Schutzschild zu senken um an Bord kommen zu können. Dir kommt das sehr suspekt vor. Willst du das 'Schild senken' oder die 'Aufforderung ignorieren?'", 
    "Die Patroullien durchsuchen dein Schiff und finden nichts auffälliges. Sie wünschen dir einen schönen Aufenthalt auf Krypton und lassen dich landen.", 
    "Die Patroullienschiffe eröffnen das Feuer. Du hast keine Chance. Sie zerstören dein Schild und entern das Schiff. Du sitzt nun im Gefängnis auf Krypton."
];

let state = 0                                              //festlegen des Wertes von state


const input = document.querySelector(".inputField");
const output = document.getElementById("output");
const element = document.querySelector(".inputGroup");

input.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        if (state == 0) {                                   //Abfrage ob State den Wert 2 hat
            Auswahl1();                                     //ausführen der Funktion "Auswahl1"
            event.currentTarget.value = "";                 //löscht die Eingabe aus dem InputField
        }
        if (state == 1) {                                   //Abfrage ob State den Wert 1 hat
            Auswahl2();                                     //ausführen der Funktion "Auswahl2"
            event.currentTarget.value = "";                 //löscht die Eingabe aus dem InputField

        }
        if (state == 2) {                                   //Abfrage ob State den Wert 2 hat
            Auswahl3();                                     //ausführen der Funktion "Auswahl3"
            event.currentTarget.value = "";                 //löscht die Eingabe aus dem InputField
        }
        
    }
})


//Funktion 1
function Auswahl1() {                                       
    if (input.value == "Arrakis") {                         //Abfrage ob im Eingabefeld "Arrakis" geschrieben wurde
        output.innerHTML = stories[0];                      //wenn ja, dann ändern des Textes mit der id "output" zu dem Text, der im Array an Stelle 0 steht
        state = 1;                                          //ändern des Wertes von "state" auf 1
        console.log(state)                                      //Ausgabe des Wertes von State in der Console

    } else if (input.value == "Krypton") {                  //Abfrage ob im Eingabefeld "Krypton" geschrieben wurde
        output.innerHTML = stories[3]                       //wenn ja, dann ändern des Textes mit der id "output" zu dem Text, der im Array an Stelle 3 steht
        state = 2;                                          //ändern des Wertes von "state" auf 2
        console.log(state)                                  //Ausgabe des Wertes von State in der Console
    } 
}

//Funktion 2
function Auswahl2() {
    if (input.value == "anhalten") {                        //Abfrage ob im Eingabefeld "anhalten" geschrieben wurde
        output.innerHTML = stories[1];                      //wenn ja, dann ändern des Textes mit der id "output" zu dem Text, der im Array an Stelle 1 steht
        element.remove();

    } else if (input.value == "weiterfliegen") {            //Abfrage ob im Eingabefeld "weiterfliegen" geschrieben wurde
        output.innerHTML = stories[2]                       //wenn ja, dann ändern des Textes mit der id "output" zu dem Text, der im Array an Stelle 2 steht
        element.remove();
    } 
}

//Funktion 3
function Auswahl3() {
    if (input.value == "Schild senken") {                   //Abfrage ob im Eingabefeld "Schild senken" geschrieben wurde
        output.innerHTML = stories[4];                      //wenn ja, dann ändern des Textes mit der id "output" zu dem Text, der im Array an Stelle 4 steht
        element.remove();

    } else if (input.value == "Aufforderung ignorieren") {               //Abfrage ob im Eingabefeld "Aufforderung ignorieren" geschrieben wurde
        output.innerHTML = stories[5]                       //wenn ja, dann ändern des Textes mit der id "output" zu dem Text, der im Array an Stelle 5 steht
        element.remove();
    } 
}

