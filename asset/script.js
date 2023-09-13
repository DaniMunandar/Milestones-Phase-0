// Function to calculate discounted price
function calculateDiscount() {
    const originalPrice = parseFloat(document.getElementById('originalPrice').value);
    const discountPercentage = parseFloat(document.getElementById('discountPercentage').value);

    if (!isNaN(originalPrice) && !isNaN(discountPercentage)) {
        const discountAmount = (originalPrice * discountPercentage) / 100;
        const discountedPrice = originalPrice - discountAmount;
        document.getElementById('discountedPrice').textContent = discountedPrice.toFixed(2);
    } else {
        alert('Masukkan angka yang valid untuk harga asli dan persentase diskon.');
    }
}

// Event listener for the calculate button
document.getElementById('calculateButton').addEventListener('click', calculateDiscount);
