function Point(x,y){
    this.x = x;
    this.y = y;
}
let puntos1 = [new Point(5,0), new Point(11,1), new Point(2,2)];
let puntos2 = [new Point(5,0), new Point(11,1), new Point(15,1), new Point(2,2)];
let puntos3 = [new Point(5,0), new Point(4,1), new Point(5,2), new Point(6,0), new Point(11,1), new Point(15,2)];

let array = puntos3;
let i = 0;
for(i=0; i<array.length; i++){
    if(array[i].x > 10){
        array.splice(i,1);
        i--;
    }
}
console.log(array); // [ Point { x: 5, y: 0 }, Point { x: 2, y: 2 } ]