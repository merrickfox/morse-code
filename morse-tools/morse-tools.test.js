const morseTools = require('./morse-tools');
const MORSE_MAP = require('../morse-map')

const wordSeparator = '/';
const letterSeparator = '|';

describe('translateToMorse', () => {

	describe('with the nextCharacter param', () => {
		test('should translate lowercase character a into the proper morse code and append the letter separator', () => {
			expect(morseTools.translateCharacterToMorse('a', 'b')).toEqual(`${MORSE_MAP.A}${letterSeparator}`)
		});

		test('should translate uppercase character a into the proper morse code and append the letter separator', () => {
			expect(morseTools.translateCharacterToMorse('A', 'b')).toEqual(`${MORSE_MAP.A}${letterSeparator}`)
		});

		test('should return the word separator when there is a space and there is a next character', () => {
			expect(morseTools.translateCharacterToMorse(' ', 'b')).toEqual(wordSeparator)
		});

		test('should append the letter separator character if there is a next character', () => {
			let morseTranlationArray = morseTools.translateCharacterToMorse('z', 'b').split( '');

			expect(morseTranlationArray[morseTranlationArray.length-1]).toEqual(letterSeparator)
		});
	})

	describe('without the nextCharacter param', () => {
		test('should translate lowercase character a into the proper morse code', () => {
			expect(morseTools.translateCharacterToMorse('a', null)).toEqual(`${MORSE_MAP.A}`)
		});
	})
})

describe('isValidCharacter', () => {

	describe('with a valid character', () => {
		test('should return truthy', () => {
			expect(morseTools.isValidCharacter('a')).toBeTruthy()
		});
	})

	describe('with an invalid character', () => {
		test('should return falsey', () => {
			expect(morseTools.isValidCharacter('$')).toBeFalsy()
		});
	})
})
