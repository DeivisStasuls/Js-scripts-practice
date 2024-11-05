const person= {vards:"Deivis",vecums:18,students:true,course:"PT2022"};
console.log(person["vards"])
if(person["vecums"]>=18){
    console.log("Vecums>18");
}
else{
    console.log("Vecums<18");
}
if (person["students"]){
    console.log("Students!");
}
else{
    console.log("Nav students.")
}