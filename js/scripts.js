function getTriangleArea(a,h) {
	var wynik;
	if ( (a <= 0) || (h <= 0)) {
		wynik = 'Nieprawidłowe dane';
	} else {
		wynik = a*h/2;
	}
	return wynik;
}

var triangle1Area = getTriangleArea(10,15);
var triangle2Area = getTriangleArea(-1,25);
var triangle3Area = getTriangleArea(10,10);


console.log(getTriangleArea(10,6));
console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);