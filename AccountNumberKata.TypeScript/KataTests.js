/// <reference path="scripts/typings/jasmine/jasmine.d.ts" />
/// <reference path="kata.ts" />
TestAccountNumberValidator('String Validator', new AccountNumberValidator());
TestAccountNumberValidator('Math Validator', new EfficientAccountNumberValidator());
// ReSharper disable once InconsistentNaming
function TestAccountNumberValidator(name, validator) {
    describe(name, function () {
        describe('is invalid if passed', function () {
            it('an empty value', function () {
                expect(validator.validate(null)).toBe(false);
                expect(validator.validate('')).toBe(false);
            });
            it('a value containing anthing but numbers', function () {
                expect(validator.validate('123456781d345678')).toBe(false);
                expect(validator.validate('12345==812345678')).toBe(false);
                expect(validator.validate('12e45678123d567t')).toBe(false);
                expect(validator.validate('_=_^^')).toBe(false);
            });
            it('Sample: 1234567812345678', function () {
                expect(validator.validate('1234567812345678')).toBe(false);
            });
            it('Sample: 4992739871711111', function () {
                expect(validator.validate('4992739871711111')).toBe(false);
            });
        });
        describe('is valid if passed', function () {
            it('Sample: 1234567812345670', function () {
                expect(validator.validate('1234567812345670')).toBe(true);
            });
            it('Sample: 4111111111111111', function () {
                expect(validator.validate('4111111111111111')).toBe(true);
            });
            it('Sample: 6011000990139424', function () {
                expect(validator.validate('6011000990139424')).toBe(true);
            });
        });
    });
}
//# sourceMappingURL=KataTests.js.map