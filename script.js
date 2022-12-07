const PwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const symbolEl = document.getElementById("symbol");
const ambicharEl = document.getElementById("ambichar");
const generateEl = document.getElementById("generate");
const numberEl = document.getElementById("number");


const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const symbol = "~!@#$%^&*_+=";
const ambiguousChar = "(){}[]<>,./:;|";


function getLowerCase(){
	return lowerLetters[Math.floor(Math.random()*lowerLetters.length)];
}

function getUpperCase(){
	return upperLetters[Math.floor(Math.random()*upperLetters.length)];
}

function getNumbers(){
	return numbers[Math.floor(Math.random()*numbers.length)];
}

function getSymbol(){
	return symbol[Math.floor(Math.random()*symbol.length)];
}
function getAmbiguousChar(){
	return ambiguousChar[Math.floor(Math.random()*ambiguousChar.length)];
}

function generatePassword(){
	const len = lenEl.value;
	let password = "";

	for (let i = 0; i<len; i++){
		const x = generateX();
		password = password + x;
	}

	PwEl.innerText = password;
}

function generateX(){
	const passbox = [];
	if(upperEl.checked){
		passbox.push(getUpperCase());
	}

	if(lowerEl.checked){
		passbox.push(getLowerCase());
	}

	if(numberEl.checked){
		passbox.push(getNumbers());
	}

	if(symbolEl.checked){
		passbox.push(getSymbol());
	}

	if(ambicharEl.checked){
		passbox.push(getAmbiguousChar());
	}

	if(passbox.length === 0) return "";
	return passbox[Math.floor(Math.random()*passbox.length)];
}

generateEl.addEventListener("click", generatePassword);
copyEl.addEventListener("click", () => {
	const textarea = document.createElement("textarea");
	const password = PwEl.innerText;
	if(!password){
		return;
	}

	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand("copy");
	textarea.remove();


	alert("password copied to clipboard");
});

// function copyTextFunction(){
// 	var copyText = document.getElementById("pw");

// 	textarea.select();
// 	textarea.setSelectionRange(0,99999);

// 	navigator.clipboard.writeText(textarea.value);

// 	alert("Copied the text: " + copyText.value)
// }