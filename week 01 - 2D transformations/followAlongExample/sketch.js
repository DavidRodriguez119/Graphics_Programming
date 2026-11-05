function setup() {
    createCanvas(900, 600);
}

function draw() {
    background(220);
    fill(0);
    translate(200, 200);
    rect(0, 0, 200, 200);

    fill(255, 0, 0);
    translate(100, 100);
    ellipse(0, 0, 30, 30);

    translate(-100, -100);
    ellipse(0, 0, 30, 30);
} 
