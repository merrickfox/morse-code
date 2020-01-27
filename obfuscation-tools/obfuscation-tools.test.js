const obfuscationTools = require('./obfuscation-tools');

/*
OBFUSCATE RULES:
For obfuscation, your team decided to replace the number of consecutive dots with a number,
and replace the number of consecutive dashes with the letter of the alphabet at that position.
E.g. S = ... = 3, Q = --.- = b1a, F = ..-. = 2a1.
 */

describe('obfuscate', () => {
	test('should obfuscate a morse code correctly based on rules', () => {
		expect(obfuscationTools.obfuscate('..')).toEqual('2')
	});

	test('should obfuscate a morse code correctly based on rules', () => {
		expect(obfuscationTools.obfuscate('....')).toEqual('4')
	});

	test('should obfuscate a morse code correctly based on rules', () => {
		expect(obfuscationTools.obfuscate('-')).toEqual('A')
	});

	test('should obfuscate a morse code correctly based on rules', () => {
		expect(obfuscationTools.obfuscate('----')).toEqual('D')
	});

	test('should obfuscate a morse code correctly based on rules', () => {
		expect(obfuscationTools.obfuscate('----..--')).toEqual('D2B')
	});

	test('should obfuscate a morse code with separators correctly based on rules', () => {
		expect(obfuscationTools.obfuscate('----|..--')).toEqual('D|2B')
	});

	test('should obfuscate a morse code with separators correctly based on rules', () => {
		expect(obfuscationTools.obfuscate('----|..-/-')).toEqual('D|2A/A')
	});
});
