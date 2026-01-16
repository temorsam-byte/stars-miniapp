const tg = window.Telegram?.WebApp;
if (tg) { tg.expand(); tg.ready(); }

const state = {
  rate: 0.0005, // نمونه: هر 1 Stars = 0.0005 TON (بعداً از API می‌آد)
  orders: []
};

const els = {
  rateText: document.getElementById('rateText'),
  amount: document.getElementById('amount'),
  estTon: document.getElementById('estTon'),
  btnBuy: document.getElementById('btnBuy'),
  btnSell: document.getElementById('btnSell'),
  orders: document.getElementById('orders'),
  userName: document.getElementById('userName'),
  btnSupport: document.getElementById('btnSupport'),
  btnPolicy: document.getElementById('btnPolicy')
};

// نمایش نام کاربر تلگرام
try {
  const name = tg?.initDataUnsafe?.user?.first_name || 'Guest';
  els.userName.textContent = name;
} catch {}

// نمایش نرخ
function renderRate() {
  els.rateText.textContent = `1 Stars = ${state.rate} TON`;
}
renderRate();

// محاسبه تخمینی
function updateEstimate() {
  const amt = Number(els.amount.value || 0);
  const ton = (amt * state.rate).toFixed(6);
  els.estTon.textContent = ton;
}
els.amount.addEventListener('input', updateEstimate);

// ارسال سفارش به ربات
function sendOrder(type) {
  const amt = Number(els.amount.value || 0);
  if (!amt || amt <= 0) {
    alert('Please enter a valid amount.');
    return;
  }
  const payload = { action: type, amount: amt, estTon: Number(els.estTon.textContent), ts: Date.now() };
  if (tg) {
    tg.sendData(JSON.stringify(payload));
  }
  addOrderLocal(payload);
}
els.btnBuy.addEventListener('click', () => sendOrder('buy'));
els.btnSell.addEventListener('click', () => sendOrder('sell'));

// تاریخچه محلی برای نمایش
function addOrderLocal(order) {
  state.orders.unshift(order);
  renderOrders();
}
function renderOrders() {
  els.orders.innerHTML = state.orders.map(o => `
    <li>
      <span>${o.action.toUpperCase()} • ${o.amount} Stars</span>
      <strong>${o.estTon} TON</strong>
    </li>
  `).join('');
}
renderOrders();

// پشتیبانی و سیاست‌ها
els.btnSupport.addEventListener('click', () => alert('Support: @TonStarExchange_support'));
els.btnPolicy.addEventListener('click', () => alert('Policy: Transparent fees, secure processing.'));
