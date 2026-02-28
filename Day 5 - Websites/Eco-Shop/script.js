var cart = [];
var total = 0;
var cartList = document.getElementById("cartList");
var totalSpan = document.getElementById("total");
function addToCart(name, price) {
    cart.push({ name: name, price: price });
    total += price;
    renderCart();
}
function renderCart() {
    cartList.innerHTML = "";
    cart.forEach(function (item) {
        var li = document.createElement("li");
        li.textContent = "".concat(item.name, " - \u20B9").concat(item.price);
        cartList.appendChild(li);
    });
    totalSpan.textContent = total.toString();
}
