//function fuellen

function fuellen(){
    //daten sammeln
    let sammeln ="";

    //prüfen auff inhalt
    let status = false;

    //daten einfügen
    let beschreibung =[];

    // daten array durchlaufen
    for (let x = 0; x < daten.length; x++){
        status = false;

        //wenn beschreibung inhalt größer 0
        if (beschreibung.length > 0){

            //beschreibung array durchlaufen
            for (let y = 0; y < beschreibung.length; y++){

                // wenn inhalt beschreibung und daten gleich 
                // dann status true 
                // und schleife wird unterbrochen
                if (beschreibung[y] == daten[x].abteilung){
                    status = true;
                    break;
                }
            }
        }
        // wenn daten ist false
        // dann werden daten hinzugefügt
        if (status ==false)
        beschreibung.push(daten[x].abteilung);
    }

    let abteilung = "";
    let produkt = "";

        // beschreibung array durchlaufen
        for (let z = 0; z < beschreibung.length; z++){

            sammeln += lT(beschreibung[z]);
            abteilung = beschreibung[z];

            //daten array durchlaufen
            for (let p = 0; p < daten.length; p++){

            // wenn beschreibung array und daten 
            // array ist gleich dann in die 
            // beschreibungsliste hinzufügen
            if (beschreibung[z] == daten[p].abteilung){
                sammeln += lE(`${daten[p].produkt}`);
                produkt = daten[p].produkt;
             }
        }
    }
     // daten werden an Html element übergeben
     a.innerHTML = `<dl>${sammeln}</dl>`;
     t.innerHTML = `Das Produkt ${produkt}
     finden sie in der Abteilung
     für ${abteilung} <hr>`;
}