function numberOneTriangle(number) {
    if (number < 1 || number > 10) {
        console.log("Số không hợp lệ");
        return;
    }

    for (var i = 1; i <= number; i++) {
        var line = "";
        for (var j = 1; j <= i; j++) {
            line += "* ";
        }
        console.log(line);
    }
}

numberOneTriangle(5);