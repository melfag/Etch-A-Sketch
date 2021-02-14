const container = document.querySelector('.container');
const clearBtn = document.querySelector('.clear');
const resizeBtn = document.querySelector('.resize');
const rgbBtn = document.querySelector('.rgb');
const blackBtn = document.querySelector('.black');
const flexBtns = document.querySelectorAll('.button');
const headingColorBtn = document.querySelector('.heading-color');

let DEFAULT_SIZE = 5;

window.onload = function() {
	createGrid(DEFAULT_SIZE);
};

function createGrid(DEFAULT_SIZE) {
	for (let i = 0; i < DEFAULT_SIZE * DEFAULT_SIZE; i++) {
		const containerItems = document.createElement('div');
		containerItems.className = 'items';
		container.style.gridTemplateColumns = `repeat(${DEFAULT_SIZE}, 1fr)`;
		containerItems.addEventListener('mouseover', changeColorRgb);

		rgbBtn.addEventListener('click', () => {
			containerItems.addEventListener('mouseover', changeColorRgb);
			containerItems.removeEventListener('mouseover', changeColorBlack);
		});

		blackBtn.addEventListener('click', () => {
			containerItems.addEventListener('mouseover', changeColorBlack);
		});

		clearBtn.addEventListener('click', () => {
			containerItems.style.backgroundColor = 'white';
			containerItems.style.borderColor = 'black';
		});

		container.append(containerItems);
	}
}

function changeColorRgb(e) {
	const R = Math.floor(Math.random() * 256);
	const G = Math.floor(Math.random() * 256);
	const B = Math.floor(Math.random() * 256);
	e.target.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
	e.target.style.borderColor = 'black';
}

function changeColorBlack(e) {
	e.target.style.backgroundColor = 'black';
	e.target.style.borderColor = 'white';
}

//helper function for resize button
function clear() {
	const gridArray = Array.from(container.childNodes);
	gridArray.forEach((element) => {
		container.removeChild(element);
	});
}

resizeBtn.addEventListener('click', () => {
	clear();
	let resize = prompt('Please enter the size: ', '10');
	if (resize === '0' || resize === '') {
		alert('Please enter a valid value!');
		createGrid(DEFAULT_SIZE);
	}
	createGrid(resize);
});

flexBtns.forEach((button) => {
	button.addEventListener('mouseover', changeColorRgb);
});

function headingColorRgb(e) {
	const R = Math.floor(Math.random() * 256);
	const G = Math.floor(Math.random() * 256);
	const B = Math.floor(Math.random() * 256);
	e.target.style.color = `rgb(${R}, ${G}, ${B})`;
}

headingColorBtn.addEventListener('mouseover', headingColorRgb);
