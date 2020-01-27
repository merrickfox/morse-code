const MORSE_MAP = require('../morse-map');

translateCharacterToMorse = (character, nextCharacter) => {
	const upperCaseCharacter = character.toUpperCase();
	const wordSeparator = '/';
	const letterSeparator = '|';
	const space = ' ';

	if (upperCaseCharacter === space &&  nextCharacter) return wordSeparator;
	else if (nextCharacter &&  nextCharacter !== space) return  MORSE_MAP[upperCaseCharacter] + letterSeparator;
	else return MORSE_MAP[upperCaseCharacter];
}

isValidCharacter = (character) => {
	const upperCaseCharacter = character.toUpperCase();
	if (upperCaseCharacter === ' ') return true;
	else return upperCaseCharacter in MORSE_MAP;
}

module.exports = {
	translateCharacterToMorse,
	isValidCharacter
};
