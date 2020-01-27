
obfuscate = (morse) => {
	const asciiBegin = 64;
	const groupedSymbolCount = countGroupedSymbols(morse);

	let obfuscatedMorse = '';
	const dot = '.';
	const dash = '-';

	groupedSymbolCount.forEach( symbolCount => {
		const symbol = symbolCount[0];
		const count = symbolCount[1];

		if (symbol === dot) {
			obfuscatedMorse += count;
		} else if (symbol === dash) {
			obfuscatedMorse += String.fromCharCode(asciiBegin + count);
		} else {
			obfuscatedMorse += symbol;
		}
	})

	return obfuscatedMorse;
}

countGroupedSymbols = (morse) => {
	let grouping = morse.match(/([\.\-|\/])\1*/g) || [];
	return grouping.map(function(item){
		return [item[0], item.length];
	});
}



module.exports = {obfuscate};
