let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#198754";
tg.MainButton.show();

Telegram.WebApp.onEvent("mainButtonClicked", function () {
  //   alert("WOW");
  let message = `Фильтры\n`;
  const city = document.getElementById("city");
  message += `Город: ${city.value}\n`;
  const deal = document.getElementById("deal");
  message += `Тип сделки: ${deal.value}\n`;
  const type1 = document.getElementById("btn-check-outlined");
  const type2 = document.getElementById("btn-check-2-outlined");
  const type3 = document.getElementById("btn-check-3-outlined");
  const type4 = document.getElementById("btn-check-4-outlined");
  message += `Тип недвижимости: ${type1.checked} ${type2.checked} ${type3.checked} ${type4.checked}\n`;
  const currency1 = document.getElementById("success-outlined");
  const currency2 = document.getElementById("danger-outlined");
  message += `Валюта: ${currency1.checked} ${currency2.checked}\n`;
  const pricefrom = document.getElementById("pricefrom");
  const priceto = document.getElementById("priceto");
  message += `Цена: от ${pricefrom.value} до ${priceto.value}\n`;
  const squarefrom = document.getElementById("squarefrom");
  const squareto = document.getElementById("squareto");
  message += `Площадь: от ${squarefrom.value} до ${squareto.value}\n`;
  message += `Тип сделки: ${deal.value}\n`;
  const rooms1 = document.getElementById("btn-check-5-outlined");
  const rooms2 = document.getElementById("btn-check-6-outlined");
  const rooms3 = document.getElementById("btn-check-7-outlined");
  const rooms4 = document.getElementById("btn-check-8-outlined");
  message += `Количество комнат: ${rooms1.checked} ${rooms2.checked} ${rooms3.checked} ${rooms4.checked}\n`;
  tg.sendData(message);
});
