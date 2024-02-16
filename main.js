import { ottelOszthato } from "./fuggvenyek.js";
let valt1 /* deklaráció */
//console.log(ottelOszthato(25));
/* változók láthatósága */

function fv1() {
    {
        let valt1 = 25;
        console.log(`blokkon belül valt1: ${valt1}`)
    }
    console.log(`blokkon kívül, de fv-en belül valt1: ${valt1}`)
    let valt1 = 10; /* lokális változó */
    console.log(`fv1-en belül valt1: ${valt1}`)

}

valt1 = 5 /* globális változó */ /* inicializálom */
//console.log(`főprogramban valt1: ${valt1}`)
//fv1()

function fv2() {
    for (var index = 0; index < 3; index++) {
        console.log(index);
        
    }
    console.log(index)

}
fv2()


// Megjegyzések:
    /* a "var" változó kétféle láthatósággal rendelkezik. Az egyik a modulszintű/globális váltoozó vagy FÜGGVÉNYSZINTŰ(lokális változó)
    "let" változó megadása esetében lehet fájlszintű, vagy BLOKKSZINTŰ */

    /* hoisting, felemelés: ha egy változót/függvényt deklarálok(létrehozok) - [lsd: fv1()] - bárhol a programban, a hatóköre tetején elérhető */