////////// Exercice  1  //////////
 
function cypher (str, offset) {
    let res = "";
    const codeA  = "a".charCodeAt(0); // character code of "a"
    const extent = 26;                // number of letters in alphabet
    const realoffset = ((offset % extent) + extent) % extent;
    for (let i = 0; i < str.length; i++) {
        const code   = str.charCodeAt(i);
        if ((code >= codeA) && (code <= codeA + extent)) {
            const newcode = ((code-codeA+realoffset) % extent) + codeA;
            res += String.fromCharCode(newcode);
        } else {
            res += str[i];
        }
    }
    return res;
}
 
cypher("abcde", 1);  // -> "bcdef"
cypher("bcdef", -1); // -> "abcde"
cypher("abcde", 13); // -> "nopqr"
cypher("nopqr", 13); // -> "abcde"
 
const key = 13;
function hidden_cypher(str) {
    return cypher(str, key);
}
 
////////// Exercice  2  //////////
 
////////// Exercice  3  //////////
 
sumInteger(1, 5); // -> 15
sumInteger(5, 1); // -> 0
 
sumSquares(1, 5); // -> 55
sumSquares(5, 1); // -> 0
 
////////// Exercice  4  //////////
 
powerLinear(2, 10); // -> 1024
powerLinear(7, 18); // -> 1628413597910449
 
////////// Exercice  5  //////////
 
////////// Exercice  6  //////////
 
convert(666) ;; -> "1010011010"
 
convert2Base(666, 2)  ;; -> '1010011010'
convert2Base(666, 3)  ;; -> '220200'
convert2Base(666, 16) ;; -> '29A'
 
////////// Exercice  7  //////////
 



////////// Exercice  1  //////////
 
// computes a pair of functions [encode, decode] that
// are parameterized by `key`, serve to encode and
// decode strings, and are inverse of each other
function make_cypher(key) {
    function encode(str) {
        return cypher(str, key);
    }
    function decode(str) {
        return cypher(str, -key);
    }
    return [encode, decode];
}

let [enc, dec] = make_cypher(7);
console.log(enc('hello world')); // -> 'olssv dvysk'
console.log(dec('olssv dvysk')); // -> 'hello world'
 
////////// Exercice  2  //////////
 
// computes the greatest common divisor of a and b
// pre: a and b are positive or zero
function pgcd (a, b) {
    if (b === 0)
	return a;
    else
	return pgcd (b, a % b);
}

console.log(pgcd(32, 24)); // -> 8
console.log(pgcd(4, 2)); // -> 2
console.log(pgcd(2, 4)); // -> 2
 
////////// Exercice  3  //////////
 
// computes the sum of the integers ranging from a to b
// pre: a and positive or zero
function sumInteger(a, b) {
    if (b < a)
        return 0;
    else
        return a + sumInteger(a + 1, b);
}

console.log(sumInteger(1, 5)); // -> 15
console.log(sumInteger(5, 1)); // -> 0

// computes the sum of the squares ranging from a to b
// pre: a and positive or zero
function sumSquares(a, b) {
    if (b < a)
        return 0;
    else
        return a * a + sumSquares(a + 1, b);
}

console.log(sumSquares(1, 5)); // -> 55
console.log(sumSquares(5, 1)); // -> 0

function sumGeneric(a, b, f) {
    if (b < a)
        return 0;
    else
        return f(a) + sumGeneric(a + 1, b, f);
}

console.log(sumGeneric(1, 5, function(x){return x * x;})); // -> 55
console.log(sumGeneric(1, 500, function(x){return 1 / (x*x);})); // -> 1.64293
 
////////// Exercice  4  //////////
 
// computes x^n
// pre: n integer positive or zero
function powerLinear(x, n) {
    if (n === 0)
        return 1;
    else
        return x * powerLinear (x, n - 1);
}

console.log(powerLinear(2, 3)); // -> 8

// computes x^n using log approach
// pre: n integer positive or zero
function powerLogarithmic(x, n) {
    if (n === 0) {
        return 1;
    } else if (n % 2 === 0) { // n is even
        let val = powerLogarithmic (x, n / 2);
        return val * val;
    } else                   // n is odd
        return x * powerLogarithmic (x, n - 1);
}

console.log(powerLogarithmic(2, 5)); // -> 32
 
////////// Exercice  5  //////////
 
// computes a boolean telling if `n` is even in a
// recursive manner
function myEven (n) {
    if (n === 0)
        return true;
    else
        return myOdd (n - 1);
}

// computes a boolean telling if `n` is odd in a
// recursive manner
function myOdd (n) {
    if (n === 0)
        return false;
    else
        return myEven (n - 1);
}

console.log(myEven(9)); // false
console.log(myEven(10)); // true
console.log(myOdd(9)); // true
console.log(myOdd(10)); // false

// computes a boolean telling if `n` is even in a
// recursive manner with a boolean logic expression
function myEvenLogic (n) {
    return (n === 0) || myOddLogic(n - 1);
}
function myOddLogic (n) {
    return (n !== 0) && myEvenLogic(n - 1);
}

console.log(myEvenLogic(9)); // false
console.log(myEvenLogic(10)); // true
console.log(myOddLogic(9)); // true
console.log(myOddLogic(10)); // false
 
////////// Exercice  6  //////////
 
////////// Exercice  7  //////////
 
// converts the integer `num` as a string in base `base`
// (version until base 9, recursive)
function convert2Base (num, base) {
    if (num === 0)
        return '';
    else {
        const head = convert2Base(Math.floor(num / base), base);
        const tail = `${num % base}`;
        return head + tail;
    }
}
console.log(convert2Base(666, 2)); // 1010011010
console.log(convert2Base(666, 3)); // 220200

// converts the integer `num` as a string in base `base`
// (version until base 35, recursive)
function convert2BaseFull (num, base) {
    if (num === 0)
        return '';
    else {
        const head = convert2BaseFull(Math.floor(num / base), base);
        const digit = (num % base);
        let tail = '';
        const initCode = 'A'.charCodeAt(0); // shift to reach the correct code value
        if (digit < 10)
            tail = digit.toString();
        else
            tail = String.fromCharCode(digit - 10 + initCode);
        return head + tail;
    }
}
console.log(convert2BaseFull(666, 2)); // 1010011010
console.log(convert2BaseFull(666, 16)); // 666 = 2*16^2 + 9*16+10 = 29A in base 16

// converts the string `nums` in base `base` into a base-10 integer
function convert2Int (nums, base) {
    const len = nums.length;
    if (len === 0)
        return 0;
    else
        return parseInt(nums.substring(len - 1, len), base) +
               convert2Int(nums.substring(0, len - 1), base) * base;
}

console.log(convert2Int('1010011010', 2)); // 666
console.log(convert2Int('220200', 3)); // 666

// check that the functions are inverse from each other
console.log(convert2Int(convert2Base(123456, 3), 3)); // 123456 (identity)
 
////////// Exercice  8  //////////
 
// computes a boolean telling if `str` is a palindrome
// (indeed, with an 'e' at the end)
function isPalindrome(str) {
    const len = str.length;
    if (len <= 1)
        return true;
    else
        return (str[0] === str[len - 1]) &&
        (isPalindrome(str.substring(1, len - 1)));
}

console.log(isPalindrome(''));                      // -> true
console.log(isPalindrome('a'));                     // -> true
console.log(isPalindrome('abba'));                  // -> true
console.log(isPalindrome('able was I,I saw elba')); // -> true
console.log(!isPalindrome('not a palindrome?'));    // -> true
 
// computes a boolean telling if `str1` is an anagram
// (without an 'e' at the end this time) of `str2`
function isAnagram( str1, str2) {
    if (str1.length !== str2.length)
        return false;
    else if (str1.length === 0)
        return true;
    else {
        const headStr1 = str1[0];
        const tailStr1 = str1.substring(1, str1.length);
        const remainStr2 = str2.replace(headStr1,'');
        return str2.includes(headStr1) &&
               isAnagram(tailStr1, remainStr2);
    }
}

console.log(isAnagram('',''));                                  // -> true
console.log(!isAnagram('','OK'));                               // -> true
console.log(!isAnagram('OK',''));                               // -> true
console.log(!isAnagram('abcdde','abcdd'));                      // -> true
console.log(isAnagram('algorithme','logarithme'));              // -> true
console.log(isAnagram('abcdde','ddcbae'));                      // -> true
console.log(!isAnagram('abcdde','abcdee'));                     // -> true
console.log(isAnagram('imaginer','migraine'));                  // -> true
console.log(!isAnagram('c est quoi','une anagramme au fait?')); // -> true
 
