let v = parseInt(prompt('Nhap so nguyen can kiem tra '));
let arraySample = [];
let count = 0;
let text ='';
for (i=0; i<10;i++) {
    arraySample[i] =Math.floor(Math.random()*20)+3;
}
for (i=0;i<10;i++) {
    if (arraySample[i]==v) {
        document.write('mang da tao la '+arraySample+' co ton tai so '+v+' o vi tri '+i);
        count+=1;
    }
}
if (count==0) {
    document.write('mang da tao la '+arraySample+' khong co phan tu '+v);
}