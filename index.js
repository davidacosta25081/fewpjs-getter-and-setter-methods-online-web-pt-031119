class Circle {
  constructor(radius)
  this.radius = Math.PI * radius


  get diameter(){
    return `{this.radius}` * 2
  }
}
