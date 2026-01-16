export const LANGS = {
  fa: {
    title: "صرافی Stars ↔ TON",
    buy: "خرید Stars",
    sell: "فروش Stars",
    amount: "مقدار",
    connect: "اتصال کیف پول",
    policy: "سیاست‌ها",
    about: "درباره ما",
    contact: "تماس با ما",
    submit: "ثبت سفارش",
    status_wait: "در انتظار پرداخت",
    receipt: "رسید سفارش",
    close: "بستن"
  },
  en: {
    title: "Stars ↔ TON Exchange",
    buy: "Buy Stars",
    sell: "Sell Stars",
    amount: "Amount",
    connect: "Connect Wallet",
    policy: "Policy",
    about: "About Us",
    contact: "Contact",
    submit: "Create Order",
    status_wait: "Waiting for payment",
    receipt: "Order Receipt",
    close: "Close"
  },
  ar: {
    title: "منصة Stars ↔ TON",
    buy: "شراء Stars",
    sell: "بيع Stars",
    amount: "الكمية",
    connect: "ربط المحفظة",
    policy: "السياسات",
    about: "معلومات عنا",
    contact: "اتصل بنا",
    submit: "إنشاء الطلب",
    status_wait: "بانتظار الدفع",
    receipt: "إيصال الطلب",
    close: "إغلاق"
  },
  ru: {
    title: "Обмен Stars ↔ TON",
    buy: "Купить Stars",
    sell: "Продать Stars",
    amount: "Количество",
    connect: "Подключить кошелёк",
    policy: "Политика",
    about: "О нас",
    contact: "Контакты",
    submit: "Создать заказ",
    status_wait: "Ожидание оплаты",
    receipt: "Квитанция",
    close: "Закрыть"
  }
};

export let currentLang = "fa";

export function setLang(lang) {
  currentLang = LANGS[lang] ? lang : "fa";

  document.documentElement.lang = currentLang;
  document.documentElement.dir =
    currentLang === "fa" || currentLang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = LANGS[currentLang][key];
  });
}
