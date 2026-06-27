let total = 0;
let expenses = [1000, 2000, 3000, 4000, 5000];

for (let i = 0; i < expenses.length; i++) {
    total += expenses[i];
}

document.querySelector('.total').textContent = `Rs. ${total}`;