(********* Exercice  1  *********)
 
function factorial(n) {
    if (n <= 1)
        return 1;
    else
        return n * factorial(n-1);
}
 
(********* Exercice  2  *********)
 
function factorial(n: number) : number {
    if (n <= 1)
        return 1;
    else
        return n * factorial(n-1);
}

console.log(factorial("5"));
 
(********* Exercice  3  *********)
 
(********* Exercice  4  *********)
 
(********* Exercice  5  *********)
 
convert(666) ;; -> "1010011010"
 
convert2Base(666, 2)  ;; -> '1010011010'
convert2Base(666, 3)  ;; -> '220200'
convert2Base(666, 16) ;; -> '29A'



////////// Exercice  3  //////////
 
// displays the list of powers of two up until `max`
function powers2 (max) {
    for (let i = 0; i < max; i++) {
        console.log(i, 2 ** i);
    }
}

powers2(60); // 60 is an arbitrary value

const twobig = 2n;
console.log(twobig ** 54n);
console.log(twobig ** 55n); // different from 2**55 (without the 'n's)

// console.log(twobig + 5); // type error
console.log(twobig + '5'); // no error, implicit conversion

// examples taken from the documentation
const str = 'To be, or not to be, that is the question.';
console.log(str.includes('To be')); // true
console.log(str.includes('question')); // true
console.log(str.includes('nonexistent')); // false
console.log(str.includes('To be', 1)); // false
console.log(str.includes('TO BE')); // false
console.log(str.includes('')); // true
 
////////// Exercice  4  //////////
 
// computes the square of its argument `x`
function square (x) {
    return x * x;
}
console.log(square(5));

// computes the discriminant of the polynomial ax^2+bx+c
function discriminant (a, b, c) {
    return (b * b) - (4 * a * c);
}
console.log(discriminant(2, 2, 2));

// evaluates the polynomial ax^2+bx+c
function evalQuadratic (a, b, c, x) {
    return a * x * x + b * x + c;
}
console.log(evalQuadratic(1, 1, 1, 1));

// computes the first root the polynomial ax^2+bx+c
function root1 (a, b, c) {
    const d = discriminant(a, b, c);
    if (d >= 0) {
        return (-b - Math.sqrt(d)) / (2 * a);
    } else {
        throw new Error('racine complexe');
    }
}

const r = root1(1, 2, 1);
console.log(r);
// The code requires a "try-catch" block in case of error, otherwise
// it will fail at the error point (duh)

// idem for root2

// computes a string characterizing the roots of the
// polynomial ax^2+bx+c. This string can either be
// 'Two real roots', 'Two complex roots' or 'One real root'.
function caracQuadratic (a, b, c) {
    const d = discriminant(a, b, c);
    if (d > 0) return 'Two real roots';
    else if (d < 0) return 'Two complex roots';
    else return 'One real root';
}
console.log(caracQuadratic(1, 1, 1));
console.log(caracQuadratic(1, 2, 1));
console.log(caracQuadratic(1, 3, 1));
 
// Version with some test cases using the mocha library

function square (x) {
    return x * x;
}

function discriminant (a, b, c) {
    return (b * b) - (4 * a * c);
}

function evalQuadratic (a, b, c, x) {
    return a * x * x + b * x + c;
}

function racine1 (a, b, c) {
    const d = discriminant(a, b, c);
    if (d >= 0) {
	return (-b - Math.sqrt(d)) / (2 * a);
    } else {
	throw new Error('racine complexe');
    }
}

const r = racine1(1, 2, 1);
// The code requires a "try-catch" block in case of error, otherwise
// it will fail at the error point (duh)

// idem for racine2

function caracQuadratic (a, b, c) {
    const d = discriminant(a, b, c);
    if (d > 0) return 'Two real roots';
    else if (d < 0) return 'Two complex roots';
    else return 'One real root';
}

var assert = require('assert');

describe('square test cases', function() {
    it('square positive case', function() {
	assert.equal(square(5), 25);
    });
    it('square negative case', function() {
	assert.equal(square(-5), 25);
    });
});

describe('discrimant test cases', function() {
    it('discrimant negative case', function() {
	assert.equal(discriminant(2,2,2), -12);
    });
    it('discrimant zero case', function() {
	assert.equal(discriminant(1,2,1), 0);
    });
    it('discrimant positive case', function() {
	assert.equal(discriminant(1,4,1), 12);
    });
});

//etc...
 
////////// Exercice  5  //////////
 
// converts the integer `num` as a string in base `base`
// (version until base 9, imperative)
function convert2Base (num, base) {
    let res = '';
    while (num > 0) {
        res = `${num % base}` + res;
        num = Math.floor(num / base);
    }
    return res;
}
console.log(convert2Base(666, 2)); // 1010011010
console.log(convert2Base(666, 3)); // 220200

// converts the integer `num` as a string in base `base`
// (version until base 35, imperative)
function convert2BaseFull (num, base) {
    let res = '';
    while (num > 0) {
        const initCode = "A".charCodeAt(0); // char code for "A"
        const digit = num % base;
        const sdigit = (digit < 10) ? digit.toString() :
              String.fromCharCode(digit - 10 + initCode);
        res = sdigit + res;
        num = Math.floor(num / base);
    }
    return res;
}
console.log(convert2BaseFull(666, 2)); // 1010011010
console.log(convert2BaseFull(666, 16)); // 666 = 2*16^2 + 9*16+10 = 29A in base 16

// converts the string `nums` in base `base` into a base-10 integer
function convert2Int (nums, base) {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        res *= base;
        res = res + parseInt(nums[i]);
    }
    return res;
}

console.log(convert2Int('1010011010', 2)); // 666
console.log(convert2Int('220200', 3)); // 666

// check that the functions are inverse from each other
console.log(convert2Int(convert2Base(123456, 3), 3)); // 123456 (identity)
 
