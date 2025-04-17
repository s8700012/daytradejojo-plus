
const stocks = ["2330", "2303", "2317", "2603", "2609"];
function randomPrice() {
  return (Math.random() * 100 + 50).toFixed(2);
}
function randomSignal() {
  const signals = ["多", "空", "觀望"];
  return signals[Math.floor(Math.random() * signals.length)];
}
function renderStocks() {
  const container = document.getElementById("stock-table");
  container.innerHTML = "";
  stocks.forEach(code => {
    const row = document.createElement("div");
    row.className = "stock-row";
    row.innerHTML = `<div>${code}</div><div>$${randomPrice()}</div><div>${randomSignal()}</div>`;
    container.appendChild(row);
  });
}
setInterval(renderStocks, 1000);
