"use sctrict";

//z classy se vytváří instance, neboli objekty
class Typek {
  uka(x, y) {
    return `Zkuřka ${x} a ${y}`;
  }
}

const test = new Typek();
let vysledek = test.uka("pan Dan", "typek Vojta");
//console.log(vysledek);

//constructor nastaví defaultní hodnoty pro instance classy
class Firma {
  constructor() {
    this.nazev = "Název firmy";
    this.sidlo = "Praha";
    this.zamestnanci = [];
  }
}

const defaultFirma = new Firma(); //new firma automaticky zavolá contructor - s defaultními hodnotami
//console.log(defaultFirma);

//Samozřejmě nechic pro všechny stejnou firmu, tzn. předám constructoru nějaké parametry
class LepsiFirma {
  constructor(nazev, sidlo) {
    this.nazev = nazev;
    this.sidlo = sidlo;
  }

  testMetoda() {
    return "Mohu zavolat testMetodu";
  }
}

const google = new LepsiFirma("Google", "NY");
//console.log(google);

//Dědičnost
class NejLepsiFirma extends LepsiFirma {
  constructor(nazev, sidlo, obrat) {
    /* Jakmile potřebujeme ve třídě potomka konstruktor, musíme v něm nejprve zavolat konstruktor předka pomocí funkce super(), případně mu předat potřebné parametry. */
    super(nazev, sidlo);
    this.obrat = obrat;
  }
}

const nejFirma = new NejLepsiFirma("MojeFirma", "Turnov", 10);
console.log(nejFirma);

///////////////TEST///////////

/*const text = 'lsakj45345dfv';

function forLoopTest(text){
  const arrText = Array.from(text)

const counter = {

}
  for(let test of arrText){

  if(counter[test]){
    counter[test] = counter[test] + 1

  } else {
    counter[test]= 1
  }

}

 return counter
}

console.log(forLoopTest(text))


const arrText2 = Array.from(text).reduce((counter, test) => {
    if(counter[test]){

    counter[test] = counter[test] + 1
    return counter
  }
    counter[test]= 1

  return counter
},{}) */
//////////////////TEST/////
