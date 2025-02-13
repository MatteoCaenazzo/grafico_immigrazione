function leggiFile(input){

    let file = input.files[0] //presa in input del file
    let lettoreF = new FileReader() //creazione oggetto filereader
    lettoreF.readAsText(file);
    
    lettoreF.onload = function() {
        let contenuto = lettoreF.result; // Contenuto del file letto
        creaTab(contenuto);
    }
}

function creaTab(contenuto){
    var conte = contenuto.split("\n");//divide il contenuto del csv in righe
    var c = document.getElementById("grafico");
    var ctx = c.getContext("2d");
    ctx.moveTo(50,0);
    ctx.lineTo(50, 800);
    ctx.stroke();
    ctx.lineTo(1880,800);
    ctx.stroke();
    ctx.font = "10px Arial";
    for (var i = 0; i < 20; i++){
        ctx.fillText(10000*i,5,800-((10000*i)/250));
        ctx.moveTo(50,795-(800/20)*i);
        ctx.lineTo(45,795-(800/20)*i);
        ctx.stroke();
    }
    for (var i = 1; i < conte.length; i++){
        ctx.fillText(1996+i,38+70*i,815);
        ctx.moveTo(50+70*i,800);
        ctx.lineTo(50+70*i,805);
        ctx.stroke();
    }
    ctx.moveTo(50,800);
    var an = 50
    for (var j = 0; j < conte.length; j++){ //per ogni riga
        var contenitore = conte[j].split(","); //divide il ogni riga csv alla virgola
        var tabella = document.getElementById("sus"); //fa un get della tabella
        var riga = document.createElement("tr"); //crea oggetto riga
        var ele_anno = document.createElement("th"); //crea oggetto colonna
        ele_anno.innerHTML=contenitore[0].replaceAll('"', "");//inserisce il valore nella colonna e rimuove le virgolette
        var ele_numero = document.createElement("th"); //crea un secondo oggetto colonna
        ele_numero.innerHTML=contenitore[1].replaceAll('"', "");//inseerisce il valore nella colonna e rimuove le virgolette
        riga.appendChild(ele_anno); //rende la colonna anno figlia della riga
        riga.appendChild(ele_numero); //rende la colonna numero figlia della riga
        tabella.appendChild(riga); //rende la riga figlia della tabella
        console.log(parseInt(contenitore[1].replaceAll('"', "")))
        ctx.lineTo(an, 800-(parseInt(contenitore[1].replaceAll('"', ""))/250));
        ctx.font = "15px Arial";
        ctx.fillText(contenitore[1].replaceAll('"', ""),an + 15, 790-(parseInt(contenitore[1].replaceAll('"', ""))/250));
        an+=70;
        ctx.stroke();
    }
}
