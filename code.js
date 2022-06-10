/*******************************************************  

	Einrichtung der Seite

*******************************************************/

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

//Alle Elemente im Canvas werden an die Fenstergröße angepasst
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//X-Position und Y-Position, Counter
let x = canvas.width/2;
let y = canvas.height/2;
let currentDir = 0;



/*******************************************************  

	Classes

*******************************************************/

class Linie {
	constructor() {
		this.length = Math.round(Math.random() * (50-20) + 20);
		this.tlDir = Math.floor(Math.random() * (8-0) + 0);
		this.trDir;
		this.blDir;
		this.brDir;
		this.trX = x;
		this.trY = y;
		this.blX = x;
		this.blY = y;
		this.brX = x;
		this.brY = y;
	}
	check() {
		if(x < this.length && y < this.length) this.tlDir = 3;
		else if(x > canvas.width/2-this.length && y > canvas.height/2-this.length) this.tlDir = 7;
		else if(x < this.length && y > canvas.height/2-this.length) this.tlDir = 1;
		else if(x > canvas.width/2-this.length && y < this.length) this.tlDir = 5;
		else if(x < this.length) this.tlDir = 2;
		else if(x > canvas.width/2-this.length) this.tlDir = 6;
		else if(y < this.length) this.tlDir = 4;
		else if(y > canvas.height/2-this.length) this.tlDir = 0;
		
		if((this.tlDir == currentDir || this.tlDir+4 == currentDir || this.tlDir-4 == currentDir) && this.tlDir > 0) this.tlDir--;
		else if(this.tlDir == currentDir || this.tlDir+4 == currentDir || this.tlDir-4 == currentDir) this.tlDir = 7;
	}
	drawTopLeft() {	
		currentDir = this.tlDir;
		ctx.strokeStyle = 'white';
		ctx.moveTo(x, y);
		switch(this.tlDir) {
			case 0: ctx.lineTo(x, y-this.length); break;
			case 1: ctx.lineTo(x+this.length, y-this.length); break;
			case 2: ctx.lineTo(x+this.length, y); break;
			case 3: ctx.lineTo(x+this.length, y+this.length); break;
			case 4: ctx.lineTo(x, y+this.length); break;
			case 5: ctx.lineTo(x-this.length, y+this.length); break;
			case 6: ctx.lineTo(x-this.length, y); break;
			case 7: ctx.lineTo(x-this.length, y-this.length); break;
		}
		ctx.stroke();
	}
	drawTopRight() {
		ctx.strokeStyle = 'white';
		this.trX = canvas.width - x;
		this.trY = y;
		switch(this.tlDir) {
			case 0: this.trDir = 0; break;
			case 1: this.trDir = 7; break;
			case 2: this.trDir = 6; break;
			case 3: this.trDir = 5; break;
			case 4: this.trDir = 4; break;
			case 5: this.trDir = 3; break;
			case 6: this.trDir = 2; break;
			case 7: this.trDir = 1; break;
		}
		ctx.moveTo(this.trX, this.trY);
		switch(this.trDir) {
			case 0: ctx.lineTo(this.trX, this.trY-this.length); break;
			case 1: ctx.lineTo(this.trX+this.length, this.trY-this.length); break;
			case 2: ctx.lineTo(this.trX+this.length, this.trY); break;
			case 3: ctx.lineTo(this.trX+this.length, this.trY+this.length); break;
			case 4: ctx.lineTo(this.trX, this.trY+this.length); break;
			case 5: ctx.lineTo(this.trX-this.length, this.trY+this.length); break;
			case 6: ctx.lineTo(this.trX-this.length, this.trY); break;
			case 7: ctx.lineTo(this.trX-this.length, this.trY-this.length); break;
		}
		ctx.stroke();
	}
	drawBottomLeft() {
		ctx.strokeStyle = 'grey';
		this.blX = x;
		this.blY = canvas.height - y;
		switch(this.tlDir) {
			case 0: this.blDir = 4; break;
			case 1: this.blDir = 3; break;
			case 2: this.blDir = 2; break;
			case 3: this.blDir = 1; break;
			case 4: this.blDir = 0; break;
			case 5: this.blDir = 7; break;
			case 6: this.blDir = 6; break;
			case 7: this.blDir = 5; break;
		}
		ctx.moveTo(this.blX, this.blY);
		switch(this.blDir) {
			case 0: ctx.lineTo(this.blX, this.blY-this.length); break;
			case 1: ctx.lineTo(this.blX+this.length, this.blY-this.length); break;
			case 2: ctx.lineTo(this.blX+this.length, this.blY); break;
			case 3: ctx.lineTo(this.blX+this.length, this.blY+this.length); break;
			case 4: ctx.lineTo(this.blX, this.blY+this.length); break;
			case 5: ctx.lineTo(this.blX-this.length, this.blY+this.length); break;
			case 6: ctx.lineTo(this.blX-this.length, this.blY); break;
			case 7: ctx.lineTo(this.blX-this.length, this.blY-this.length); break;
		}
		ctx.stroke();
	}
	drawBottomRight() {
		ctx.strokeStyle = 'white';
		this.brX = canvas.width - x;
		this.brY = canvas.height - y;
		switch(this.tlDir) {
			case 0: this.brDir = 4; break;
			case 1: this.brDir = 5; break;
			case 2: this.brDir = 6; break;
			case 3: this.brDir = 7; break;
			case 4: this.brDir = 0; break;
			case 5: this.brDir = 1; break;
			case 6: this.brDir = 2; break;
			case 7: this.brDir = 3; break;
		}
		ctx.moveTo(this.brX, this.brY);
		switch(this.brDir) {
			case 0: ctx.lineTo(this.brX, this.brY-this.length); break;
			case 1: ctx.lineTo(this.brX+this.length, this.brY-this.length); break;
			case 2: ctx.lineTo(this.brX+this.length, this.brY); break;
			case 3: ctx.lineTo(this.brX+this.length, this.brY+this.length); break;
			case 4: ctx.lineTo(this.brX, this.brY+this.length); break;
			case 5: ctx.lineTo(this.brX-this.length, this.brY+this.length); break;
			case 6: ctx.lineTo(this.brX-this.length, this.brY); break;
			case 7: ctx.lineTo(this.brX-this.length, this.brY-this.length); break;
		}
		ctx.stroke();
	}
	move() {
		switch(this.tlDir) {
			case 0: y-=this.length; break;
			case 1: x+=this.length; y-=this.length; break;
			case 2: x+=this.length; break;
			case 3: x+=this.length; y+=this.length; break;
			case 4: y+=this.length; break;
			case 5: x-=this.length; y+=this.length; break;
			case 6: x-=this.length; break;
			case 7: x-=this.length; y-=this.length; break;
		}
	}
}



/*******************************************************  

	Eventlistener und Functions

*******************************************************/

//Dieser Eventlistener sorgt dafür, dass die Form sich beim Resize des Fensters nicht verändert.
//Damit die Form nicht gelöscht wird, muss sie zusätzlich innerhalb des Eventlisteners liegen.
window.addEventListener('resize', function() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
});


//Create erstellt eine neue Zeichnung
function create() {
	for(let i=0; i<300; i++) {
		setTimeout(function() {
			const l = new Linie();
			l.check();
			l.drawTopLeft();
			l.drawTopRight();
			l.drawBottomLeft();
			l.drawBottomRight();
			l.move();
		}, i*30);
	}
}



/*******************************************************  

	Zeichnung starten

*******************************************************/

create();