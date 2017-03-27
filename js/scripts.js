var txt = 'Ala ma kota, kot ma Alę';
var indexKota = txt.indexOf('kot');

if (indexKota == -1) {
  console.log('kot nie występuje w tekście');
} else {
  console.log(txt[indexKota]);
}