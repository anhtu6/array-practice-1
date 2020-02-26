let arraySample = [];
let sum = 0;
for (i=0;i<10;i++) {
    arraySample[i] =Math.floor(Math.random()*20)+3;
    sum+= arraySample[i];
}
document.write('mang duoc tao la '+arraySample+' gia tri trung binh la '+(sum/arraySample.length));