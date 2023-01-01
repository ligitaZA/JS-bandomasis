/*
  Surkite klasę "trueFalse", kuri turi 4 metodus:
    metodas1 priima skaičių ir grąžina true jei skaičius didesnis už 100 ir false kitu atveju.
    metodas2 priima žodį ir grąžina true jeigu jis prasideda didžiąja raide ir false kitu atveju.
    metodas3 priima skaičių ir grąžina true jeigu šis yra lyginis ir false kitu atveju.
    metodas4 priima žodį ir grąžina true jeigu šis yra ilgesnis nei 8 raidžių ir false kitu atveju.
*/

class TrueFalse {
  metodas1(number) {
    return number > 100;
  }

  metodas2(word) {
    return word[0] === word[0].toUpperCase();
  }

  metodas3(number) {
    return number % 2 === 0;
  }

  metodas4(word) {
    return word.length > 8;
  }
}

const trueFalse = new TrueFalse();
console.log(trueFalse.metodas1(200)); // true
console.log(trueFalse.metodas1(50)); // false
console.log(trueFalse.metodas2('Hello')); // true
console.log(trueFalse.metodas2('hello')); // false
console.log(trueFalse.metodas3(2)); // true
console.log(trueFalse.metodas3(3)); // false
console.log(trueFalse.metodas4('Hello world')); // true
console.log(trueFalse.metodas4('Hello')); // false