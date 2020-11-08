//Global Variable

const addCurrencyBtnt = document.querySelector(".drop");
const addCurrencyBtn1 = document.querySelector(".drops");
const addCurrencyListt = document.querySelector(".add-currency-list");
const addCurrencyList1 = document.querySelector(".add-currency-list1");
let conversions = {};

let primaryCurrency = 0;
let secondaryCurrency = 2;

const initiallyDisplayedCurrenciest = ["USD", "JPY"];
/*let baseCurrencyt;
let baseCurrencyAmountt;*/

let currenciest = [
	{
    name: "US Dollar",
    abbreviation: "USD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/us.gif"
  },
  {
    name: "Euro",
    abbreviation: "EUR",
    symbol: "\u20AC",
    flagURL: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg"
  },
  {
    name: "Japanese Yen",
    abbreviation: "JPY",
    symbol: "\u00A5",
    flagURL: "http://www.geonames.org/flags/l/jp.gif"
  },
  {
    name: "British Pound",
    abbreviation: "GBP",
    symbol: "\u00A3",
    flagURL: "http://www.geonames.org/flags/l/uk.gif"
  },
  {
    name: "Australian Dollar",
    abbreviation: "AUD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/au.gif"
  },
  {
    name: "Canadian Dollar",
    abbreviation: "CAD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/ca.gif"
  },
  {
    name: "Swiss Franc",
    abbreviation: "CHF",
    symbol: "\u0043\u0048\u0046",
    flagURL: "http://www.geonames.org/flags/l/ch.gif"
  },
  {
    name: "Chinese Yuan Renminbi",
    abbreviation: "CNY",
    symbol: "\u00A5",
    flagURL: "http://www.geonames.org/flags/l/cn.gif"
  },
  {
    name: "Swedish Krona",
    abbreviation: "SEK",
    symbol: "\u006B\u0072",
    flagURL: "http://www.geonames.org/flags/l/se.gif"
  },
  {
    name: "New Zealand Dollar",
    abbreviation: "NZD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/nz.gif"
  },
  {
    name: "Mexican Peso",
    abbreviation: "MXN",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/mx.gif"
  },
  {
    name: "Singapore Dollar",
    abbreviation: "SGD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/sg.gif"
  },
  {
    name: "Hong Kong Dollar",
    abbreviation: "HKD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/hk.gif"
  },
  {
    name: "Norwegian Krone",
    abbreviation: "NOK",
    symbol: "\u006B\u0072",
    flagURL: "http://www.geonames.org/flags/l/no.gif"
  },
  {
    name: "South Korean Won",
    abbreviation: "KRW",
    symbol: "\u20A9",
    flagURL: "http://www.geonames.org/flags/l/kr.gif"
  },
  {
    name: "Turkish Lira",
    abbreviation: "TRY",
    symbol: "\u20BA",
    flagURL: "http://www.geonames.org/flags/l/tr.gif"
  },
  {
    name: "Russian Ruble",
    abbreviation: "RUB",
    symbol: "\u20BD",
    flagURL: "http://www.geonames.org/flags/l/ru.gif"
  },
  {
    name: "Indian Rupee",
    abbreviation: "INR",
    symbol: "\u20B9",
    flagURL: "http://www.geonames.org/flags/l/in.gif"
  },
  {
    name: "Brazilian Real",
    abbreviation: "BRL",
    symbol: "\u0052\u0024",
    flagURL: "http://www.geonames.org/flags/l/br.gif"
  },
  {
    name: "South African Rand",
    abbreviation: "ZAR",
    symbol: "\u0052",
    flagURL: "http://www.geonames.org/flags/l/za.gif"
  },
  {
    name: "Philippine Peso",
    abbreviation: "PHP",
    symbol: "\u20B1",
    flagURL: "http://www.geonames.org/flags/l/ph.gif"
  },
  {
    name: "Czech Koruna",
    abbreviation: "CZK",
    symbol: "\u004B\u010D",
    flagURL: "http://www.geonames.org/flags/l/cz.gif"
  },
  {
    name: "Indonesian Rupiah",
    abbreviation: "IDR",
    symbol: "\u0052\u0070",
    flagURL: "http://www.geonames.org/flags/l/id.gif"
  },
  {
    name: "Malaysian Ringgit",
    abbreviation: "MYR",
    symbol: "\u0052\u004D",
    flagURL: "http://www.geonames.org/flags/l/my.gif"
  },
  {
    name: "Hungarian Forint",
    abbreviation: "HUF",
    symbol: "\u0046\u0074",
    flagURL: "http://www.geonames.org/flags/l/hu.gif"
  },
  {
    name: "Icelandic Krona",
    abbreviation: "ISK",
    symbol: "\u006B\u0072",
    flagURL: "http://www.geonames.org/flags/l/is.gif"
  },
  {
    name: "Croatian Kuna",
    abbreviation: "HRK",
    symbol: "\u006B\u006E",
    flagURL: "http://www.geonames.org/flags/l/hr.gif"
  },
  {
    name: "Bulgarian Lev",
    abbreviation: "BGN",
    symbol: "\u043B\u0432",
    flagURL: "http://www.geonames.org/flags/l/bg.gif"
  },
  {
    name: "Romanian Leu",
    abbreviation: "RON",
    symbol: "\u006C\u0065\u0069",
    flagURL: "http://www.geonames.org/flags/l/ro.gif"
  },
  {
    name: "Danish Krone",
    abbreviation: "DKK",
    symbol: "\u006B\u0072",
    flagURL: "http://www.geonames.org/flags/l/dk.gif"
  },
  {
    name: "Thai Baht",
    abbreviation: "THB",
    symbol: "\u0E3F",
    flagURL: "http://www.geonames.org/flags/l/th.gif"
  },
  {
    name: "Polish Zloty",
    abbreviation: "PLN",
    symbol: "\u007A\u0142",
    flagURL: "http://www.geonames.org/flags/l/pl.gif"
  },
  {
    name: "Israeli Shekel",
    abbreviation: "ILS",
    symbol: "\u20AA",
    flagURL: "http://www.geonames.org/flags/l/il.gif"
  }
];

//Event Listeners

function addCurrencyBtnClickt(event) {
    addCurrencyBtnt.classList.toggle("open");
}
addCurrencyBtnt.addEventListener("click", addCurrencyBtnClickt);

function addCurrencyBtnClick1(event) {
    addCurrencyBtn1.classList.toggle("open");
}
addCurrencyBtn1.addEventListener("click", addCurrencyBtnClick1);

function populateAddCyrrencyListt() {
    for (let i = 0; i < currenciest.length; i++) {
        addCurrencyListt.insertAdjacentHTML(
            "beforeend",
            `<li data-currency=${currenciest[i].abbreviation} id="primary-${i}" onclick="primartyCurrenyChanged(this.id)">
          <img src=${currenciest[i].flagURL} class="flag"><span>${currenciest[i].abbreviation} - ${currenciest[i].name}</span>
        </li>`
        );
    }
}
populateAddCyrrencyListt();

function populateAddCyrrencyList1() {
    for (let i = 0; i < currenciest.length; i++) {
        addCurrencyList1.insertAdjacentHTML(
            "beforeend",
            `<li data-currency=${currenciest[i].abbreviation} id="secondary-${i}" onclick="secondaryCurrenyChanged(this.id)">
          <img src=${currenciest[i].flagURL} class="flag"><span>${currenciest[i].abbreviation} - ${currenciest[i].name}</span>
        </li>`
        );
    }
}
populateAddCyrrencyList1();

function primartyCurrenyChanged(id) {
    const currId = id.split('-')[1];
    primaryCurrency = currId;
    document.getElementById('currency-name-primary').innerText = currenciest[currId].abbreviation + ' - ' + currenciest[currId].name;
    document.getElementById('primary-currency-image').src = currenciest[currId].flagURL;
    document.getElementById('primary-currency-symbol').innerText = currenciest[currId].symbol;
    const url = "https://api.exchangeratesapi.io/latest?base=" + currenciest[currId].abbreviation;
    $.get(url, function(data, status) {
        if (status == 'success') {
            conversions = data;
            document.getElementById('primary-rate').innerText = `1 ${currenciest[primaryCurrency].abbreviation} = 1 ${currenciest[primaryCurrency].abbreviation}`;
            document.getElementById('secondary-rate').innerText = `1 ${currenciest[primaryCurrency].abbreviation} = ${data.rates[currenciest[secondaryCurrency].abbreviation]} ${currenciest[secondaryCurrency].abbreviation}`;
        } else {
            alert('Error Occured. Please Reload');
        }
    });
    addCurrencyBtnt.classList.toggle("open");
}

function secondaryCurrenyChanged(id) {
    const currId = id.split('-')[1];
    secondaryCurrency = currId;
    document.getElementById('currency-name-secondary').innerText = currenciest[currId].abbreviation + ' - ' + currenciest[currId].name;
    document.getElementById('secondary-currency-image').src = currenciest[currId].flagURL;
    document.getElementById('secondary-currency-symbol').innerText = currenciest[currId].symbol;
    const url = "https://api.exchangeratesapi.io/latest?base=" + currenciest[primaryCurrency].abbreviation;
    $.get(url, function(data, status) {
        if (status == 'success') {
            conversions = data;
            document.getElementById('primary-rate').innerText = `1 ${currenciest[primaryCurrency].abbreviation} = 1 ${currenciest[primaryCurrency].abbreviation}`;
            document.getElementById('secondary-rate').innerText = `1 ${currenciest[primaryCurrency].abbreviation} = ${data.rates[currenciest[secondaryCurrency].abbreviation]} ${currenciest[secondaryCurrency].abbreviation}`;
        } else {
            alert('Error Occured. Please Reload');
        }
    });
    addCurrencyBtn1.classList.toggle("open");
}

$('#convert').click(function() {
    const primaryValue = document.getElementById('primary-currency-value').value;
    document.getElementById('secondary-currency-value').value = primaryValue * conversions.rates[currenciest[secondaryCurrency].abbreviation].toFixed(4);
})

$('#exchange').click(function() {
    const swapCurrency = primaryCurrency;
    primaryCurrency = secondaryCurrency;
    secondaryCurrency = swapCurrency;

    const swapCurrencyName = document.getElementById('currency-name-primary').innerText;
    document.getElementById('currency-name-primary').innerText = document.getElementById('currency-name-secondary').innerText;
    document.getElementById('currency-name-secondary').innerText = swapCurrencyName;

    const swapCurrencyFlag = document.getElementById('primary-currency-image').src;
    document.getElementById('primary-currency-image').src = document.getElementById('secondary-currency-image').src;
    document.getElementById('secondary-currency-image').src = swapCurrencyFlag;

    const swapCurrencySymbol = document.getElementById('primary-currency-symbol').innerText;
    document.getElementById('primary-currency-symbol').innerText = document.getElementById('secondary-currency-symbol').innerText;
    document.getElementById('secondary-currency-symbol').innerText = swapCurrencySymbol;

    document.getElementById('primary-currency-value').value = 0;
    document.getElementById('secondary-currency-value').value = 0;

    const url = "https://api.exchangeratesapi.io/latest?base=" + currencies[primaryCurrency].abbreviation;
    $.get(url, function(data, status) {
        if (status == 'success') {
            conversions = data;
            document.getElementById('primary-rate').innerText = `1 ${currencies[primaryCurrency].abbreviation} = 1 ${currencies[primaryCurrency].abbreviation}`;
            document.getElementById('secondary-rate').innerText = `1 ${currencies[primaryCurrency].abbreviation} = ${data.rates[currencies[secondaryCurrency].abbreviation]} ${currencies[secondaryCurrency].abbreviation}`;
        } else {
            alert('Error Occured. Please Reload');
        }
    });
});

$(document).ready(function() {
    const url = "https://api.exchangeratesapi.io/latest?base=USD";
    $.get(url, function(data, status) {
        if (status == 'success') {
            conversions = data;
            document.getElementById('primary-rate').innerText = `1 ${currenciest[primaryCurrency].abbreviation} = 1 ${currenciest[primaryCurrency].abbreviation}`;
            document.getElementById('secondary-rate').innerText = `1 ${currenciest[primaryCurrency].abbreviation} = ${data.rates[currenciest[secondaryCurrency].abbreviation]} ${currenciest[secondaryCurrency].abbreviation}`;
        } else {
            alert('Error Occured. Please Reload');
        }
    });
});
