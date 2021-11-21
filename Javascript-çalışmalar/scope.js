var sayi=27;
var sehir="Gaziantep";

// burada Gaziznatep tanımından sonra var sehir="Adana" tanımı yaparsak hata vermez. sehir degiskeninini Adana olarak set eder.
var sehir="Adana";

// tanımlanan değişken isminin bir bir çok dilde aynı scope içinde birden fazla tanımlanamayacağını biliyoruz.
// javascript te aynı tanıma izin verdiğinden dolayı let keyword u kullanılır.

let il="Istanbul"
//let il="Izmir" // burada konsolda hata verecektir.
// console.log(sayi);
// console.log(sehir);
// console.log(il);

function MesajVer()
{
    console.log(sehir);//Adana yazacaktır.

}
MesajVer();
