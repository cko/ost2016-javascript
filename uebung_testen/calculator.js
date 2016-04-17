
export function add (a, b) {
    console.log('add called');
    return a + b;
}

export function sub (a, b) {
    let result = a - b;;
    return a - b;
}

export function addEvenNumbers (numberArray){
    return numberArray.filter(num => numb % 2 == 0).reduce((a, b) => a+b, 0);
}

