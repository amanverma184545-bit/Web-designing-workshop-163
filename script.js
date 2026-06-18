const buttons = document.querySelectorAll(".buy-btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Product added to cart!");
    });
});

document.querySelector(".login-btn").addEventListener("click", () => {
    alert("Login Page Coming Soon!");
});