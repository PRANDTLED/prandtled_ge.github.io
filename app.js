let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#198754";
tg.MainButton.text = "Გადარჩენა";
tg.MainButton.show();

Telegram.WebApp.onEvent("mainButtonClicked", function () {
  let message_ss = `?`;
  let message_ss_deal = `:`;
  let message_ss_type = `:`;
  let message_mh_type = `:`;
  let message = `?`;
  const city = document.getElementById("city");
  if (city.value === "1") {
    message += `Keyword=Тбилиси&cities=1996871&GID=1996871`;
    message_ss += `MunicipalityId=95&CityIdList=95`;
  }
  if (city.value === "2") {
    message += `Keyword=Батуми&cities=8742159&GID=8742159`;
    message_ss += `MunicipalityId=96&CityIdList=96`;
  }
  const deal = document.getElementById("deal");
  message += `&AdTypeID=${deal.value}`;
  message_ss_deal += `${deal.value}:`;
  const type1 = document.getElementById("btn-check-outlined");
  if (type1.checked === true) {
    message_mh_type += `/&PrTypeID=1`;
    message_ss_type += `/bina`;
  }
  const type2 = document.getElementById("btn-check-2-outlined");
  if (type2.checked === true) {
    message_mh_type += `/&PrTypeID=2`;
    message_ss_type += `/kerdzo-saxli`;
  }
  const type3 = document.getElementById("btn-check-3-outlined");
  if (type3.checked === true) {
    message_mh_type += `/&PrTypeID=7`;
    message_ss_type += `/sastumro`;
  }
  const type4 = document.getElementById("btn-check-4-outlined");
  if (type4.checked === true) {
    message_mh_type += `/&PrTypeID=4`;
    message_ss_type += `/komerciuli`;
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
    message += `&FPriceFrom=${pricefrom.value}`;
    message_ss = `&PriceFrom=${pricefrom.value}`;
  }
  if (priceto.value !== "") {
    message += `&FPriceTo=${priceto.value}`;
    message_ss = `&PriceTo=${priceto.value}`;
  }
  const squarefrom = document.getElementById("squarefrom");
  const squareto = document.getElementById("squareto");
  if (squarefrom.value !== "") {
    message += `&AreaSizeFrom=${squarefrom.value}`;
    message_ss += `&QuantityFrom=${squarefrom.value}`;
  }
  if (squareto.value !== "") {
    message += `&AreaSizeTo=${squareto.value}`;
    message_ss += `&QuantityTo=${squareto.value}`;
  }
  const rooms1 = document.getElementById("btn-check-5-outlined");
  if (rooms1.checked === true) {
    message += `&RoomNums=1`;
    message_ss += `&Rooms=1`;
  }
  const rooms2 = document.getElementById("btn-check-6-outlined");
  if (rooms2.checked === true) {
    message += `&RoomNums=2`;
    message_ss += `&Rooms=2`;
  }
  const rooms3 = document.getElementById("btn-check-7-outlined");
  if (rooms3.checked === true) {
    message += `&RoomNums=3`;
    message_ss += `&Rooms=3`;
  }
  const rooms4 = document.getElementById("btn-check-8-outlined");
  if (rooms4.checked === true) {
    message += `&RoomNums=4`;
    message_ss += `&Rooms=4`;
  }
  const owner = document.getElementById("btn-check-9-outlined");
  if (owner.checked === true) {
    message += `&OwnerTypeID=1`;
    message_ss += `&IndividualEntityOnly=true`;
  }
  message += message_ss_type;
  message += message_ss_deal;
  message += message_ss;
  message += message_mh_type;
  tg.sendData(message);
});
