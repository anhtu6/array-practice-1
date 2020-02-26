let arraySample = [];
let count = 0;
let text ='';
for (i=0; i<10;i++) {
    arraySample[i] =Math.floor(Math.random()*20)+3;
    if (arraySample[i] >10) {
        text+=arraySample[i]+", ";
        count++;
    }
}
document.write('mang da tao la '+arraySample+'<br>'+'trong mang co '+count+' so lon hon 10 la '+text);