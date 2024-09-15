let distMouse = 50;
let b; 
let size = 25;
let cols;
let rows;
let blocks = [];
let offset = 40;
let xRS = 50;
let xLS = -50;
let yTS = 50;
let yBS = -50;


function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);
	angleMode(DEGREES);
	cols = width/size;
	rows = height/size;
	for (let i=0; i<cols; i++) {
		blocks[i] = [];
		for (let j=0; j<rows; j++) {
			blocks[i][j] = new Block(size / 2 + i * size, size / 2 + j * size)
		}
	}
	b = new Block(width/2, height/2);
	
	
	
	
}

function draw() {
    createCanvas(windowWidth, windowHeight);
	background(0);
    
	for (let i=0; i<cols; i++) {
		for (let j=0; j<rows; j++) {
			blocks[i][j].move();
			blocks[i][j].display();
		}
	}
	
	
	

	
	fill(255)
	noStroke()
	rect(width/2,height/2,width * 0.5 ,height * 0.4, 8);
	

	
	stroke(0);
	
	line(width/2 + xLS,height/2 + yTS, width/2 + xRS,height/2 + yBS);
	line(width/2 + xLS,height/2 + yBS, width/2 + xRS,height/2 + yTS);
	
    
	
}


