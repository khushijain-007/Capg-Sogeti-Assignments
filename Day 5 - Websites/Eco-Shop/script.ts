let cart: { name: string; price: number }[] = [];
let total: number = 0;

const cartList = document.getElementById("cartList") as HTMLUListElement;
const totalSpan = document.getElementById("total") as HTMLSpanElement;

function addToCart(name: string, price: number): void {
    cart.push({ name, price });
    total += price;
    renderCart();
}

function renderCart(): void {
    cartList.innerHTML = "";

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ₹${item.price}`;
        cartList.appendChild(li);
    });

    totalSpan.textContent = total.toString();
}