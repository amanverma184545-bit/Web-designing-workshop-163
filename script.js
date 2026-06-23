function checkNumber() {
    let num = document.getElementById("num").value;

    if (num == "") {
        document.getElementById("result").innerHTML =
            "Please enter a number";
    }
    else if (num % 2 == 0) {
        document.getElementById("result").innerHTML =
            "Number is Even";
    }
    else {
        document.getElementById("result").innerHTML =
            "Number is Odd";
    }
}