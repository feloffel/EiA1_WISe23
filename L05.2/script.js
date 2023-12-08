function frageNachNamen() {                             // Funktion, um einen Namen abzufragen und in einer Variable zu speichern
    var name = prompt("Bitte gib deinen Namen ein:");   // Verwendung von prompt, um den Benutzer nach seinem Namen zu fragen
    return name;                                        //speichern des Namens in einer Variable
}
  
var gespeicherterName = frageNachNamen();               // Aufrufen der Funktion und Speichern des zurückgegebenen Namens in einer Variable

//Texte im Array//
let myArray = [
    ""+gespeicherterName+" ist unterwegs mit seinem Raumschiff und plant das nächstes Ziel. Möchte "+gespeicherterName+" lieber nach Arrakis oder Krypton fliegen?", 
    ""+gespeicherterName+" startet den Antrieb und fliegt los. Auf einmal leuchtet ein Gefahrensymbol auf dem Disyplay auf. Möchte "+gespeicherterName+" anhalten oder weiterfliegen?", 
    ""+gespeicherterName+" findet den Schaden. Ein Weltraumwesen hat den Antrieb manipuliert. "+gespeicherterName+" repariert ihn und erreicht Arrakis wohlauf.", 
    ""+gespeicherterName+" ist kurz davor Arrakis zu erreichen. Plötzlich stoppt das Raumschiff. Der Antrieb überhitzt und "+gespeicherterName+" muss das Schiff in einer Rettungskapsel verlassen."+gespeicherterName+" erreicht Arrakis mit kleinen Schrammen und sieht wie das Raumschiff explodiert.", 
    ""+gespeicherterName+" startet den Antrieb und fliegt los. Kurz vor Krypton nähern sich "+gespeicherterName+" fünf Patroullienschiffe. Sie verlangen von "+gespeicherterName+" das Schutzschild zu senken um an Bord kommen zu können."+gespeicherterName+" kommt das sehr suspekt vor. Soll "+gespeicherterName+" das Schild senken oder ignorieren?", 
    "Die Patroullien durchsuchen "+gespeicherterName+"s Schiff und finden nichts auffälliges. Sie wünschen "+gespeicherterName+" einen schönen Aufenthalt auf Krypton und lassen "+gespeicherterName+" landen.", 
    "Die Patroullienschiffe eröffnen das Feuer. "+gespeicherterName+" hat keine Chance. Sie zerstören "+gespeicherterName+"s Schild und entern das Schiff. "+gespeicherterName+" sitzt nun im Gefängnis auf Krypton."
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