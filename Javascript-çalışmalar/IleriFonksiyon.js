//1. Kullanim
function selamVer()
{
    console.log("Selam!");
}
selamVer();

//2.Kullanim

var selamFonksiyonu= function selam ()
{
    console.log("Selam2!");
}
selamFonksiyonu();

//3.Kullanim

const selamFonksiyonu2 = () =>{
    console.log("Merhaba2");
}
selamFonksiyonu2();

//3. kulanima ait parametre gonderimi

const selamFonksiyonu3 = (mesaj) =>{
    console.log(mesaj);
}
let mesaj="deneme"; // parametreyi direk icerden de gonderebiliriz.
selamFonksiyonu3(mesaj);

// 2 sayıyı toplayan fonksiyon ornegi

var topla = (sayi1,sayi2)=>{
    return sayi1+sayi2;
}
var result= topla(20,20);
console.log(result); 