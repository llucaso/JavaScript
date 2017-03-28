var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal = 'Zielone słonie';
var textTable = text.split(' ');
var animalUpperCased = animal.toUpperCase();
var textCharsAfter = text.replace(textTable[0], animalUpperCased);



console.log(textCharsAfter.substr(0, textCharsAfter.length / 2));



