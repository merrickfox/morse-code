const messageTools = require('./encode');


describe('encode', () => {

	describe('with valid input', () => {
		test('should translate and obfuscate a message correctly', () => {
			expect(messageTools.encode('HELLO')).toEqual(`4|1|1A2|1A2|C`)
		});

		test('should translate and obfuscate a message correctly', () => {
			expect(messageTools.encode('I AM IN TROUBLE')).toEqual(`2/1A|B/2|A1/A|1A1|C|2A|A3|1A2|1`)
		});

		test('should hadle lower and upper case messages and  translate and obfuscate a message correctly', () => {
			expect(messageTools.encode('I am in trouble')).toEqual(`2/1A|B/2|A1/A|1A1|C|2A|A3|1A2|1`)
		});
	})

	describe('with invalid input', () => {
		test('should handle and strip leading and trailing spaces', () => {
			expect(messageTools.encode('   I AM IN TROUBLE        ')).toEqual(`2/1A|B/2|A1/A|1A1|C|2A|A3|1A2|1`)
		});

		test('should handle and strip invalid characters at the end of the string', () => {
			expect(messageTools.encode('I AM IN TROUBLE!')).toEqual(`2/1A|B/2|A1/A|1A1|C|2A|A3|1A2|1`)
		});

		test('should handle and strip invalid characters at the start of the string', () => {
			expect(messageTools.encode('!I AM IN TROUBLE')).toEqual(`2/1A|B/2|A1/A|1A1|C|2A|A3|1A2|1`)
		});

		test('should handle and strip invalid characters in the middle of the string', () => {
			expect(messageTools.encode('I AM IN TROU!BLE')).toEqual(`2/1A|B/2|A1/A|1A1|C|2A|A3|1A2|1`)
		});

		test('should handle and strip a mess of invalid characters ', () => {
			expect(messageTools.encode('    ?    I A$%M IN TROU!BLE   %  ^ ')).toEqual(`2/1A|B/2|A1/A|1A1|C|2A|A3|1A2|1`)
		});

	})

})

