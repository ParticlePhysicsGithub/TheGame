class Block {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.angle = 0;
		this.c = 90;
	}
	
	display() {
		noFill();
		stroke(this.c);
		push();
		translate(this.x, this.y);
		
		this.drawRotate();
		
		if (this.angle > 67.5 && this.angle < 90) {
			//stroke(247, 151, 68)
			this.drawRect();
		} else {
			if (this.angle > 45 && this.angle < 67.5) {
				this.drawX();
			} else {
				if (this.angle > 22.5 && this.angle < 45) {
					this.drawThing();
				} else {
					this.drawCircle();
				}
			}
		}
			
		
			
				
			
		
		
		
		pop();
	}
	
	move() {
		// if ze mous is moving, chek distance between mous locazion and centere of square
		let distance;
		if (pmouseX - mouseX != 0 || pmouseY - mouseY != 0) {
			let distance = dist(mouseX, mouseY, this.x, this.y);
			if (distance < distMouse) {
				this.angle += 1;
				this.c = 255
			}
		}
		 // if swares r r ed e rotaiding, keep rotading until ankle =  nine d
			if (this.angle > 0 && this.angle < 90) {
				this.angle += 9;
				this.c -= this.c / 10;
			} else {
				this.angle = 0;
				this.c = 90;
			}
		}
	drawRotate() {
		rotate(this.angle);
	}
	drawRect() {
		rect(0, 0, size - offset, size - offset);
	}
	drawX() {
		let margin = -size/2;
		line(margin + offset/2, margin + offset/2,  margin + size - offset/2, margin + size - offset/2);
		line(margin + size - offset/2, margin + offset/2, margin + offset/2 ,margin + size - offset/2);
	}
	
	drawCircle() {
		let margin = -size/2;
		circle(0, 0, size + margin)
	}
	
	drawThing() {
		let margin = -size/2;
		triangle(0,10,10,-5,-10,-5)
	}
}