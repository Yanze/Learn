var Calculator = {
    average: function () {
        var param = [];
        if (arguments.length !== 0) {
            for (var i = 0; i < arguments.length; i++) {
                param.push(arguments[i]);
            }
            var total = param.reduce(function (a, b) {
                return a + b
            });
            return total / arguments.length;
        } else {
            return 0;
        }
    }
};

console.log(Calculator.average(3, 4, 5)); // 4
