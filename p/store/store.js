const cart = document.getElementById('cart');
const totalDisplay = document.getElementById('total');
let total = 0;

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.dataset.name;
        const productPrice = parseInt(this.dataset.price);

        const li = document.createElement('li');
        li.textContent = `${productName} - Rp ${productPrice} `;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Batal';
        removeButton.className = 'remove-button';

        // Menambahkan event listener untuk tombol batal
        removeButton.addEventListener('click', function() {
            cart.removeChild(li);
            total -= productPrice; // Mengurangi total
            totalDisplay.textContent = total; // Memperbarui total
        });

        li.appendChild(removeButton);
        cart.appendChild(li);
        total += productPrice; // Menambahkan total
        totalDisplay.textContent = total; // Memperbarui total
    });
});

document.getElementById('checkout').addEventListener('click', function() {
    alert('Checkout berhasil! Total: Rp ' + total);
    cart.innerHTML = ''; // Kosongkan keranjang
    total = 0;
    totalDisplay.textContent = total;
});
