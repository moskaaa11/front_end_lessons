class Circle {
    constructor () {
        this.radius = 12;
    };
    
    square (radius) {
        this.radius= radius;
        console.log(`площа круга дорівнює:${(this.radius*this.radius)*3.14}`)
    };

    line (radius) {
        this.radius = radius;
        console.log (`довжина круга дорівнює: ${2*3.14*this.radius}`)
    };
};

let circle = new Circle;

circle.square(10);
circle.line(143);


