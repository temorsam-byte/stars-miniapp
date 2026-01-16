// نرخ ثابت Stars ↔ TON از Fragment
const STARS_PER_TON = 0.00884; // هر Stars ≈ 0.00884 TON
const FEE_PERCENT = 2.5;

// گرفتن قیمت TON از CoinGecko
async function fetchRate() {
  try {
    const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=the-open-network&vs_currencies=usd");
    const data = await res.json();
    const tonUsd = data["the-open-network"].usd;

    // محاسبه قیمت Stars به USD
    const starsUsd = STARS_PER_TON * tonUsd;

    // محاسبه نرخ Stars ↔ TON بعد از کارمزد
    const rateTonPerStar = STARS_PER_TON * (1 - FEE_PERCENT / 100);

    document.getElementById("rateText").textContent =
      `1 Stars ≈ ${rateTonPerStar.toFixed(6)} TON (${starsUsd.toFixed(4)} USD)`;

    document.getElementById("lastUpdated").textContent = new Date().toLocaleString("fa-IR");
  } catch (e) {
    console.error("Rate fetch failed", e);
  }
}
