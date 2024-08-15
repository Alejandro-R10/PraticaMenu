var cantidad=0;
var j=1000;

cantidad=parseFloat(prompt("Ingrese la cantidad de dolares arriba de 1000"));
while(cantidad<1000 || cantidad>100000)
{
    cantidad=parseFloat(prompt("Ingrese la cantidad de dolares arriba de 1000"));

}

document.write("__________________________________________<br> <br>");
document.write("DOLARES_______________________BTC__________________ETH <br>");
document.write("__________________________________________________<br>");

while(j<=cantidad)
{
    document.write("$"+j+"-----------------"+j/57810+"---------------------"+j/3062);
    document.write("<br>")
    document.write("<br>")
    j++;

}