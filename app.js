import { setLang } from "./i18n.js";

const tg = window.Telegram.WebApp;
tg.ready();

setLang(tg.initDataUnsafe?.user?.language_code || "fa");

langSelect.onchange = e => setLang(e.target.value);

submit.onclick = () => {
  const orderId = "ORD-" + Date.now();

  receipt.innerHTML = `
    <hr>
    <b data-i18n="receipt"></b>
    <p>ID: ${orderId}</p>
    <p data-i18n="status_wait"></p>
  `;
};
