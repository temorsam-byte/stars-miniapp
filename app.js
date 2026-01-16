// Telegram init
const tg = window.Telegram?.WebApp;
if (tg) { tg.expand(); tg.ready(); }

// Translations (fa, en, ar, ru)
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
    settingsTitle: "تنظیمات",
    feeSettingLabel: "کارمزد (٪):",
    starsUsdLabel: "قیمت پایه استارز (USD):",
    saveSettings: "ذخیره تنظیمات",
    policyTitle: "سیاست‌ها",
    policyBody:
      "• قیمت‌گذاری شفاف: کارمزد در نرخ نمایش داده شده لحاظ می‌شود.\n" +
      "• زمان پردازش: سفارش‌ها معمولاً ظرف چند دقیقه انجام می‌شوند.\n" +
      "• کیف پول: اتصال کیف پول TON برای پرداخت الزامی است.\n" +
      "• امنیت: ارتباطات از طریق HTTPS؛ داده حساس در مینی‌اپ ذخیره نمی‌شود.\n" +
      "• پشتیبانی: تلگرام @TonStarExchange_support.\n" +
      "• قوانین: تراکنش‌ها مطابق مقررات محلی و قوانین پلتفرم.\n" +
      "• بازگشت وجه: فقط در موارد خطا یا تراکنش‌های تکراری بررسی می‌شود.",
    close: "بستن",
    receiptTitle: "رسید سفارش",
    copyDetails: "کپی جزئیات",
    about: "درباره ما",
    contact: "تماس با ما",
    enterValid: "مقدار معتبر وارد کنید",
    walletFailed: "اتصال کیف پول ناموفق بود",
    confirmBuy: "تأیید خرید",
    confirmSell: "تأیید فروش",
    notConnected: "متصل نیست"
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
    settingsTitle: "Settings",
    feeSettingLabel: "Fee (%):",
    starsUsdLabel: "Stars base price (USD):",
    saveSettings: "Save settings",
    policyTitle: "Policy",
    policyBody:
      "• Transparent pricing: fee included in displayed rate.\n" +
      "• Processing time: orders typically processed within minutes.\n" +
      "• Wallet: TON wallet connection required for on-chain payments.\n" +
      "• Security: HTTPS; no sensitive data stored in the mini-app.\n" +
      "• Support: Telegram @TonStarExchange_support.\n" +
      "• Compliance: transactions must comply with local regulations.\n" +
      "• Refunds: case-by-case for failed or duplicated transactions.",
    close: "Close",
    receiptTitle: "Order Receipt",
    copyDetails: "Copy details",
    about: "About",
    contact: "Contact",
    enterValid: "Enter a valid amount",
    walletFailed: "Wallet connection failed",
    confirmBuy: "Confirm BUY",
    confirmSell: "Confirm SELL",
    notConnected: "Not connected"
  },
  ar: {
    title: "صرف Stars ↔ TON",
    panel: "لوحة التبادل",
    rate: "السعر المباشر:",
    amount: "الكمية (Stars)",
    estTon: "تقدير TON (بعد الرسوم):",
    fee: "الرسوم:",
    lastUpdated: "آخر تحديث:",
    buy: "شراء Stars",
    sell: "بيع Stars",
    connect: "🔗 ربط المحفظة",
    walletNot: "المحفظة غير متصلة",
    walletYes: "تم ربط المحفظة:",
    history: "سجل الطلبات",
    support: "الدعم",
    policy: "السياسات",
    note: "آمن • سريع • شفاف",
    langLabel: "🌐 اللغة:",
    settingsTitle: "الإعدادات",
    feeSettingLabel: "الرسوم (%):",
    starsUsdLabel: "سعر Stars الأساسي (USD):",
    saveSettings: "حفظ الإعدادات",
    policyTitle: "السياسات",
    policyBody:
      "• تسعير شفاف: الرسوم مضمنة في السعر المعروض.\n" +
      "• وقت المعالجة: تُعالج الطلبات عادة خلال دقائق.\n" +
      "• المحفظة: مطلوب ربط محفظة TON للدفع على السلسلة.\n" +
      "• الأمان: HTTPS؛ لا يتم تخزين بيانات حساسة في التطبيق.\n" +
      "• الدعم: تيليجرام @TonStarExchange_support.\n" +
      "• الامتثال: يجب أن تتوافق المعاملات مع القوانين المحلية.\n" +
      "• الاسترداد: حسب الحالة للمعاملات الفاشلة أو المكررة.",
    close: "إغلاق",
    receiptTitle: "إيصال الطلب",
    copyDetails: "نسخ التفاصيل",
    about: "من نحن",
    contact: "اتصل بنا",
    enterValid: "أدخل كمية صحيحة",
    walletFailed: "فشل ربط المحفظة",
    confirmBuy: "تأكيد الشراء",
    confirmSell: "تأكيد البيع",
    notConnected: "غير متصل"
  },
  ru: {
    title: "Обмен Stars ↔ TON",
    panel: "Панель обмена",
    rate: "Текущий курс:",
    amount: "Количество (Stars)",
    estTon: "Оценка TON (с учетом комиссии):",
    fee: "Комиссия:",
    lastUpdated: "Последнее обновление:",
    buy: "Купить Stars",
    sell: "Продать Stars",
    connect: "🔗 Подключить кошелек",
    walletNot: "Кошелек не подключен",
    walletYes: "Кошелек подключен:",
    history: "История заказов",
    support: "Поддержка",
    policy: "Политика",
    note: "Безопасно • Быстро • Прозрачно",
    langLabel: "🌐 Язык:",
    settingsTitle: "Настройки",
    feeSettingLabel: "Комиссия (%):",
    starsUsdLabel: "Базовая цена Stars (USD):",
    saveSettings: "Сохранить настройки",
    policyTitle: "Политика",
    policyBody:
      "• Прозрачное ценообразование: комиссия включена в отображаемый курс.\n" +
      "• Время обработки: обычно в течение нескольких минут.\n" +
      "• Кошелек: требуется подключение TON-кошелька.\n" +
      "• Безопасность: HTTPS; конфиденциальные данные не хранятся в мини-приложении.\n" +
      "• Поддержка: Telegram @TonStarExchange_support.\n" +
      "• Соответствие: транзакции должны соответствовать местным правилам.\n" +
      "• Возвраты: индивидуально для неудачных или дублированных транзакций.",
    close: "Закрыть",
    receiptTitle: "Квитанция заказа",
    copyDetails: "Копировать детали",
    about: "О нас",
    contact: "Контакты",
    enterValid: "Введите корректное количество",
    walletFailed: "Не удалось подключить кошелек",
    confirmBuy: "Подтвердить ПОКУПКУ",
    confirmSell: "Подтвердить ПРОДАЖУ",
    notConnected: "Не подключен"
  }
};

// Detect language from Telegram
let userLang = tg?.initDataUnsafe?.user?.language_code || "fa";
if (!translations[userLang]) userLang = "en";

// State
const state = {
  feePercent: Number(localStorage.getItem("feePercent")) || 2.5,
  starsUsd: Number(localStorage.getItem("starsUsd")) || 0.001,
  rateTonPerStar: 0.0005,
  lastUpdated: null,
  orders: JSON.parse(localStorage.getItem("orders") || "[]"),
  wallet: null,
  connector: null,
  lang: localStorage.getItem("lang") || userLang
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
  policyClose: document.getElementById("policyClose"),
  receiptModal: document.getElementById("receiptModal"),
  receiptTitle: document.getElementById("receiptTitle"),
  receiptBody: document.getElementById("receiptBody"),
  receiptClose: document.getElementById("receiptClose"),
  copyReceipt: document.getElementById("copyReceipt"),
  settingsTitle: document.getElementById("settingsTitle"),
  feeSettingLabel: document.getElementById("feeSettingLabel"),
  starsUsdLabel: document.getElementById("starsUsdLabel"),
  saveSettings: document.getElementById("saveSettings"),
  feeSetting: document.getElementById("feeSetting"),
  starsUsd: document.getElementById("starsUsd"),
  aboutLink: document.getElementById("aboutLink"),
  contactLink: document.getElementById("contactLink")
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
  els.receiptTitle.textContent = t.receiptTitle;
  els.copyReceipt.textContent = t.copyDetails;
  els.settingsTitle.textContent = t.settingsTitle;
  els.feeSettingLabel.textContent = t.feeSettingLabel;
  els.starsUsdLabel.textContent = t.starsUsdLabel;
  els.saveSettings.textContent = t.saveSettings;
  els.aboutLink.textContent = t.about;
  els.contactLink.textContent = t.contact;

  // Direction switch
  if (lang === "fa" || lang === "ar") {
    document.body.classList.remove("ltr");
    document.body.setAttribute("dir", "rtl");
  } else {
    document.body.classList.add("ltr");
    document.body.setAttribute("dir", "ltr");
  }
}

// Show Telegram user name
try {
  const name = tg?.initDataUnsafe?.user?.first_name || (state.lang === "fa" ? "کاربر مهمان" : state.lang === "ar" ? "ضيف" : "Guest");
  els.userName.textContent = name;
} catch {}

// Render rate
function renderRate() {
  els.feeText.textContent = `${state.feePercent}%`;
  els.rateText.textContent = `1 Stars ≈ ${state.rateTonPerStar.toFixed(6)} TON`;
  const locale = state.lang === "fa" ? "fa-IR" : state.lang === "ar" ? "ar" : state.lang === "ru" ? "ru-RU" : "en-US";
  els.lastUpdated.textContent = state.lastUpdated ? new Date(state.lastUpdated).toLocaleString(locale) : "—";
}

// Estimate
function updateEstimate() {
  const amt = Number(els.amount.value || 0);
  const ton = (amt * state.rateTonPerStar);
  els.estTon.textContent = Number.isFinite(ton) ? ton.toFixed(6) : "0";
}

// Fetch live rate (TON from API, Stars configurable)
async function fetchRate() {
  try {
    const res = await fetch("https://tonapi.io/v2/rates?tokens=ton");
    const data = await res.json();
    const tonUsd = data?.rates?.TON?.prices?.USD || data?.prices?.USD || 2.0;

    // Stars base price (configurable via settings)
    const starsUsd = state.starsUsd;

    // Stars→TON raw
    const rawTonPerStar = starsUsd / tonUsd;

    // Apply fee (reduce payout to user)
    const afterFee = rawTonPerStar * (1 - state.feePercent / 100);

    state.rateTonPerStar = afterFee;
    state.lastUpdated = Date.now();

    renderRate();
    updateEstimate();
  } catch (e) {
    console.error("Rate fetch failed", e);
    // Keep previous rate; update timestamp
    state.lastUpdated = Date.now();
    renderRate();
    updateEstimate();
  }
}

// Orders
function persistOrders() {
  localStorage.setItem("orders", JSON.stringify(state.orders));
}

function addOrderLocal(order) {
  state.orders.unshift(order);
  persistOrders();
  document.getElementById("orders").innerHTML = state.orders.map(o => `
    <li>
      <span>${o.action.toUpperCase()} • ${o.amount} Stars</span>
      <strong>${o.estTon} TON</strong>
    </li>
  `).join("");
}

// Receipt modal
function openReceipt(order) {
  const t = translations[state.lang];
  const lines = [
    `${t.receiptTitle}`,
    `—`,
    `Action: ${order.action.toUpperCase()}`,
    `Amount: ${order.amount} Stars`,
    `Estimated TON (after fee): ${order.estTon}`,
    `Rate: ${state.rateTonPerStar.toFixed(6)} TON / Stars`,
    `Fee: ${state.feePercent}%`,
    `Wallet: ${order.wallet || t.notConnected}`,
    `Time: ${new Date(order.ts).toLocaleString(state.lang === "fa" ? "fa-IR" : "en-US")}`
  ];
  els.receiptBody.textContent = lines.join("\n");
  els.receiptModal.classList.remove("hidden");
}

function closeReceipt() {
  els.receiptModal.classList.add("hidden");
}

async function copyReceipt() {
  try {
    await navigator.clipboard.writeText(els.receiptBody.textContent);
    els.copyReceipt.textContent = "Copied!";
    setTimeout(() => { els.copyReceipt.textContent = translations[state.lang].copyDetails; }, 1500);
  } catch {
    alert("Copy failed");
  }
}

// Send order
function sendOrder(type) {
  const t = translations[state.lang];
  const amt = Number(els.amount.value || 0);
  if (!amt || amt <= 0) return alert(t.enterValid);

  const payload = {
    action: type,
    amount: amt,
    estTon: Number(els.estTon.textContent),
    wallet: state.wallet,
    ts: Date.now()
  };

  const confirmText = type === "buy" ? t.confirmBuy : t.confirmSell;
  const ok = confirm(
    `${confirmText}:\n` +
    `Amount: ${payload.amount} Stars\n` +
    `Estimated TON (after fee): ${payload.estTon}\n` +
    `Wallet: ${payload.wallet || t.notConnected}`
  );
  if (!ok) return;

  if (tg) tg.sendData(JSON.stringify(payload));
  addOrderLocal(payload);
  openReceipt(payload);
}

// Wallet connect via TonConnect
async function connectWallet() {
  const t = translations[state.lang];
  try {
    if (!state.connector) {
      state.connector = new TonConnect({
        manifestUrl: "https://temorsarr.github.io/stars-miniapp/tonconnect-manifest.json"
      });
    }
    await state.connector.restoreConnection();
    const result = await state.connector.connect();
    state.wallet = result?.account?.address || null;
    els.walletStatus.textContent = state.wallet ? `${t.walletYes} ${state.wallet}` : t.walletNot;
  } catch (e) {
    alert(t.walletFailed);
  }
}

// Policy modal
function openPolicy() { els.policyModal.classList.remove("hidden"); }
function closePolicy() { els.policyModal.classList.add("hidden"); }

// Settings
function loadSettingsUI() {
  els.feeSetting.value = state.feePercent;
  els.starsUsd.value = state.starsUsd;
}
function saveSettings() {
  state.feePercent = Number(els.feeSetting.value) || state.feePercent;
  state.starsUsd = Number(els.starsUsd.value) || state.starsUsd;
  localStorage.setItem("feePercent", String(state.feePercent));
  localStorage.setItem("starsUsd", String(state.starsUsd));
  fetchRate();
}

// Events
els.amount.addEventListener("input", updateEstimate);
els.btnBuy.addEventListener("click", () => sendOrder("buy"));
els.btnSell.addEventListener("click", () => sendOrder("sell"));
els.btnConnect.addEventListener("click", connectWallet);
els.btnPolicy.addEventListener("click", openPolicy);
els.policyClose.addEventListener("click", closePolicy);
els.receiptClose.addEventListener("click", closeReceipt);
els.copyReceipt.addEventListener("click", copyReceipt);
els.langSelect.addEventListener("change", (e) => {
  state.lang = e.target.value;
  localStorage.setItem("lang", state.lang);
  applyTranslations(state.lang);
  renderRate();
  updateEstimate();
});
els.saveSettings.addEventListener("click", saveSettings);

// Init
(function init() {
  // Apply language
  applyTranslations(state.lang);
  els.langSelect.value = state.lang;

  // Load settings UI
  loadSettingsUI();

  // Render initial rate and orders
  renderRate();
  updateEstimate();
  addOrderLocal({}); // re-render list from state.orders without adding new
  state.orders.shift(); // remove the dummy

  // Fetch rate now and every 60s
  fetchRate();
  setInterval(fetchRate, 60000);

  // Telegram user name
  try {
    const name = tg?.initDataUnsafe?.user?.first_name || (state.lang === "fa" ? "کاربر مهمان" : "Guest");
    els.userName.textContent = name;
  } catch {}
})();
