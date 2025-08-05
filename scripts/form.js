document.addEventListener("DOMContentLoaded", () => {
  const products = ["Monitor", "Keyboard", "Mouse", "Laptop"];
  const selectElement = document.getElementById("product");

  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product;
    option.textContent = product;
    selectElement.appendChild(option);
  });
});