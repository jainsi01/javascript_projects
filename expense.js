let total = 0;

const category = document.getElementById("category");
const expense = document.getElementById("expense");
const btn = document.getElementById("btn");
const totalText = document.getElementById("total");
const table = document.getElementById("expenseTable");

btn.addEventListener("click", function () {

    let cat = category.value;
    let amount = Number(expense.value);

    if (cat !== "" && amount > 0) {
        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${cat}</td>
            <td>Rs. ${amount}</td>
        `;

        table.appendChild(row);
        total += amount;
        totalText.textContent = "Rs. " + total;
        category.value = "";
        expense.value = "";
    }
});