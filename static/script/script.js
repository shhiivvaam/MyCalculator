function calculate() {
    var num1 = parseInt(document.getElementById("inp1").value);
    var num2 = parseInt(document.getElementById("inp2").value);

    var sum = num1 + num2;
    document.querySelector(".sumVal").textContent = sum;

    var pro = num1 * num2;
    document.querySelector(".productVal").textContent = pro;

    var div = num1 / num2;
    document.querySelector(".divisionVal").textContent = div;
}

document.getElementById("btn").addEventListener("click", calculate);