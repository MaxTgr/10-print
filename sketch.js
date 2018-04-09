let x = 0;
let y = 0;
let spacing = 10;
let stage = 1
let r = 0
let g = 0
let b = 0
let colorsize = 100
let sizes = 255 * 2.5

function setup() {
	createCanvas(sizes, sizes);
	background(0);
}

function draw() {

	if (stage == 1) {
		if (r < 255) {
			r = r + colorsize
		} else if (g < 255) {
			g = g + colorsize
		} else {
			stage = 2
		}
	} else if (stage == 2) {
		if (r > 0) {
			r = r - colorsize
		} else if (b < 255) {
			b = b + colorsize
		} else if (g > 0) {
			g = g - colorsize
		} else {
			stage = 3
		}
	} else {
		if (r < 255) {
			r = r + colorsize
		} else if (b > 0) {
			b = b - colorsize
		} else {
			stage = 1
		}
	}

	if (r < 0) {
		r = 0
	}
	if (g < 0) {
		g = 0
	}
	if (b < 0) {
		b = 0
	}
	if (r > 255) {
		r = 255
	}
	if (g > 255) {
		g = 255
	}
	if (b > 255) {
		b = 255
	}

	console.log(r + ", " + g + ", " + b)

	stroke(r, g, b);
	if (random(1) < 0.5) {
		line(x, y, x + spacing, y + spacing);
	} else {
		line(x, y + spacing, x + spacing, y);
	}
	x = x + spacing;
	if (x > width) {
		x = 0;
		y = y + spacing;
	}
}