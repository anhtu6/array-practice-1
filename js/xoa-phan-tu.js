let a = [17,9,11,18,20,3,14,13,16,5];
let v = parseInt(prompt('Nhap gia tri can kiem tra'));
for (i=0;i<a.length;i++) {
    if (a[i]==v) {
        a.splice(i,1);
        break;
    }
}
document.write(a);