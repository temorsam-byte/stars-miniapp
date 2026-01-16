const tg = window.Telegram.WebApp;
tg.ready();

const LANG = {
  fa: {
    title: "صرافی Stars ↔ TON",
    buy: "خرید Stars",
    sell: "فروش Stars",
    type: "نوع معامله",
    amount: "مقدار",
    submit: "ثبت سفارش",
    wait: "در انتظار پرداخت",
    policy: "سیاست‌ها"
  },
  en: {
    title: "Stars ↔ TON Exchange",
    buy: "Buy Stars",
    sell: "Sell Stars",
    type: "Order Type",
    amount: "Amount",
    submit: "Create Order",
    wait: "Waiting for payment",
    policy: "Policy"
  }
};

let current = "fa";

function setLang(l) {
  current = LANG[l] ? l : "fa";
  document.documentElement.dir = l === "fa" ? "rtl" : "ltr";

  title.textContent = LANG[current].title;
  buyText.textContent = LANG[current].buy;
  sellText.textContent = LANG[current].sell;
  typeLabel.textContent = LANG[current].type;
  amountLabel.textContent = LANG[current].amount;
  submit.textContent = LANG[current].submit;
  policyBtn.textContent = LANG[current].policy;
}

setLang(tg.initDataUnsafe?.user?.language_code || "fa");

lang.onchange = e => setLang(e.target.value);

submit.onclick = () => {
  const id = "ORD-" + Date.now();
  receipt.innerHTML = `
    <b>Order ID:</b> ${id}<br>
    <span>${LANG[current].wait}</span>
  `;
  tg.HapticFeedback.impactOccurred("medium");
};
