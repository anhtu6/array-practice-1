let arraySample = [];
let count = 0;
let text ='';
for (i=0; i<10;i++) {
    arraySample[i] =Math.floor(Math.random()*20)-10;
    if (arraySample[i] <0) {
        text+=arraySample[i]+", ";
        count++;
    }
}
document.write('mang da tao la '+arraySample+'<br>'+'trong mang co '+count+' so nguyen am la '+text);