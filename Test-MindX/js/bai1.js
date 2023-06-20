function calculate() {
    var a = parseInt(document.getElementById('input-a').value);
    var b = parseInt(document.getElementById('input-b').value);
    var sum = 0;

    for (var i = a; i <= b; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }

    document.getElementById('result').innerText = 'Tổng các số nguyên tố trong khoảng từ ' + a + ' đến ' + b + ' là :  ' + sum;
}

function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}