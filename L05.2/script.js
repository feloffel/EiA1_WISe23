function frageNachNamen() {                             // Funktion, um einen Namen abzufragen und in einer Variable zu speichern
    var name = prompt("Bitte gib deinen Namen ein:");   // Verwendung von prompt, um den Benutzer nach seinem Namen zu fragen
    return name;                                        //speichern des Namens in einer Variable
}
  
var gespeicherterName = frageNachNamen();               // Aufrufen der Funktion und Speichern des zurückgegebenen Namens in einer Variable

//Texte im Array//
let myArray = [
    "Tom ist unterwegs mit seinem Raumschiff und plant das nächste Ziel. Möchte Tom lieber nach Arrakis oder Krypton fliegen?", 
    "Tom startet den Antrieb und fliegt los. Auf einmal leuchtet ein Gefahrensymbol auf dem Disyplay auf. Möchte Tom anhalten oder weiterfliegen?", 
    "Tom findet den Schaden. Ein Weltraumwesen hat den Antrieb manipuliert. Tom repariert ihn und erreicht Arrakis wohlauf.", 
    "Tom ist kurz davor Arrakis zu erreichen. Plötzlich stoppt das Raumschiff. Der Antrieb überhitzt und Tom muss das Schiff in einer Rettungskapsel verlassen. Tom erreicht Arrakis mit kleinen Schrammen und sieht wie das Raumschiff explodiert.", 
    "Tom startet den Antrieb und fliegt los. Kurz vor Krypton nähern sich Tom fünf Patroullienschiffe. Sie verlangen von Tom das Schutzschild zu senken um an Bord kommen zu können. Tom kommt das sehr suspekt vor. Soll Tom das Schild senken oder ignorieren?", 
    "Die Patroullien durchsuchen Toms Schiff und finden nichts auffälliges. Sie wünschen Tom einen schönen Aufenthalt auf Krypton und lassen Tom landen.", 
    "Die Patroullienschiffe eröffnen das Feuer. Tom hat keine Chance. Sie zerstören Toms Schild und entern das Schiff. Tom sitzt nun im Gefängnis auf Krypton."
];


let myPrompt = prompt(myArray[0])

//Handlungsstrang 1//
if (myPrompt == "Arrakis") {                    //Überprüfung ob Antwort "Arrakis" ist, wenn ja Ausgabe von neuem Prompt//
    let arrakis = prompt(myArray[1])

    if (arrakis == "anhalten") {                //Überprüfung ob Antwort "anhalten" ist, wenn ja, dann Ausgabe von Alert//
        let anhalten = alert(myArray[2])}
    else if (arrakis == "weiterfliegen") {      //Überprüfung ob Antwort "weiterfliegen" ist, wenn ja, dann Ausgabe von Alert//
        let weiterfliegen = alert(myArray[3])
    
    }

} 

//Handlungsstrang 2//
else if (myPrompt == "Krypton") {               //Überprüfung ob Antwort "Krypton" ist, wenn ja Ausgabe von neuem Prompt//
    let krypton = prompt(myArray[4])
    if (krypton == "Schild senken") {           //Überprüfung ob Antwort "Schild senken" ist, wenn ja, dann Ausgabe von Alert//
        let schildsenken = alert(myArray[5])}
    else if (krypton == "ignorieren") {         //Überprüfung ob Antwort "ignorieren" ist, wenn ja, dann Ausgabe von Alert//
        let ignorieren = alert(myArray[6])
    
    }
}