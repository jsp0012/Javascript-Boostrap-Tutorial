var kullanicilar=[
    {email:"Furkan",sifre:"12345"},
    {email:"Tufan",sifre:"123456"},
]

var tivitler=[
    {email:"Furkan",tivit:"Hello World!"},
    {email:"Tufan",tivit:"Hello you too!"},
]

var email = prompt("Email Giriniz?");
var sifre = prompt("Sifre Giriniz");


function giris()
{
  
    kullanicilar.forEach(element => {
        if(email==element.email && sifre==element.sifre)
        {
            console.log(tivitler)
        }
        else
        {
            console.log("Hatalı giris yaptiniz!")
        }
       
    }); 
}
giris(email,sifre)


