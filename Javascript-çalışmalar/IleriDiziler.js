const dizi=[1,2,3,4];

dizi.forEach(sayi=>{
    console.log(sayi);
})

const kareDizisi=[];

dizi.forEach(element => {
    kareDizisi.push(element*element);
});
let i =0;
kareDizisi.forEach(element => {
    console.log(i+1+".nci eleman:"+kareDizisi[i]);
    i++;
});

// map dizi

const mapDizi = dizi.map(sayi => sayi*3);

console.log("Map dizi sonuçları:");
let j=0;
mapDizi.forEach(element => {
    console.log("Map dizi:"+(j+1)+".nci eleman:"+mapDizi[j]);
    j++;
});

// filter fonksiyonu

const filterDizi= dizi.filter(sayi=>sayi>2) // dizi dizinde 2 den buyuk elemanları filter diziye ekler.
let t=0;
filterDizi.forEach(element => {
    console.log("filterDizi:"+(t+1)+".nci eleman:"+filterDizi[t]);
    t++;
});

// reduce fonksiyonu

const toplam = dizi.reduce((acc,sayi)=>{ // burada dizinin elemanları toplamını yazar.
    return acc+sayi;
})

console.log("reduce dizi:"+ toplam);
