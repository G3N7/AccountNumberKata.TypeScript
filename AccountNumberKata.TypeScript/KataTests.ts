/// <reference path="scripts/typings/jasmine/jasmine.d.ts" />
/// <reference path="kata.ts" />

TestAccountNumberValidator('String Validator', new AccountNumberValidator());
TestAccountNumberValidator('Math Validator', new EfficientAccountNumberValidator());

// ReSharper disable once InconsistentNaming
function TestAccountNumberValidator(name: string, validator: IAccountNumberValidator) {
	describe(name, () => {
		describe('is invalid if passed', () => {
			it('an empty value', () => {
				expect(validator.validate(null)).toBe(false);
				expect(validator.validate('')).toBe(false);
			});

			it('a value containing anthing but numbers', () => {
				expect(validator.validate('123456781d345678')).toBe(false);
				expect(validator.validate('12345==812345678')).toBe(false);
				expect(validator.validate('12e45678123d567t')).toBe(false);
				expect(validator.validate('_=_^^')).toBe(false);
			});

			it('Sample: 1234567812345678', () => {
				expect(validator.validate('1234567812345678')).toBe(false);
			});

			it('Sample: 4992739871711111', () => {
				expect(validator.validate('4992739871711111')).toBe(false);
			});
		});

		describe('is valid if passed', () => {
			it('Sample: 1234567812345670', () => {
				expect(validator.validate('1234567812345670')).toBe(true);
			});
			it('Sample: 4111111111111111', () => {
				expect(validator.validate('4111111111111111')).toBe(true);
			});
			it('Sample: 6011000990139424', () => {
				expect(validator.validate('6011000990139424')).toBe(true);
			});
		});
	});
}