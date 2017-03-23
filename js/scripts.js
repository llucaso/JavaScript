alert('(a * a) + (2 * a * b) - (b * b)');
var a = prompt('podaj wartość a');
var b = prompt('podaj wartość b');
var value = (a * a) + (2 * a * b) - (b * b);
alert(value);

console.log('wynik działania ' +  value);

if ( value > 0 ) {
	console.log('wynik dodatni');
} else if ( value < 0 ) {
	console.log('wynik ujemny');
} 
else {
	console.log('zero');
}


