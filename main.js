
const stockData = [
  { code: "2330", name: "台積電", price: 140.88, signal: "多" },
  { code: "2303", name: "聯電", price: 122.29, signal: "觀望" },
  { code: "2317", name: "鴻海", price: 70.03, signal: "空" },
  { code: "2603", name: "長榮", price: 70.68, signal: "觀望" },
  { code: "2609", name: "陽明", price: 77.27, signal: "空" }
];

const tbody = document.getElementById("stock-table-body");
const audioMulti = document.getElementById("audio-multi");
const audioShort = document.getElementById("audio-short");

stockData.forEach(stock => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${stock.code}</td>
    <td>${stock.name}</td>
    <td>$${stock.price}</td>
    <td>${stock.signal}</td>
  `;
  tbody.appendChild(row);

  // 播放對應音效
  if (stock.signal === "多") {
    audioMulti.play();
  } else if (stock.signal === "空") {
    audioShort.play();
  }
});
