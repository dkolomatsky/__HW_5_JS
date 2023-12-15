// 1. Створіть об'єкт заробітної плати obj. Виведіть на екран зарплату Петі та Колі.
//Цей об'єкт надано:                   
const obj = {
  'Коля': '1000',
  'Вася': '500',
  'Петя': '200',
}; 
document.getElementById('Kolya').innerHTML = 'Заробітня плата Колі: ' + obj.Коля;
document.getElementById('Petya').innerHTML = 'Заробітня плата Петі: ' + obj.Петя;       
// 2.Якщо змінна a більше нуля - то в ggg запишемо функцію, яка виводить один!, інакше запишемо функцію, яка виводить два!

const a = prompt('Задайте число від 0 до ...');
const one = () => 1;
const two = () => 2;
function ggg (one,two){
  return a > 0 ? 'Спрацювала функція "one", рез-т: ' + one() : 'спрацювала функція "two", рез-т: ' + two();
}
document.write(ggg(one,two));
document.write('<br>');
// 3.Функція ggg приймає 2 параметри: анонімну функцію, яка повертає 3 та анонімну функцію, яка повертає 4. Поверніть результатом функції ggg суму 3 та 4.
const gg1 = (f1,f2) => result = f1() + f2();
const fn1 = () => 3;
const fn2 = () => 4;
document.write('Рез-т функції gg1: ' + gg1(fn1, fn2));
document.write('<br>');
// 4.Напишіть функцію isEmpty(obj), яка повертає true, якщо об'єкт не має властивостей, інакше false.
const obj1 = {
  // num1 : 1,
}
function isEmpty(obj1) {
  for(let key in obj1) {
if(obj1.hasOwnProperty(key)){
  return "Обьект має властивості і тому відповідь функції: " + "<<  " + false + "  >>";
}
  }
  return "Обьект не має властивості і тому відповідь функції: " + "<<  " + true + "  >>";
}
document.write(isEmpty(obj1));
document.write('<br>');
// 5. Виведіть на сторінку назву валюти ціну купівлі та ціну продажу. https://api.privatbank.ua/p24api/exchange_rates?json&date=13.12.2023
const dataOfCurrency = {
  "exchangeRate":[
    {"baseCurrency":"UAH","currency":"AUD","saleRateNB":24.3627000,"purchaseRateNB":24.3627000},
    {"baseCurrency":"UAH","currency":"AZN","saleRateNB":21.7693000,"purchaseRateNB":21.7693000},
    {"baseCurrency":"UAH","currency":"BYN","saleRateNB":13.4436000,"purchaseRateNB":13.4436000},
    {"baseCurrency":"UAH","currency":"CAD","saleRateNB":27.2598000,"purchaseRateNB":27.2598000},
    {"baseCurrency":"UAH","currency":"CHF","saleRateNB":42.3013000,"purchaseRateNB":42.3013000,"saleRate":42.7700000,"purchaseRate":42.1600000},{"baseCurrency":"UAH","currency":"CNY","saleRateNB":5.1601000,"purchaseRateNB":5.1601000},
    {"baseCurrency":"UAH","currency":"CZK","saleRateNB":1.6349000,"purchaseRateNB":1.6349000,"saleRate":1.6450000,"purchaseRate":1.6050000},
    {"baseCurrency":"UAH","currency":"DKK","saleRateNB":5.3560000,"purchaseRateNB":5.3560000},
    {"baseCurrency":"UAH","currency":"EUR","saleRateNB":39.9376000,"purchaseRateNB":39.9376000,"saleRate":40.7000000,"purchaseRate":39.7000000},{"baseCurrency":"UAH","currency":"GBP","saleRateNB":46.4860000,"purchaseRateNB":46.4860000,"saleRate":47.0700000,"purchaseRate":46.4000000},{"baseCurrency":"UAH","currency":"GEL","saleRateNB":13.4518000,"purchaseRateNB":13.4518000},
    {"baseCurrency":"UAH","currency":"HUF","saleRateNB":0.1045510,"purchaseRateNB":0.1045510},
    {"baseCurrency":"UAH","currency":"ILS","saleRateNB":9.9723000,"purchaseRateNB":9.9723000},
    {"baseCurrency":"UAH","currency":"JPY","saleRateNB":0.2547400,"purchaseRateNB":0.2547400},
    {"baseCurrency":"UAH","currency":"KZT","saleRateNB":0.0809550,"purchaseRateNB":0.0809550},
    {"baseCurrency":"UAH","currency":"MDL","saleRateNB":2.0750000,"purchaseRateNB":2.0750000},
    {"baseCurrency":"UAH","currency":"NOK","saleRateNB":3.3919000,"purchaseRateNB":3.3919000},
    {"baseCurrency":"UAH","currency":"PLN","saleRateNB":9.2008000,"purchaseRateNB":9.2008000,"saleRate":9.4000000,"purchaseRate":9.0300000},
    {"baseCurrency":"UAH","currency":"SEK","saleRateNB":3.5388000,"purchaseRateNB":3.5388000},
    {"baseCurrency":"UAH","currency":"SGD","saleRateNB":27.5954000,"purchaseRateNB":27.5954000},
    {"baseCurrency":"UAH","currency":"TMT","saleRateNB":10.3867000,"purchaseRateNB":10.3867000},
    {"baseCurrency":"UAH","currency":"TRY","saleRateNB":1.2735000,"purchaseRateNB":1.2735000},
    {"baseCurrency":"UAH","currency":"UAH","saleRateNB":1.0000000,"purchaseRateNB":1.0000000},
    {"baseCurrency":"UAH","currency":"USD","saleRateNB":36.9861000,"purchaseRateNB":36.9861000,"saleRate":37.4500000,"purchaseRate":36.9500000},
    {"baseCurrency":"UAH","currency":"UZS","saleRateNB":0.0029561,"purchaseRateNB":0.0029561},
    {"baseCurrency":"UAH","currency":"XAU","saleRateNB":73542.7900000,"purchaseRateNB":73542.7900000}
]
}
const tbody = document.getElementById("tbody");
tbody.style = "text-align:center; background-color: lightgreen";

for(let i = 0; i < dataOfCurrency.exchangeRate.length; i++) {
  const tr = document.createElement("tr");
  const currencyName = document.createElement("td");
  const saleRateNB = document.createElement("td");
  const purchaseRateNB = document.createElement("td");

  const curencyInfo = dataOfCurrency.exchangeRate[i];

  tr.style = "border: 1px solid black";

  currencyName.innerHTML += curencyInfo.currency;
  saleRateNB.innerHTML += curencyInfo.saleRateNB.toFixed(2);
  purchaseRateNB.innerHTML += curencyInfo.purchaseRateNB.toFixed(2);

  tbody.append(tr);
  tr.append(currencyName);
  tr.append(saleRateNB);
  tr.append(purchaseRateNB);

}






