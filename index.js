class Circle {
  constructor(radius) {
  this.radius = radius * Math.PI * 2;
  }



  get diameter(){
    return `${this.radius}` * 2;
  }

  get circumference() {
    return `${this.diameter}` * Math.PI
  }





}
