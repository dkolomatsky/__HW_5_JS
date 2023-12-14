// Створіть об'єкт криптокошилок. У гаманці має зберігатись ім'я власника, кілька валют Bitcoin, Ethereum, Stellar і в кожній валюті додатково є ім'я валюти, логотип, кілька монет та курс на сьогоднішній день день. Також в об'єкті гаманець є метод при виклику якого він приймає ім'я валюти та виводить на сторінку інформацію. "Доброго дня, ... ! На вашому балансі (Назва валюти та логотип) залишилося N монет, якщо ви сьогодні продасте їх те, отримаєте ...грн.

const wallet = {
	userName: "Zhenia",
	bitcoin: {
		coinName: "Bitcoin",
		coinLogo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
		coinCount: 1,
		coinRate: 41251.78
	},
	ethereum: {
		coinName: "Ethereum",
		coinLogo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
		coinCount: 3,
		coinRate: 2189.95
	},
	stellar: {
		coinName: "Stellar",
		coinLogo: "https://s2.coinmarketcap.com/static/img/coins/64x64/512.png",
		coinCount: 4,
		coinRate: 0.1227
	},
	show: function (coin) {
		return (`Доброго дня, ${wallet.userName} ! На вашому балансі ${wallet[coin].coinName}, <img src = "${wallet[coin].coinLogo}" alt = "${wallet[coin].coinName}"> залишилося ${wallet[coin].coinCount} монет, якщо ви сьогодні продасте їх те, отримаєте ${(wallet[coin].coinCount * wallet[coin].coinRate * 37).toFixed(2)} грн.`)
	}
};


document.write(wallet.show(prompt("Enter coin name: ", "bitcoin, ethereum, stellar")));