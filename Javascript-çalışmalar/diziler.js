var dizi=[34,27,01]
var sehirler=["Istanbul","Gaziantep","Adana"]
var i=0
dizi.forEach(element => {
    console.log(element+ sehirler[i])
     i++
     
});
var dizi2=["Furkan",24,false]
dizi2.forEach(element =>{
    console.log(element)
})

//fonksiyon dizisi yapma örnegi

var fonksiyondizisi=[topla,yaz(2,3)]

function topla(a,b)
{
    return a+b;
}
function yaz(a,b)
{
    console.log(topla(a,b));
}





