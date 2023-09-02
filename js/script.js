// Реалізуйте наступну систему, схожу до розглянутої на вебінарі:
// 1) чотири класи для створення об'єктів-сутностей (це можуть бути тварини, покемони, раси і т.д. - проявіть фантазію)
// 2) у кожного класу має бути мінімум 3 властивості та мінімум 3 методи(але можна й більше)
// 3) у кожного класу має бути своя унікальна властивість
// 4) у кожного класу має бути приватна властивість
// 5) у двох класів має бути спільний предок та спільний метод характерний тільки для них
// 6) у всіх чотирьох класів має бути один (крім проміжних) клас-предок

//========================================================================================================================

// Спільний клас-предок для всіх класів Apple Devices
class AppleDevice {
	constructor(name, year) {
		this.name = name;
		this.year = year;
	}

	// Спільний метод для всіх підкласів
	commonMethod() {
		console.log(`This is a common method for ${this.name}`);
	}
}

// Спільний клас-предок для iPhone та iPad
class TouchDevice extends AppleDevice {
	constructor(name, model, year) {
		super(name, year);
		this.model = model;
	}

	// Унікальний метод для iPhone та iPad
	connectToInternet() {
		console.log(`Connecting to the internet on ${this.name} ${this.model}`);
	}
}

// Підклас 1 - iPhone
class iPhone extends TouchDevice {
	#uniqueFeature = "Face ID"; // Приватна унікальна властивість для iPhone

	constructor(name, model, year) {
		super(name, model, year);
		this.capacity = "64GB";
	}

	// Унікальний метод для iPhone
	makeCall() {
		console.log(`Making a call with ${this.name} ${this.model}`);
	}

	// Унікальний метод для iPhone
	sendText() {
		console.log(`Sending a text with ${this.name} ${this.model}`);
	}

	// Унікальний метод для iPhone
	browseWeb() {
		console.log(`Browsing the web on ${this.name} ${this.model}`);
	}

	// Перевірка приватної властивості
	checkUniqueFeature() {
		console.log(`Unique feature for ${this.name} ${this.model}: ${this.#uniqueFeature}`);
	}
}

// Підклас 2 - iPad
class iPad extends TouchDevice {
	#uniqueFeature = "Apple Pencil Support"; // Приватна унікальна властивість для iPad

	constructor(name, model, year) {
		super(name, model, year);
		this.screenSize = "11 inches";
	}

	// Унікальний метод для iPad
	showApp() {
		console.log(`Opening an app on ${this.name} ${this.model}`);
	}

	// Унікальний метод для iPad
	takeNotes() {
		console.log(`Taking notes on ${this.name} ${this.model}`);
	}

	// Унікальний метод для iPad
	watchVideo() {
		console.log(`Watching a video on ${this.name} ${this.model}`);
	}

	// Перевірка приватної властивості
	checkUniqueFeature() {
		console.log(`Unique feature for ${this.name} ${this.model}: ${this.#uniqueFeature}`);
	}
}

// Підклас 3 - MacBook
class MacBook extends AppleDevice {
	#uniqueFeature = "Touch Bar"; // Приватна унікальна властивість для MacBook

	constructor(name, model, year) {
		super(name, year);
		this.model = model;
		this.storage = "256GB";
	}

	// Унікальний метод для MacBook
	runSoftware() {
		console.log(`Running software on ${this.name} ${this.model}`);
	}

	// Унікальний метод для MacBook
	editDocuments() {
		console.log(`Editing documents on ${this.name} ${this.model}`);
	}

	// Унікальний метод для MacBook
	playMusic() {
		console.log(`Playing music on ${this.name} ${this.model}`);
	}

	// Перевірка приватної властивості
	checkUniqueFeature() {
		console.log(`Unique feature for ${this.name} ${this.model}: ${this.#uniqueFeature}`);
	}
}

// Підклас 4 - iMac
class iMac extends AppleDevice {
	#uniqueFeature = "5K Retina Display"; // Приватна унікальна властивість для iMac

	constructor(name, model, year) {
		super(name, year);
		this.model = model;
		this.displaySize = "27 inches";
	}

	// Унікальний метод для iMac
	editVideo() {
		console.log(`Editing video on ${this.name} ${this.model}`);
	}

	// Унікальний метод для iMac
	createArtwork() {
		console.log(`Creating artwork on ${this.name} ${this.model}`);
	}

	// Унікальний метод для iMac
	browseInternet() {
		console.log(`Browsing the internet on ${this.name} ${this.model}`);
	}

	// Перевірка приватної властивості
	checkUniqueFeature() {
		console.log(`Unique feature for ${this.name} ${this.model}: ${this.#uniqueFeature}`);
	}
}

//========================================================================================================================

// Приклад використання класів

const iPhoneX = new iPhone("iPhone", "X", 2017);
const iPadPro = new iPad("iPad", "Pro", 2020);
const macBookAir = new MacBook("MacBook", "Air", 2019);
const iMacPro = new iMac("iMac", "Pro", 2021);

//========================================================================================================================

// Виклик методів для iPhoneX
iPhoneX.commonMethod();
iPhoneX.connectToInternet();
iPhoneX.makeCall();
iPhoneX.sendText();
iPhoneX.browseWeb();
iPhoneX.checkUniqueFeature(); // Перевірка приватної властивості iPhone

console.log(""); // Роздільник між пристроями

// Виклик методів для iPadPro
iPadPro.commonMethod();
iPadPro.connectToInternet();
iPadPro.showApp();
iPadPro.takeNotes();
iPadPro.watchVideo();
iPadPro.checkUniqueFeature(); // Перевірка приватної властивості iPad

console.log(""); // Роздільник між пристроями

// Виклик методів для macBookAir
macBookAir.commonMethod();
macBookAir.runSoftware();
macBookAir.editDocuments();
macBookAir.playMusic();
macBookAir.checkUniqueFeature(); // Перевірка приватної властивості MacBook

console.log(""); // Роздільник між пристроями

// Виклик методів для iMacPro
iMacPro.commonMethod();
iMacPro.editVideo();
iMacPro.createArtwork();
iMacPro.browseInternet();
iMacPro.checkUniqueFeature(); // Перевірка приватної властивості iMac
