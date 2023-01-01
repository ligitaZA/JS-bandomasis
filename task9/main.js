/*
  Sukurkite klasę, kuri priima 4 savybes ir turi 2 metodus.
  Savybės: masinosMarke, masinosModelis, masinosKaina, masinosGamybosMetai.
  Metodai:
    1 metodas tikrina ar mašina brangesnė negu 10 000 eurų ir grąžina true|false.
    2 metodas tikrina ar mašina senesnė negu 2010 ir grąžina mašinos amžių ir tekstą "Antikvaras"|"Šviežiena".
*/

class Car {
  constructor (masinosMarke, masinosModelis, masinosKaina, masinosGamybosMetai){
    this.masinosMarke = masinosMarke;
    this.masinosModelis = masinosModelis;
    this.masinosKaina = masinosKaina;
    this.masinosGamybosMetai = masinosGamybosMetai;
  }
  brangesneNei10k() {
  return this.masinosKaina > 10000;
  }
  senesneNei2010() {
    const currentYear = new Date().getFullYear();
    const age = currentYear - this.masinosGamybosMetai;
    let status = "Antikvaras";
    if (age < 10) {
      status = "Šviežiena";
    }
    return `${age} (${status})`;
  }
}

// pasitikrinimas ar veikia 

const myCar = new Car("Ford", "Mustang", 20000, 2015);

console.log(myCar.masinosMarke); // "Ford"
console.log(myCar.brangesneNei10k()); // true
console.log(myCar.senesneNei2010()); // 8 (Šviežiena)