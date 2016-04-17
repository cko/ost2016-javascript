import * as uebung1 from './uebung1';
import * as uebung2 from './uebung2';
import * as uebung3 from './uebung3';

var assert = require('chai').assert;

describe('Übung Grundlagen: Arrays', function() {
    describe('fizzbuzz()', function () {
        it('should replace 3 and 5 with "fizz" or "buzz"', function () {
            assert.deepEqual(uebung1.fizzbuzz([]), []);
            assert.deepEqual(uebung1.fizzbuzz([1,2]), [1,2]);
            assert.deepEqual(uebung1.fizzbuzz([1,2,3,4,5,15]), [1,2,"fizz",4,"buzz","fizzbuzz"]);
        });
    });
});

describe('Übung Grundlagen: Objekte', function() {
    describe('getMyFavoriteBooks()', function () {
        it('it should return a list of valid book objects', function () {
            let books = uebung2.getMyFavoriteBooks()
            assert.isArray(books);
            books.forEach(book => {
                assert.property(book, 'author');
                assert.property(book, 'title');
                assert.property(book, 'year');
            });
        });
    });
});

describe('Übung Grundlagen: JSON', function() {
    describe('getPriceOfProduct()', function () {
        it('it should parse JSON to object and return price', function () {
            let price = uebung3.getPriceOfProduct('{"price":123.49}')
            assert.equal(price, 123.49);
        });
    });
});

