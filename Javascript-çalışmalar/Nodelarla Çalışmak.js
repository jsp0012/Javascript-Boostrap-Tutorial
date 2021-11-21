var node = document.getElementById("agac");

alert(node.childNodes[0].nodeValue)

// h2 tagı ekleyip child node ekleme islemi
var baslik = document.createElement("h2");
var tempnode= document.createTextNode("Merhaba Javascript!")
baslik.appendChild(tempnode);
//nereye eklenecek 
var div1= document.getElementById("div1");
var p2 = document.getElementById("p2");
div1.insertBefore(baslik,p2);
// node silme işlemi
alert("P2 siliniyor ..");
div1.removeChild(p2);

// replace child kullanımı
alert ("degistiriliyoor!!");
div1.replaceChild(baslik,p1);