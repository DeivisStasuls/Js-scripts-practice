console.log("savu vārdu"); 

const button = document.getElementById("my-button");
button.addEventListener("click", printName);

function labaksPrint(){
    let teksts=document.getElementById("txt_1").value;
    console.log(teksts);
}
function printName(){
    if(document.getElementById("txt_1").value=="mans vards"){
        labaksPrint();
        console.log("UZMINEJI AHAHHAH");
    }
    else{
        labaksPrint();
        console.log("nuh uh");
    }
}

console.log(labaksPrint); 