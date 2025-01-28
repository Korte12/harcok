/**
     * Ezzel a fügvénnyel a táblázatunkat tudjuk létrehozni
     * 
     */
function renderTable(data, tbody){//Elkezdem megirni a render függvényt
    tbody.innerHTML = ''; // tbody innerHtml-je üres string

    for (element of data) {//Elkezdem a for ciklust. Kiválasztom az array datáját
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

        tbody.appendChild(row); //Hozzá appendelem a sort

        if (element.harcolo2 && element.hadero2) {//Ha a harcolo2 és hadero2
            const row1 = document.createElement('tr');//Létrehozok egy tr-t

            const harcolo2 = document.createElement('td');//Létrehozok egy td-t
            harcolo2.innerHTML = element.harcolo2;//Megadom hogy mi legyen a cella értéke
            row1.appendChild(harcolo2);//Hozzá appendelem a sorhoz

            const hadero2 = document.createElement('td');//Létrehozok egy td-t
            hadero2.innerHTML = element.hadero2;//Megadom hogy mi legyen a cella értéke
            row1.appendChild(hadero2);//Hozzá appendelem a sorhoz
            tbody.appendChild(row1); //Hozzá appendelem a tablebody-hoz
        }
    }
}

/**
*  Ez a függvény azt ellenőrzi hogy egy adott input mező üres-e és ha igen akkor hibaüzenetet jelenit meg
* 
*/
function ValidateField(inputElement, ErrorMessage){//Függvényt definiálunk
    let valid = true;//A valid értéke igaz
    if(inputElement.value === ""){//Ha az inputElement üres
        const parentElement = inputElement.parentElement //Az inputElement szülő elemét hozzá rendeljük a parentElementhez
        const error = parentElement.querySelector(".error"); // Megkeressük az első elemet amin rajta van az error
        if(error) { //Ha az error
            error.innerHTML = ErrorMessage; // Kiirjuk a hibaüzenetet
        }
        valid = false // A valid változó értékét hamisra cseréljük
    }
    return valid //Valid értékkel térek vissza
}

/**
 * Ezzel a függvény ellenőrzi két mező értékét és ha barmelyik üres akkor hibaüzenetet jelenit meg
 * 
 */
function ValidateField2(firstElement, secondElement, ErrorMessage){ //Függvényt definiálunk
    let valid = true //A valid értéke igaz
    if(firstElement.value != "" && !ValidateField(secondElement, ErrorMessage)){ // Ellenőrizzük hogy a két mező közül az egyik kivan e töltve és ha igen akkor a másik mezőt validáljuk
        valid = false //A valid értéke hamis
    }
    if(secondElement.value != "" && !ValidateField(firstElement, ErrorMessage)){ // Ellenőrizzük hogy a két mező közül az egyik kivan e töltve és ha igen akkor a másik mezőt validáljuk
        valid = false //A valid értéke hamis
    }
    return valid //A valid értékkel térünk vissza
}

/**
 * Ez a függvény táblázatunk fejlécét hozza létre
 * 
 */
function generateHeader(headerW){ //Függvényt definiálunk
    const thead = document.createElement('thead'); //Létrehozok egy thead elemet
    table.appendChild(thead);//Hozzá appendelem a táblázathoz
    const tr = document.createElement('tr');//Létrehozok egy sor elemet
    thead.appendChild(tr);//Hozzá appendelem a fej részhez
        for(const i in headerW){ //Végig iterálok a header objektumon
            const th = document.createElement('th') //Létrehozok egy th elemet
            th.innerHTML = headerW[i] //A th tartalma a header objektumban eltárolt értékek lesznek
            tr.appendChild(th) //Hozzá appendeljük a sorhoz a th-t
        }
     
    }

/**
 * Ez a függvény a formunkat hozza létre
 * 
 */
    function generateForm(formD){  //Függvényt definiálunk
        const form = document.createElement('form') //Létrehozom a formot
        document.body.appendChild(form) //Hozzá appendelem a body-hoz
        form.id = "form" //A form id-ja form
        form.action = "#" //A form action-je #
    
        for(let i = 0; i < formD.length; i++ ){  //A form összes elemén végig megyünk egy ciklussal
            const div =  document.createElement('div') //Létrehozok egy div elemet
            form.appendChild(div) //Hozzá appendelem a formhoz
            
            const label = document.createElement('label') //Létrehozok egy label elemet
            div.appendChild(label) //Hozzá appendelem a div-hez
    
            label.htmlFor = formW[i].id //htmlFor egyenlő lesz a form-idjával
            label.innerHTML = formW[i].label //A label innerHTML értéke a form1 objektumban eltárolt label lesz
    
            const br = document.createElement('br') //Sortörést hozok létre
            div.appendChild(br) //Hozzá appendelem a div-hez
    
            const input = document.createElement('input') //Inputot hozok létre
            div.appendChild(input)//Hozzá appendelem a div-hez
            input.type = "text" //Input tipusa text
            input.id = formW[i].id //Input id megegyezik az objektumban eltárolt id-val
            input.name = formW[i].id //Input name megegyezik az objektumban eltárolt id-val
    
            const br2 = document.createElement('br') //Sortörést hozok létre
            div.appendChild(br2) //Hozzá appendelem a div-hez
    
            const span = document.createElement('span') //Spant hozok létre
            div.appendChild(span) //Hozzá appendelem a div-hez
            span.className = "error" //A span classa az error lesz
             
            const br3 = document.createElement('br') //Sortörést hozok létre
            div.appendChild(br3) //Hozzá appendelem a div-hez
            
        }
    
        const button = document.createElement('button') //Létrehozok egy gombot
        button.innerHTML = "Hozzáadás" //A gomb értéke a "Hozzáadás" szöveg lesz
        form.appendChild(button) //Hozzá appendelem a formhoz a gombot
    }

