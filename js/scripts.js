var element = document.getElementById('addElem');
var list = document.getElementById('Lista');
var number = 1;



element.addEventListener('click', function(e) {

	var newLi = document.getElementById('list');
	var newElem = document.createElement('li');
	newElem.innerHTML = 'item' + number++;
	newLi.appendChild(newElem);}
);






