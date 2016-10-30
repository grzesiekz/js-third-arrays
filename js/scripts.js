var womenNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var menNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

allNames = womenNames.concat(menNames);

var newName = 'Marian';

if (allNames.indexOf(newName) == -1) {
	allNames.push(newName);
} else {
	console.log('Marian jest już, nomen omen, wstawiony ;)');
	// to na wypadek, gdyby ktoś wcześniej ręcznie dodał Mariana do tablicy
}

console.log('Zawartość tablicy, kontrolnie: ', allNames);
//oczywiście ostatnia linijka zawsze wyświetli zawartość tablicy