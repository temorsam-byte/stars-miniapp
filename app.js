const tg = window.Telegram?.WebApp;
if (tg) { tg.expand(); tg.ready(); }

// ترجمه‌ها
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
    note: "امن • سریع • شفاف"
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
    note: "Secure • Fast • Transparent"
  }
};

let userLang = tg?.initDataUnsafe?.user?.language_code || "fa";
if (!translations[userLang]) userLang = "en";

// وضعیت
const state = {
  feePercent: 2.5,
  rateTonPerStar: 0.0005,
  lastUpdated: null,
  orders: [],
  wallet: null,
  connector: null,
  lang: userLang
};

// المنت‌ها
const els = {
  appTitle: document.getElementById("appTitle"),
  panelTitle: document.getElementById("panelTitle"),
  rateLabel: document.getElementById("rateLabel"),
  amountLabel: document.getElementById("amountLabel"),
  estTonLabel: document.getElementById
