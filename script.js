const itemInput = document.getElementById("item");
const amountInput = document.getElementById("amount");
const addBtn = document.getElementById("addBtn");
const expenseList = document.getElementById("expenseList");
const totalAmount = document.getElementById("totalAmount");

let total = 0;

addBtn.addEventListener("click", () => {
  const item = itemInput.value.trim();
  const amount = parseFloat(amountInput.value.trim());

  if (item === "" || isNaN(amount) || amount <= 0) {
    alert("Please enter a valid item and amount!");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.innerHTML = `
    <span>${item} - ₹${amount}</span>
    <button class="deleteBtn">🗑</button>
  `;
  expenseList.appendChild(li);

  // Update total
  total += amount;
  totalAmount.textContent = total.toFixed(2);

  // Clear inputs
  itemInput.value = "";
  amountInput.value = "";

  // Delete item event
  li.querySelector(".deleteBtn").addEventListener("click", () => {
    expenseList.removeChild(li);
    total -= amount;
    totalAmount.textContent = total.toFixed(2);
  });
});
