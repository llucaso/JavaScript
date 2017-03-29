function rysujChoinke(star) {
	for (var k = 1; k <= star; k++) {
		var stars=" ";
		for (var i = 0; i < k * 2 - 1; i++) {
			stars += "*";
		}
		console.log(stars);
		stars = ' '; 
		}
}
rysujChoinke(5);