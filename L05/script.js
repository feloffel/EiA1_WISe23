let myPrompt = prompt("Du bist unterwegs mit deinem Raumschiff und planst dein nächstes Ziel. Möchtest du lieber nach Arrakis oder Krypton fliegen?")

//Handlungsstrang 1//
if (myPrompt == "Arrakis") { //Überprüfung ob Antwort "Arrakis" ist, wenn ja Ausgabe von neuem Prompt//
    let arrakis = prompt("Du startest den Antrieb und fliegst los. Auf einmal leuchtet ein Gefahrensymbol auf deinem Disyplay auf. Möchtest du anhalten oder weiterfliegen?")
    if (arrakis == "anhalten") { //Überprüfung ob Antwort "anhalten" ist, wenn ja, dann Ausgabe von Alert//
        let anhalten = alert("Du findest den Schaden. Ein Weltraumwesen hat deinen Antrieb manipuliert. Du reparierst ihn und erreichst Arrakis wohlauf.")}
    else if (arrakis == "weiterfliegen") { //Überprüfung ob Antwort "weiterfliegen" ist, wenn ja, dann Ausgabe von Alert//
        let weiterfliegen = alert("Du bist kurz davor Arrakis zu erreichen. Plötzlich stoppt dein Raumschiff. Der Antrieb überhitzt und du musst das Schiff in einer Rettungskapsel verlassen. Du erreichst Arrakis mit kleinen Schrammen und siehst wie dein Raumschiff explodiert.")
    
    }

} 

//Handlungsstrang 2//
else if (myPrompt == "Krypton") { //Überprüfung ob Antwort "Krypton" ist, wenn ja Ausgabe von neuem Prompt//
    let krypton = prompt("Du startest den Antrieb und fliegst los. Kurz vor Krypton nähern sich dir fünf Patroullienschiffe. Sie verlangen von dir das Schutzschild zu senken um an Bord kommen zu können. Dir kommt das sehr suspekt vor. Schild senken oder ignorieren?")
    if (krypton == "Schild senken") { //Überprüfung ob Antwort "Schild senken" ist, wenn ja, dann Ausgabe von Alert//
        let schildsenken = alert("Die Patroullien durchsuchen dein Schiff und finden nichts auffälliges. Sie wünschen dir einen schönen Aufenthalt auf Krypton und lassen dich landen.")}
    else if (krypton == "ignorieren") { //Überprüfung ob Antwort "ignorieren" ist, wenn ja, dann Ausgabe von Alert//
        let ignorieren = alert("Die Patroullienschiffe eröffnen das Feuer. Du hast keine Chance. Sie zerstören dein Schild und entern dein Schiff. Du sitzt nun im Gefängnis auf Krypton.")
    
    }
}