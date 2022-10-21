function Point(x,y){
    this.x = x;
    this.y = y;
}
let puntos1 = [new Point(5,0), new Point(11,1), new Point(2,2)];
let puntos2 = [new Point(5,0), new Point(11,1), new Point(15,1), new Point(2,2)];
let puntos3 = [new Point(5,0), new Point(4,1), new Point(5,2), new Point(6,0), new Point(11,1), new Point(15,2)];

console.log(puntos1.sort((a,b) => a.x - b.x));
console.log(puntos2.sort((a,b) => a.x - b.x));
console.log(puntos3.sort((a,b) => a.x - b.x));