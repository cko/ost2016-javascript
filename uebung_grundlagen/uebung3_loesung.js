export function getPriceOfProduct (json) {
    var object = JSON.parse(json);
    return object.price;
}

