// Function für button onclick

function hinzu(){
    daten.push({
        abteilung: s.value,
        produkt: i.value
        
    });

                   
   // Eingabe Feld Leeren
   
    i.value ="";
    s.value ="Obst";

   
   // Gesamtdaten feststellen
   // und schreiben
   
    fuellen();
}