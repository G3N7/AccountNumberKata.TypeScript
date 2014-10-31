var AccountNumberValidator = (function () {
    function AccountNumberValidator() {
    }
    AccountNumberValidator.prototype.validate = function (accountNumber) {
        if (!accountNumber) {
            return false;
        }
        var stopWatch = Date.now();
        var sum = 0;
        var length = accountNumber.length;
        var indexOfCheckDigit = length - 1;
        var oddCheckDigitIndex = indexOfCheckDigit % 2 != 0;

        for (var i = 0; i < length; i++) {
            var indexOfDigit = indexOfCheckDigit - i;
            var isOddIndex = indexOfDigit % 2 != 0;
            var ca = parseInt(accountNumber.charAt(indexOfDigit));

            if (oddCheckDigitIndex != isOddIndex) {
                ca = ca * 2;

                //console.log('Double the Digit', ca);
                if (ca > 9) {
                    var productPart = ca.toString();
                    ca = parseInt(productPart.charAt(0)) + parseInt(productPart.charAt(1));
                    //console.log('Normalize to a single digit by adding double digits to each other: ', parseInt(productPart), 'becomes', ca);
                }
            }
            sum += ca;
        }

        //console.log('Final Sum', sum);
        var returnValue = (sum % 10 === 0) && (sum > 0);
        console.log("Elapsed", Date.now() - stopWatch);
        return returnValue;
    };
    return AccountNumberValidator;
})();

var EfficientAccountNumberValidator = (function () {
    function EfficientAccountNumberValidator() {
    }
    EfficientAccountNumberValidator.prototype.validate = function (accountNumber) {
        if (!accountNumber) {
            return false;
        }
        var stopWatch = Date.now();
        var ca;
        var sum = 0;
        var mul = 1;

        var length = accountNumber.length;
        while (length--) {
            ca = parseInt(accountNumber.charAt(length), 10) * mul;
            sum += ca - (ca > 9 ? 1 : 0) * 9; // sum += ca - (-(ca>9))|9

            // 1 <--> 2 toggle.
            mul ^= 3; // (mul = 3 - mul);
        }
        ;

        var returnValue = (sum % 10 === 0) && (sum > 0);
        console.log("Elapsed", Date.now() - stopWatch);
        return returnValue;
    };
    return EfficientAccountNumberValidator;
})();
//# sourceMappingURL=Kata.js.map
