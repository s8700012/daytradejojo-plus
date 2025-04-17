
const stocks = [
  { code: "2330.TW", name: "台積電", signal: "多" },
  { code: "2303.TW", name: "聯電", signal: "觀望" },
  { code: "2317.TW", name: "鴻海", signal: "空" },
  { code: "2603.TW", name: "長榮", signal: "觀望" },
  { code: "2609.TW", name: "陽明", signal: "空" }
];

const tbody = document.getElementById("stock-table-body");
const audioMulti = document.getElementById("audio-multi");
const audioShort = document.getElementById("audio-short");

function fetchPrices() {
  tbody.innerHTML = "";
  stocks.forEach(stock => {
    fetch(`https://query1.finance.yahoo.com/v7/finance/quote?symbols=${stock.code}`)
      .then(res => res.json())
      .then(data => {
        const price = data.quoteResponse.result[0]?.regularMarketPrice || "N/A";
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${stock.code.replace(".TW", "")}</td>
          <td>${stock.name}</td>
          <td>$${price}</td>
          <td>${stock.signal}</td>
        `;
        tbody.appendChild(row);

        // 播放音效
        if (stock.signal === "多") audioMulti.play();
        else if (stock.signal === "空") audioShort.play();
      });
  });
}

fetchPrices();
setInterval(fetchPrices, 10000);
