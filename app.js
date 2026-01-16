// Telegram init
const tg = window.Telegram?.WebApp;
if (tg) { tg.expand(); tg.ready(); }

// Translations
const translations = {
  fa: {
    title: "صرافی استارز ↔ TON",
    panel: "پنل تبادل",
    rate: "نرخ لحظه‌ای:",
    amount: "مقدار (استارز)",
    estTon: "تخمین TON (بعد از کارمزد):",
    fee: "کارمزد:",
    lastUpdated: "آخرین بروزرسانی:",
    buy: "خرید استارز",
    sell: "فروش استارز",
    connect: "🔗 اتصال کیف پول",
    walletNot: "کیف پول متصل نیست",
    walletYes: "کیف پول متصل شد:",
    history: "تاریخچه سفارش‌ها",
    support: "پشتیبانی",
    policy: "سیاست‌ها",
    note: "امن • سریع • شفاف",
    langLabel: "🌐 زبان:",
    policyTitle: "سیاست‌ها",
    policyBody:
      "• قیمت‌گذاری شفاف: کارمزد ۲.۵٪ در نرخ نمایش داده شده لحاظ شده است.\n" +
      "• زمان پردازش: سفارش‌ها معمولاً ظرف چند دقیقه انجام می‌شوند.\n" +
      "• کیف پول: اتصال کیف پول TON برای پرداخت الزامی است.\n" +
      "• امنیت: ارتباطات از طریق HTTPS؛ داده حساس در مینی‌اپ ذخیره نمی‌شود.\n" +
      "• پشتیبانی: تلگرام @TonStarExchange_support.\n" +
      "• قوانین: تراکنش‌ها مطابق مقررات محلی و قوانین پلتفرم.\n" +
      "• بازگشت وجه: فقط در موارد خطا یا تراکنش‌های تکراری بررسی می‌شود.",
    close: "بستن"
  },
  en: {
    title: "Stars ↔ TON Exchange",
    panel: "Exchange Panel",
    rate: "Live Rate:",
    amount: "Amount (Stars)",
    estTon: "Estimated TON (after fee):",
    fee: "Fee:",
    lastUpdated: "Last updated:",
    buy: "Buy Stars",
    sell: "Sell Stars",
    connect: "🔗 Connect Wallet",
    walletNot: "Wallet not connected",
    walletYes: "Wallet connected:",
    history: "Order History",
    support: "Support",
    policy: "Policy",
    note: "Secure • Fast • Transparent",
    langLabel: "🌐 Language:",
    policyTitle: "Policy",
    policyBody:
      "• Transparent pricing: 2.5% fee included in displayed rate.\n" +
      "• Processing time: Orders typically processed within minutes.\n" +
      "• Wallet: TON wallet connection required for on-chain payments.\n" +
      "• Security: HTTPS; no sensitive data stored in the mini-app.\n" +
      "• Support: Telegram @TonStarExchange_support.\n" +
      "• Compliance: Transactions must comply with local regulations.\n" +
      "• Refunds: Case-by-case for failed or duplicated transactions.",
    close: "Close"
  }
};

// Detect user language
let userLang = tg?.initDataUnsafe?.user?.language_code || "fa";
if (!translations[userLang]) userLang = "en";

// State
const state = {
  feePercent: 2.5,
  rateTonPerStar: 0.0005,
  lastUpdated: null,
  orders: [],
  wallet: null,
  connector: null,
  lang: userLang
};

// Elements
const els = {
  appTitle: document.getElementById("appTitle"),
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
  btnConnect: document.getElementById("btnConnect"),
  walletStatus: document.getElementById("walletStatus"),
  historyTitle: document.getElementById("historyTitle"),
  supportBtn: document.getElementById("supportBtn"),
  btnPolicy: document.getElementById("btnPolicy"),
  noteText: document.getElementById("noteText"),
  langLabel: document.getElementById("langLabel"),
  langSelect: document.getElementById("lang"),
  userName: document.getElementById("userName"),
  policyModal: document.getElementById("policyModal"),
  policyTitle: document.getElementById("policyTitle"),
  policyBody: document.getElementById("policyBody"),
  policyClose: document.getElementById("policyClose")
};

// Apply translations
function applyTranslations(lang) {
  const t = translations[lang];
  document.title = t.title;
  els.appTitle.textContent = t.title;
  els.panelTitle.textContent = t.panel;
  els.rateLabel.textContent = t.rate;
  els.amountLabel.textContent = t.amount;
  els.estTonLabel.textContent = t.estTon;
  els.feeLabel.textContent = t.fee;
  els.lastUpdatedLabel.textContent = t.lastUpdated;
  els.btnBuy.textContent = t.buy;
  els.btnSell.textContent = t.sell;
  els.btnConnect.textContent = t.connect;
  els.walletStatus.textContent = state.wallet ? `${t.walletYes} ${state.wallet}` : t.walletNot;
  els.historyTitle.textContent = t.history;
  els.supportBtn.textContent = t.support;
  els.btnPolicy.textContent = t.policy;
  els.noteText.textContent = t.note;
  els.langLabel.textContent = t.langLabel;
  els.policyTitle.textContent = t.policyTitle;
  els.policyBody.textContent = t.policyBody;
  els.policyClose.textContent = t.close;

  // Direction switch
  if (lang === "fa") {
    document.body.classList.remove("ltr");
    document.body.setAttribute("dir", "rtl");
  } else {
    document.body.classList.add("ltr");
    document.body.setAttribute("dir", "ltr");
  }
}

// Show Telegram user name
try {
  const name = tg?.initDataUnsafe?.user?.first_name || (state.lang === "fa" ? "کاربر مهمان" : "Guest");
  els.userName.textContent = name;
} catch {}

// Render rate
function renderRate() {
  els.feeText.textContent = `${state.feePercent}%`;
  els.rateText.textContent = `1 Stars ≈ ${state.rateTonPerStar.toFixed(6)} TON`;
  els.lastUpdated.textContent = state.lastUpdated ? new Date(state.lastUpdated).toLocaleString(state.lang === "fa" ? "fa-IR" : "en-US") : "—";
}

// Estimate
function updateEstimate() {
  const amt = Number(els.amount.value || 0);
  const ton = (amt * state.rateTonPerStar).toFixed(6);
  els.estTon.textContent = ton;
}

// Fetch live rate
async function fetchRate() {
  try {
    const res = await fetch("https://tonapi.io/v2/rates?tokens=ton");
    const data = await res.json();
    const tonUsd = data?.rates?.TON?.prices?.USD || 2.0;

    // Example baseline for Stars price in USD; adjust when you have a real source
    const starsUsd = 0.001;

    const rawTonPerStar = starsUsd / tonUsd;
    const afterFee = rawTonPerStar * (1 - state.feePercent / 100);

    state.rateTonPerStar = afterFee;
    state.lastUpdated = Date.now();

    renderRate();
    updateEstimate();
  } catch (e) {
    console.error("Rate fetch failed", e);
    state.lastUpdated = Date.now();
    renderRate();
    updateEstimate();
  }
}

// Orders
function addOrderLocal(order) {
  state.orders.unshift(order);
  document.getElementById("orders").innerHTML = state.orders.map(o => `
    <li>
      <span>${o.action.toUpperCase()} • ${o.amount} Stars</span>
      <strong>${o.estTon} TON</strong>
    </li>
  `).join("");
}

function sendOrder(type) {
  const amt = Number(els.amount.value || 0);
  if (!amt || amt <= 0) return alert(state.lang === "fa" ? "مقدار معتبر وارد کنید" : "Enter a valid amount");

  const payload = {
    action: type,
    amount: amt,
    estTon: Number(els.estTon.textContent),
    wallet: state.wallet,
    ts: Date.now()
  };

  const confirmText = state.lang === "fa"
    ? `تأیید ${type.toUpperCase()}:\nمقدار: ${payload.amount} استارز\nتخمین TON (بعد از کارمزد): ${payload.estTon}\nکیف پول: ${payload.wallet || "متصل نیست"}`
    : `Confirm ${type.toUpperCase()}:\nAmount: ${payload.amount} Stars\nEstimated TON (after fee): ${payload.estTon}\nWallet: ${payload.wallet || "Not connected"}`;

  if (!confirm(confirmText)) return;

  if (tg) tg.sendData(JSON.stringify(payload));
  addOrderLocal(payload);
}

// Wallet connect via TonConnect
async function connectWallet() {
  try {
    if (!state.connector) {
      state.connector = new TonConnect({
        manifestUrl: "https://temorsarr.github.io/stars-miniapp/tonconnect-manifest.json"
      });
    }
    await state.connector.restoreConnection();
    const result = await state.connector.connect();
    state.wallet = result?.account?.address || null;
    els.walletStatus.textContent = state.wallet
      ? `${translations[state.lang].walletYes} ${state.wallet}`
      : translations[state.lang].walletNot;
  } catch (e) {
    alert(state.lang === "fa" ? "اتصال کیف پول ناموفق بود" : "Wallet connection failed");
  }
}

// Policy modal
function openPolicy() {
  els.policyModal.classList.remove("hidden");
}
function closePolicy() {
  els.policyModal.classList.add("hidden");
}

// Events
els.amount.addEventListener("input", updateEstimate);
els.btnBuy.addEventListener("click", () => sendOrder("buy"));
els.btnSell.addEventListener("click", () => sendOrder("sell"));
els.btnConnect.addEventListener("click", connectWallet);
els.btnPolicy.addEventListener("click", openPolicy);
els.policyClose.addEventListener("click", closePolicy);
els.langSelect.addEventListener("change", (e) => {
  state.lang = e.target.value;
  applyTranslations(state.lang);
  renderRate();
  updateEstimate();
});

// Init
applyTranslations(state.lang);
els.langSelect.value = state.lang;
renderRate();
updateEstimate();
fetchRate();
setInterval(fetchRate, 60000);
