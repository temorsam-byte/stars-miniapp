// ===== Config =====
const STARS_USD = 0.015;          // Fixed Stars price in USD (from Fragment)
const FEE_PERCENT = 2.5;          // Service fee
const TON_PRICE_API = "https://api.coingecko.com/api/v3/simple/price?ids=the-open-network&vs_currencies=usd";
const MANIFEST_URL = "https://temorsarr.github.io/stars-miniapp/tonconnect-manifest.json"; // update if different

// ===== State =====
const state = {
  tonUsd: null,
  rateTonPerStar: null,   // computed from STARS_USD / tonUsd
  connected: false,
  address: null,
  orders: []
};

// ===== Translations =====
const t = {
  fa: {
    appTitle: "صرافی Stars ↔ TON",
    langLabel: "زبان",
    panelTitle: "پنل تبادل",
    rateLabel: "نرخ لحظه‌ای:",
    amountLabel: "مقدار (Stars)",
    estTonLabel: "تخمین TON (بعد از کارمزد):",
    feeLabel: "کارمزد:",
    lastUpdatedLabel: "آخرین بروزرسانی:",
    buy: "خرید Stars",
    sell: "فروش Stars",
    note: "امن • سریع • شفاف",
    historyTitle: "تاریخچه سفارش‌ها",
    aboutTitle: "درباره ما",
    aboutText:
      "صرافی Stars ↔ TON با هدف ایجاد پلی امن و سریع بین دنیای سرگرمی و بلاک‌چین ساخته شده است. ما با استفاده از فناوری‌های روز و امنیت بالا، تجربه‌ای شفاف و قابل اعتماد برای کاربران فراهم می‌کنیم.",
    supportBtn: "پشتیبانی",
    policyBtn: "سیاست‌ها",
    walletDisconnected: "کیف پول متصل نیست",
    walletConnected: addr => `متصل: ${addr}`,
    policyTitle: "سیاست‌ها",
    policyBody:
      "• شفافیت نرخ: قیمت Stars بر اساس دلار ثابت و قیمت لحظه‌ای TON محاسبه می‌شود.\n" +
      "• امنیت: هیچ‌گاه کلید خصوصی یا عبارت بازیابی ذخیره یا درخواست نمی‌شود.\n" +
      "• کارمزد: کارمزد خدمات برابر با ۲.۵٪ است و پیش از تأیید نمایش داده می‌شود.\n" +
      "• مسئولیت کاربر: تأیید تراکنش‌ها بر عهده کاربر است و رسید بلاک‌چین ارائه می‌شود."
  },
  en: {
    appTitle: "Stars ↔ TON Exchange",
    langLabel: "Language",
    panelTitle: "Exchange panel",
    rateLabel: "Live rate:",
    amountLabel: "Amount (Stars)",
    estTonLabel: "Estimated TON (after fee):",
    feeLabel: "Fee:",
    lastUpdatedLabel: "Last updated:",
    buy: "Buy Stars",
    sell: "Sell Stars",
    note: "Secure • Fast • Transparent",
    historyTitle: "Order history",
    aboutTitle: "About",
    aboutText:
      "Stars ↔ TON exchange built for a secure, fast, and transparent experience. We compute rates from fixed Stars USD and live TON price.",
    supportBtn: "Support",
    policyBtn: "Policies",
    walletDisconnected: "Wallet not connected",
    walletConnected: addr => `Connected: ${addr}`,
    policyTitle: "Policies",
    policyBody:
      "• Rate transparency: Stars price uses fixed USD and live TON.\n" +
      "• Security: No private keys or seed phrases are stored or requested.\n" +
      "• Fee: Service fee is 2.5% and shown before confirmation.\n" +
      "• User responsibility: Transactions are user-confirmed; blockchain receipts are provided."
  },
  ru: {
    appTitle: "Обмен Stars ↔ TON",
    langLabel: "Язык",
    panelTitle: "Панель обмена",
    rateLabel: "Текущий курс:",
    amountLabel: "Количество (Stars)",
    estTonLabel: "TON (после комиссии):",
    feeLabel: "Комиссия:",
    lastUpdatedLabel: "Обновлено:",
    buy: "Купить Stars",
    sell: "Продать Stars",
    note: "Безопасно • Быстро • Прозрачно",
    historyTitle: "История заказов",
    aboutTitle: "О нас",
    aboutText:
      "Обмен Stars ↔ TON для безопасного и прозрачного опыта. Курс рассчитывается из фиксированной цены Stars в USD и текущей цены TON.",
    supportBtn: "Поддержка",
    policyBtn: "Политики",
    walletDisconnected: "Кошелек не подключен",
    walletConnected: addr => `Подключено: ${addr}`,
    policyTitle: "Политики",
    policyBody:
      "• Прозрачность курса: Stars в USD фиксировано, TON — по рынку.\n" +
      "• Безопасность: приватные ключи и seed не запрашиваются и не хранятся.\n" +
      "• Комиссия: 2.5% показывается до подтверждения.\n" +
      "• Ответственность: транзакции подтверждаются пользователем; предоставляются чеки блокчейна."
  }
};

// ===== DOM =====
const el = {
  appTitle: document.getElementById("appTitle"),
  langLabel: document.getElementById("langLabel"),
  lang: document.getElementById("lang"),
  panelTitle: document.getElementById("panelTitle"),
  rateLabel: document.getElementById("rateLabel"),
  rateText: document.getElementById("rateText"),
  amountLabel: document.getElementById("amountLabel"),
  amount: document.getElementById("amount"),
  estTonLabel: document.getElementById("estTonLabel"),
  estTon: document.getElementById("estTon"),
  feeLabel: document.getElementById("feeLabel"),
  feeText: document.getElementById("feeText"),
  lastUpdatedLabel: document.getElementById("lastUpdatedLabel"),
  lastUpdated: document.getElementById("lastUpdated"),
  btnBuy: document.getElementById("btnBuy"),
  btnSell: document.getElementById("btnSell"),
  walletStatus: document.getElementById("walletStatus"),
  noteText: document.getElementById("noteText"),
  historyTitle: document.getElementById("historyTitle"),
  orders: document.getElementById("orders"),
  aboutTitle: document.getElementById("aboutTitle"),
  aboutText: document.getElementById("aboutText"),
  supportBtn: document.getElementById("supportBtn"),
  btnPolicy: document.getElementById("btnPolicy"),
  aboutLink: document.getElementById("aboutLink"),
  policyModal: document.getElementById("policyModal"),
  policyTitle: document.getElementById("policyTitle"),
  policyBody: document.getElementById("policyBody"),
  policyClose: document.getElementById("policyClose"),
  receiptModal: document.getElementById("receiptModal"),
  receiptTitle: document.getElementById("receiptTitle"),
  receiptBody: document.getElementById("receiptBody"),
  receiptClose: document.getElementById("receiptClose"),
  copyReceipt: document.getElementById("copyReceipt")
};

// ===== Language =====
function applyTranslations(lang) {
  const tr = t[lang] || t.fa;
  el.appTitle.textContent = tr.appTitle;
  el.langLabel.textContent = tr.langLabel;
  el.panelTitle.textContent = tr.panelTitle;
  el.rateLabel.textContent = tr.rateLabel;
  el.amountLabel.textContent = tr.amountLabel;
  el.estTonLabel.textContent = tr.estTonLabel;
  el.feeLabel.textContent = tr.feeLabel;
  el.lastUpdatedLabel.textContent = tr.lastUpdatedLabel;
  el.btnBuy.textContent = tr.buy;
  el.btnSell.textContent = tr.sell;
  el.noteText.textContent = tr.note;
  el.historyTitle.textContent = tr.historyTitle;
  el.aboutTitle.textContent = tr.aboutTitle;
  el.aboutText.textContent = tr.aboutText;
  el.supportBtn.textContent = tr.supportBtn;
  el.btnPolicy.textContent = tr.policyBtn;
  el.policyTitle.textContent = tr.policyTitle;
  el.policyBody.textContent = tr.policyBody.replace(/\n/g, "<br/>");
  el.walletStatus.textContent = state.connected
    ? tr.walletConnected(state.address || "")
    : tr.walletDisconnected;
  el.feeText.textContent = `${FEE_PERCENT}%`;
}

// ===== Rates =====
async function fetchTonUsd() {
  const res = await fetch(TON_PRICE_API, { cache: "no-store" });
  const data = await res.json();
  const tonUsd = data["the-open-network"]?.usd;
  if (!tonUsd || isNaN(tonUsd)) throw new Error("TON price unavailable");
  state.tonUsd = tonUsd;
  state.rateTonPerStar = STARS_USD / tonUsd;
  el.rateText.textContent = `1 Stars ≈ ${state.rateTonPerStar.toFixed(6)} TON (${STARS_USD.toFixed(3)} USD)`;
  el.lastUpdated.textContent = new Date().toLocaleString("fa-IR");
  updateEstimate();
}

function updateEstimate() {
  const stars = Number(el.amount.value || 0);
  if (!stars || !state.rateTonPerStar) {
    el.estTon.textContent = "0";
    return;
  }
  const tonRaw = stars * state.rateTonPerStar;
  const tonAfterFee = tonRaw * (1 - FEE_PERCENT / 100);
  el.estTon.textContent = tonAfterFee.toFixed(6);
}

// ===== Wallet (TonConnect UI) =====
let tonConnectUI;

function initTonConnect() {
  tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
    manifestUrl: MANIFEST_URL,
    buttonRootId: "tonconnect-ui",
    uiPreferences: { theme: "dark" }
  });

  tonConnectUI.onStatusChange(wallet => {
    const lang = el.lang.value;
    if (wallet && wallet.account) {
      state.connected = true;
      state.address = wallet.account.address;
      el.walletStatus.textContent = t[lang].walletConnected(wallet.account.address);
    } else {
      state.connected = false;
      state.address = null;
      el.walletStatus.textContent = t[lang].walletDisconnected;
    }
  });
}

// ===== Orders & Receipt =====
function addOrder(type, stars, ton, txId = null) {
  const item = document.createElement("li");
  item.innerHTML = `
    <span>${type === "buy" ? "خرید" : "فروش"}: ${stars} Stars → ${ton} TON</span>
    <span>${new Date().toLocaleString("fa-IR")}</span>
  `;
  el.orders.prepend(item);
  state.orders.unshift({ type, stars, ton, txId, ts: Date.now() });
}

function showReceipt({ type, stars, ton, txId }) {
  el.receiptBody.innerHTML = `
    <div>نوع: ${type === "buy" ? "خرید" : "فروش"}</div>
    <div>Stars: ${stars}</div>
    <div>TON (بعد از کارمزد): ${ton}</div>
    ${txId ? `<div>آیدی تراکنش: ${txId}</div>` : ""}
  `;
  el.receiptModal.classList.remove("hidden");
}

function hideReceipt() {
  el.receiptModal.classList.add("hidden");
}

// ===== Policy Modal =====
function showPolicy() {
  el.policyModal.classList.remove("hidden");
}
function hidePolicy() {
  el.policyModal.classList.add("hidden");
}

// ===== Events =====
function bindEvents() {
  el.lang.addEventListener("change", () => applyTranslations(el.lang.value));
  el.amount.addEventListener("input", updateEstimate);

  el.btnBuy.addEventListener("click", async () => {
    const stars = Number(el.amount.value || 0);
    if (!stars || !state.rateTonPerStar) return;
    const ton = (stars * state.rateTonPerStar * (1 - FEE_PERCENT / 100)).toFixed(6);
    addOrder("buy", stars, ton);
    showReceipt({ type: "buy", stars, ton });
  });

  el.btnSell.addEventListener("click", async () => {
    const stars = Number(el.amount.value || 0);
    if (!stars || !state.rateTonPerStar) return;
    const ton = (stars * state.rateTonPerStar * (1 - FEE_PERCENT / 100)).toFixed(6);
    addOrder("sell", stars, ton);
    showReceipt({ type: "sell", stars, ton });
  });

  el.btnPolicy.addEventListener("click", showPolicy);
  el.policyClose.addEventListener("click", hidePolicy);

  el.receiptClose.addEventListener("click", hideReceipt);
  el.copyReceipt.addEventListener("click", async () => {
    const text = el.receiptBody.innerText;
    try { await navigator.clipboard.writeText(text); } catch {}
  });
}

// ===== Init =====
(async function init() {
  // Default language
  el.lang.value = "fa";
  applyTranslations("fa");

  // Init wallet
  initTonConnect();

  // Fetch rate initially and every 60s
  try {
    await fetchTonUsd();
  } catch (e) {
    el.rateText.textContent = "خطا در دریافت نرخ";
  }
  setInterval(fetchTonUsd, 60000);

  // Bind events
  bindEvents();
})();
