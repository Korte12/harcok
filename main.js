const header = [ //header tömb létrehozása
    { 
        elso: "Harc megnevezése", // értékadás a tulajdonságnak
        masodik: "Szembenálló felek",// értékadás a tulajdonságnak
        harmadik : "Haderő"// értékadás a tulajdonságnak
    }
    ];
    
    const array = [ // tömb létrehozása
    { 
        harcnev : "Rákóczi szabadságharc",// értékadás a tulajdonságnak
        harcolo1 : "Kuruc",// értékadás a tulajdonságnak
        hadero1 : "70.000",// értékadás a tulajdonságnak
        harcolo2 : "Labanc",// értékadás a tulajdonságnak
        hadero2 : "60.000"// értékadás a tulajdonságnak
    },
    { 
        harcnev : "48-as szabadságharc",// értékadás a tulajdonságnak
        harcolo1 : "Osztrák császárság (+ Orosz birodalom)",// értékadás a tulajdonságnak
        hadero1 : "170.000 (+ 200.000)",// értékadás a tulajdonságnak
        harcolo2 : "Magyar királyság",// értékadás a tulajdonságnak
        hadero2 : "170.000"// értékadás a tulajdonságnak
    },
    { 
        harcnev : "I. világháború",// értékadás a tulajdonságnak
        harcolo1 : "Antant",// értékadás a tulajdonságnak
        hadero1 : "43 millió",// értékadás a tulajdonságnak
        harcolo2 : "Központi hatalmak",// értékadás a tulajdonságnak
        hadero2 : "25 millió"// értékadás a tulajdonságnak
    },
    { 
        harcnev : "Bosworthi csata",// értékadás a tulajdonságnak
        harcolo1 : "Angolok (York + Lancester)",// értékadás a tulajdonságnak
        hadero1 : "15.000",// értékadás a tulajdonságnak
    }
    ];
    
    
    const table = document.createElement('table'); //Létrehozom a table-t
    document.body.appendChild(table);//Hozzá appendelem a body-hoz

    const thead = document.createElement('thead');//Létrehozom a thead-et
    table.appendChild(thead);//Hozzá appendelem a table-hez

    const tr = document.createElement('tr');//Létrehozom a tr-t
    thead.appendChild(tr);//Hozzá appendelem a thead-hez

    const tbody = document.createElement('tbody'); // Létrehozom a tbody-t
    table.appendChild(tbody); // Hozzá appendelem a table-hez

    const harcnev = document.createElement('th')//Létrehozok egy th elemet
    harcnev.innerHTML = header[0].elso //Megadom az értékét
    tr.appendChild(harcnev);//Hozzá appendelem a sorhoz

    const harcolo = document.createElement('th')//Létrehozok egy th elemet
    harcolo.innerHTML = header[0].masodik//Megadom az értékét
    tr.appendChild(harcolo)//Hozzá appendelem a sorhoz

    const hadero = document.createElement('th');//Létrehozok egy th elemet
    hadero.innerHTML = header[0].harmadik//Megadom az értékét
    tr.appendChild(hadero)//Hozzá appendelem a sorhoz

    function renderTable(){//Elkezdem megirni a render függvényt
        const tablebody = tbody;//Létrehozok egy tablebody-t aminek az értéke tbody
        tbody.innerHTML = ''; // tbody innerHtml-je üres string
    
        for (element of array) {//Elkezdem a for ciklust. Kiválasztom az array ,,element"-jét
            let row = document.createElement('tr');//Létrehozok egy tr-t
    
            const harcnevC = document.createElement('td'); //Létrehozok egy td-t
            harcnevC.innerHTML = element.harcnev; //Megadom az innerHTML értékét
            harcnevC.rowSpan = element.hadero2 ? 2 : 1; // rowSpan-t vezetek be a megfelelő elrendezés érdekében
            row.appendChild(harcnevC);//Hozzá appendelem a sorhoz
    
            const harcolo1 = document.createElement('td');//Létrehozok egy td-t
            harcolo1.innerHTML = element.harcolo1;//Megadom az innerHTML értékét
            row.appendChild(harcolo1);//Hozzá appendelem a sorhoz
    
            const hadero1 = document.createElement('td');//Létrehozok egy td-t
            hadero1.innerHTML = element.hadero1;//Megadom az innerHTML értékét
            row.appendChild(hadero1);//Hozzá appendelem a sorhoz
    
            tablebody.appendChild(row); //Hozzá appendelem a sort
    
            if (element.harcolo2 && element.hadero2) {//If elágazás létrehozása
                const row1 = document.createElement('tr');//Létrehozok egy tr-t
    
                const harcolo2 = document.createElement('td');//Létrehozok egy td-t
                harcolo2.innerHTML = element.harcolo2;//Megadom hogy mi legyen a cella értéke
                row1.appendChild(harcolo2);//Hozzá appendelem a sorhoz
    
                const hadero2 = document.createElement('td');//Létrehozok egy td-t
                hadero2.innerHTML = element.hadero2;//Megadom hogy mi legyen a cella értéke
                row1.appendChild(hadero2);//Hozzá appendelem a sorhoz
                tablebody.appendChild(row1); //Hozzá appendelem a tablebody-hoz
            }
        }
    }
    
    renderTable() //Meghivom a renderTable függvényt
    
    const form = document.getElementById("form") //Lekérem a html form id-ját
    form.addEventListener('submit', function(e){//Eseménykezelőt adok a form-hoz
        e.preventDefault()//Megakadályozom hogy a böngésző alapártelmezetten lefusson
        const harcnevH = document.getElementById("harc_nev")//Lekérem a html form id-ját
        const harcolo1H = document.getElementById("harcolo1")//Lekérem a html form id-ját
        const harcolo2H = document.getElementById("harcolo2")//Lekérem a html form id-ját
        const hadero1H = document.getElementById("hadero1")//Lekérem a html form id-ját
        const hadero2H = document.getElementById("hadero2")//Lekérem a html form id-ját
    
        const harcnevV = harcnevH.value ///Eltárolom egy változóban az értéket
        const harcolo1V = harcolo1H.value///Eltárolom egy változóban az értéket
        const harcolo2V = harcolo2H.value///Eltárolom egy változóban az értéket
        const hadero1V = hadero1H.value///Eltárolom egy változóban az értéket
        const hadero2V = hadero2H.value//Eltárolom egy változóban az értéket

        const thisForm = e.currentTarget //Az aktuális form
        const errorElements = thisForm.querySelectorAll('.error') //Errorokat eltárolom egy változóban
    
        for(const i of errorElements){ //Végigmegyek az errorokon és "" ra állitom az értéküket
            i.innerHTML = ""
        }
    
        let valid = true; // A valid változó értéke igaz
    
        if(harcnevV === ""){ // Ha az harc név mező üres
            const parent = harcnevH.parentElement; // Eltárolom egy változóban a harc nevet
            const errors = parent.querySelector(".error"); // Megkeressük az első elemet amin rajta van az error
            if(errors != undefined) { // Ha találtunk ilyen mezőt akkor -->
                errors.innerHTML = "A mező kitöltése kötelező!"; // Kiirjuk a hibaüzenetet
            }
            valid = false; // A valid változó értékét hamisra cseréljük
        }
    
        if(harcolo1V === ""){ // Ha az harcolo mező üres
            const parent = harcolo1H.parentElement; // Eltárolom egy változóban a harcolót
            const errors = parent.querySelector(".error"); // Megkeressük az első elemet amin rajta van az error
            if(errors != undefined) { // Ha találtunk ilyen mezőt akkor -->
                errors.innerHTML = "A mező kitöltése kötelező!"; // Kiirjuk a hibaüzenetet
            }
            valid = false; // A valid változó értékét hamisra cseréljük
        }
    
        if(hadero1V === ""){ // Ha az haderő mező üres
            const parent = hadero1H.parentElement; // Eltárolom egy változóban a haderőt
            const errors = parent.querySelector(".error"); // Megkeressük az első elemet amin rajta van az error
            if(errors != undefined) { // Ha találtunk ilyen mezőt akkor -->
                errors.innerHTML = "A mező kitöltése kötelező!"; // Kiirjuk a hibaüzenetet
            }
            valid = false; // A valid változó értékét hamisra cseréljük
        }
    
    if(valid){
        const new_person = { //Létrehozok egy új elemet
            harcnev: harcnevV, //Értéket adok
            harcolo1: harcolo1V,//Értéket adok
            harcolo2: harcolo2V,//Értéket adok
            hadero1: hadero1V,//Értéket adok
            hadero2: hadero2V//Értéket adok
        }
        array.push(new_person)//Hozzárakom az arrayhez az új elemet
        thisForm.reset()//thisFormot vagyis a táblázatunkat resetelem
        renderTable();//Meghivom a renderTable függvényt mégegyszer
    }
})
