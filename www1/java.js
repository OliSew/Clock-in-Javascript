function odliczanie()
{
    var dzisiaj = new Date();

var dzien = dzisiaj.getDate();
var miesiac = dzisiaj.getMonth()+1;
var rok = dzisiaj.getFullYear();


var godzina = dzisiaj.getHours();
var minuta = dzisiaj.getMinutes();
var sekunda = dzisiaj.getSeconds();

document.getElementById("zegar").innerHTML = dzien+"/"+miesiac+"/"+rok+"|"+godzina+":"+minuta+":"+sekunda

  setTimeout("odliczanie()",1000); 
}

