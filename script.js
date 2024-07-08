function elemNumero(x){
    let texto;

    if(isNaN(x) || x<1 || x>10){
        texto= "NO! un número del 1 al 10"
    }
    else{
        texto= "Número OK"
    }

    document.getElementById("aqui").innerHTML=texto;
}