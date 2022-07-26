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

//first end

class Marker {
    constructor( ) {
        this.color = 'red',
        this.fill = 100,
        this.text = 'new'
    }
        
    write (text) {
        this.text= text;
     
    }
    

    // set fill (value) {
    //     if (value < 0) {
    //       value = 0;
    //     } else if (value > 100) {
    //         value = 100;
    //     }
    //     this.fill = value;
    //   }
    
    //   get fill() {
    //     return this.fill;
    //   }

    
}

let words = new Marker;

words.write('text')
