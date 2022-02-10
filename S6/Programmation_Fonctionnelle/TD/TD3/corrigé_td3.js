////////// Exercice  1  //////////
 
////////// Exercice  2  //////////
 
////////// Exercice  3  //////////
 
function fact(n, p) {
    if (n<=1n)
	return p;
    else
	return fact(n-1n, n*p);
}
 
////////// Exercice  4  //////////
 
const memo = {};
 
const set = [7,3];
const v   = 10;
const key = `${v}[${set}]`;
memo[key] = true;
memo; // -> { '10[7,3]': true }
 
