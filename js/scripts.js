alert('(a * a) + (2 * a * b) - (b * b)');
var a = prompt('podaj wartość a');
var b = prompt('podaj wartość b');
var value = (a * a) + (2 * a * b) - (b * b);
alert(value);

console.log('wynik działania ' +  value);

(value > 0) ? console.log('wynik dodatni') : (value < 0) ? console.log('wynik ujemny') : console.log('zero')