const header = { //header tömb létrehozása
        elso: "Harc megnevezése", // értékadás a tulajdonságnak
        masodik: "Szembenálló felek",// értékadás a tulajdonságnak
        harmadik : "Haderő"// értékadás a tulajdonságnak
    }
    
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

    const formW = [// A tömb létehozása
        {// A tömb első elemét létrehozom
            label: "Harc megnevezése:",//Értékadás
            id: "harc_nev",//Értékadás
        },
        {// A tömb második elemét létrehozom
            label: "1. Harcoló fél:",//Értékadás
            id: "harcolo1",//Értékadás
        },
        {// A tömb harmadik elemét létrehozom
            label: "1. Haderő:",//Értékadás
            id: "hadero1"//Értékadás
        },
        {// A tömb negyedik elemét létrehozom
            label: "2. Harcoló fél:",//Értékadás
            id: "harcolo2",//Értékadás
        },
        {// A tömb ötödik elemét létrehozom
            label: "2. Haderő:",//Értékadás
            id: "hadero2"//Értékadás
        }   
    ]
    generateForm(formW) //Meghivom a függvényt
    
    
    const table = document.createElement('table'); //Létrehozom a table-t
    document.body.appendChild(table);//Hozzá appendelem a body-hoz

    const tbody = document.createElement('tbody'); // Létrehozom a tbody-t
    table.appendChild(tbody); // Hozzá appendelem a table-hez

    generateHeader(header) //Meghivom a függvényt
    
    renderTable(array) //Meghivom a renderTable függvényt és az array paramétert fogja kapni

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
    
        if(!ValidateField(harcnevH, "A mező kitöltése kötelező!")){ //Ha a függvényünk hamissal tér vissza akkor kiirja az error üzenetet
            valid = false; //A valid értéke hamis lesz
        }
    
        if(!ValidateField(harcolo1H, "A mező kitöltése kötelező!")){ //Ha a függvényünk hamissal tér vissza akkor kiirja az error üzenetet
            valid = false; //A valid értéke hamis lesz
        }
    
        if(!ValidateField(hadero1H, "A mező kitöltése kötelező!")){ //Ha a függvényünk hamissal tér vissza akkor kiirja az error üzenetet
            valid = false; //A valid értéke hamis lesz
        }

        if(!ValidateField2(harcolo2H, hadero2H, "A mező kitöltése kötelező!")){ //Ha a függvényünk hamissal tér vissza akkor kiirja az error üzenetet
            valid = false;//A valid értéke hamis lesz
        }
    
    if(valid){
        if(harcolo2V == "" && hadero2V == ""){
        const hadero = { //Létrehozok egy új elemet
            harcnev: harcnevV, //Értéket adok
            harcolo1: harcolo1V,//Értéket adok
            hadero1: hadero1V,//Értéket adok
            }
        array.push(hadero)//Hozzárakom az arrayhez az új elemet

        }
        else {
            const hadero = { //Létrehozok egy új elemet
                harcnev: harcnevV, //Értéket adok
            harcolo1: harcolo1V,//Értéket adok
            harcolo2: harcolo2V,//Értéket adok
            hadero1: hadero1V,//Értéket adok
            hadero2: hadero2V//Értéket adok
            }
        array.push(hadero)//Hozzárakom az arrayhez az új elemet
        }
    }
        thisForm.reset()//thisFormot vagyis a táblázatunkat resetelem
        renderTable(array);//Meghivom a renderTable függvényt mégegyszer és az array paramétert fogja kapni
    })
