let arraySample = [];
for (i=0;i<10;i++) {
    arraySample[i] =Math.floor(Math.random()*20)+3;
}
let max =arraySample[0];
for (j=1;j<10;j++){
    if (arraySample[j] > max) {
        max = arraySample[j];
    }
}
document.write('mang duoc tao la '+arraySample+' gia tri lon nhat la '+max);