function solution() {
    var res = {};
    for (var i = 0; i < arguments.length; i++) {
        var curr = arguments[i];
        if (res[curr]) {
            res[curr]++;
        } else {
            res[curr] = 1;
        }
    }
    return res[curr] > 1;
}
console.log(solution(1, 2, 3));
console.log(solution(1, 2, 3, 2));
console.log(solution('1', '2', '3', '2'));
