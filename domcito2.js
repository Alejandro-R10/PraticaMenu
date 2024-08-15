function calcular()
{
    let nombre=document.getElementById('name1').Value;
    let edad=parseInt(document.getElementById('edad1').Value);
    let aumento;
    aumento=edad+10;
    alert("Su edad aumentada es "+aumento);

    var pasatiempo=document.getElementById('depo1').checked;
    var pasatiempoSeleccionada=pasatiempo.Value;

    var estadoCivil=document.getElementById('estadito');
    var valorestado=estadoCivil.Value;

    alert("El estado civil es "+valorestado); 
}
if(pasatiempo==true)
{

     if(genero="masculino")
 {
    alert("Exelente caballero,\n su edad aumentada es"+aumento+"\n"+"A usted le encata dormir");

 }
 else{
    alert("Exelente señorita, su edad aumentada es "+aumento+"\n"+"A usted le encanta bailar");

 }
}

var checkbox1, checkbox2;
function selecionar(){

    checkbox1 = document.getElementById("depo1");
    checkbox2 = document.getElementById("depo2");

    checkbox1.onclick = function(){
        if (checkbox1.checked == true) {
            checkbox2.checked = false;
        }
    }

    checkbox2.onclick = function() {
        if (checkbox2.checked == true){
            checkbox1.checked = false;
        }
    }
    
}
