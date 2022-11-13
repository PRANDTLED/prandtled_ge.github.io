let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#198754";
tg.MainButton.text = "Გადარჩენა";
tg.MainButton.show();

Telegram.WebApp.onEvent("mainButtonClicked", function () {
  let message = `?`;
  const city = document.getElementById("city");
  if (city.value === "1") {
    message += `Keyword=Тбилиси&cities=1996871&GID=1996871`;
  }
  if (city.value === "2") {
    message += `Keyword=Батуми&cities=8742159&GID=8742159`;
  }
  const deal = document.getElementById("deal");
  message += `&AdTypeID=${deal.value}`;
  const type1 = document.getElementById("btn-check-outlined");
  if (type1.checked === true) {
    message += `&PrTypeID[]=1`;
  }
  const type2 = document.getElementById("btn-check-2-outlined");
  if (type2.checked === true) {
    message += `&PrTypeID[]=2`;
  }
  const type3 = document.getElementById("btn-check-3-outlined");
  if (type3.checked === true) {
    message += `&PrTypeID[]=7`;
  }
  const type4 = document.getElementById("btn-check-4-outlined");
  if (type4.checked === true) {
    message += `&PrTypeID[]=4`;
  }
  const currency1 = document.getElementById("success-outlined");
  if (currency1.checked === true) {
    message += `&FCurrencyID=1`;
  }
  const currency2 = document.getElementById("danger-outlined");
  if (currency2.checked === true) {
    message += `&FCurrencyID=2`;
  }
  const pricefrom = document.getElementById("pricefrom");
  const priceto = document.getElementById("priceto");
  if (pricefrom.value !== "") {
    if (priceto.value !== "") {
      message += `&FPriceFrom=${pricefrom.value}&FPriceTo=${priceto.value}`;
    }
  }
  const squarefrom = document.getElementById("squarefrom");
  const squareto = document.getElementById("squareto");
  if (squarefrom.value !== "") {
    if (squareto.value !== "") {
      message += `&AreaSizeFrom=${squarefrom.value}&AreaSizeTo=${squareto.value}`;
    }
  }
  const rooms1 = document.getElementById("btn-check-5-outlined");
  if (rooms1.checked === true) {
    message += `&RoomNums[]=1`;
  }
  const rooms2 = document.getElementById("btn-check-6-outlined");
  if (rooms2.checked === true) {
    message += `&RoomNums[]=2`;
  }
  const rooms3 = document.getElementById("btn-check-7-outlined");
  if (rooms3.checked === true) {
    message += `&RoomNums[]=3`;
  }
  const rooms4 = document.getElementById("btn-check-8-outlined");
  if (rooms4.checked === true) {
    message += `&RoomNums[]=4`;
  }      
  tg.sendData(message);
});
