const morseTools = require('./morse-tools/morse-tools');
const obfuscationTools = require('./obfuscation-tools/obfuscation-tools');

encode = (line) => {
	const sanitisedLine = sanitiseString(line);
	const characterArray = sanitisedLine.trim().split('');
	let encodedLine = '';

	characterArray.forEach( (character, idx) => {
		const peekNextCharacter = characterArray[idx + 1] ? characterArray[idx + 1] : undefined;

		let encodedCharacter = '';

		if (morseTools.isValidCharacter(character)) {
			encodedCharacter = morseTools.translateCharacterToMorse(character, peekNextCharacter);
			encodedCharacter = obfuscationTools.obfuscate(encodedCharacter);
		}

		return encodedLine += encodedCharacter;
	});

	return encodedLine;
};

sanitiseString = (str) => {
	return str.replace(/[^a-zA-Z0-9,.\s]/g, "")
}

module.exports = {encode};
