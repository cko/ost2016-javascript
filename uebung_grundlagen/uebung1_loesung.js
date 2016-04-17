export function fizzbuzz (numberArray) {
    return numberArray.map(num => {
        return num % 3 == 0 && num % 5 == 0? "fizzbuzz":
          num % 5 == 0? "buzz":
          num % 3 == 0? "fizz":
          num;
    });
}

