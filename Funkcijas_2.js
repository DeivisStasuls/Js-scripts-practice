function Izvade(){
    console.log("tavs vārds :]")
}
function Izvade2(name){
    return name;
}
function Numba(){
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
}
function last(num1,num2){
    if (num1>num2) {
        x=num1;
        y=num2;
    } else {
        x=num2;
        y=num1;
    }
    for (let i = y; i < x+1; i++) {
        console.log(i);
    }

}
console.log(Izvade2("lalalalla"));
Izvade();
Numba();
last(1,10);
