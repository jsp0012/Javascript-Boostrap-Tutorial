class Personel
{
    constructor (ad,soyad)
    {
        this.ad= ad;
        this.soyad = soyad;
        console.log(ad+"--"+soyad);

    }
    kaydet ()
    {
        console.log(`Kaydedildi: ${this.ad}`);
        
    }
}

const p = new Personel();
p.kaydet(); 

const p2 = new Personel("Furkan","Tufan");
p2.ad="Adem";
p2.kaydet();