


//Adet


//Fiyat
var adanafiyat=document.getElementById("adanafiyat").innerText
adanafiyat=adanafiyat.replace("₺","")
adanafiyat=parseFloat(adanafiyat)

var urfafiyat=document.getElementById("urfafiyat").innerText
urfafiyat=urfafiyat.replace("₺","")
urfafiyat=parseFloat(urfafiyat)

var lahmacunfiyat=document.getElementById("lahmacunfiyat").innerText
lahmacunfiyat=lahmacunfiyat.replace("₺","")
lahmacunfiyat=parseFloat(lahmacunfiyat)

function satirEkle(isim,adet){
    var satir=document.createElement("li")
        satir.className="list-group-item"
        var metin=isim+": "+adet+" Adet"
        satir.innerHTML=metin
        var urunadetler=document.getElementById("urunadetler")
        urunadetler.appendChild(satir)
}

function hesapla(){
    //HESAP
    var adanavalue=document.getElementById("adanavalue").value
    var urfavalue=document.getElementById("urfavalue").value
    var lahmacunvalue=document.getElementById("lahmacunvalue").value

    document.getElementById("urunadetler").innerHTML=""
    if(adanavalue>0){
        var adanatoplam=adanafiyat*adanavalue
        satirEkle("Adana Kebap",adanavalue)
        
    }else{
        var adanatoplam=0
    }

    if(urfavalue>0){
        var urfatoplam=urfafiyat*urfavalue
        satirEkle("Urfa Kebap",urfavalue)
    }else{
        var urfatoplam=0

    }

    if(lahmacunvalue>0){
        var lahmacuntoplam=lahmacunfiyat*lahmacunvalue;
        satirEkle("Lahmacun",lahmacunvalue)
    }else{
        var lahmacuntoplam=0
    }

    var toplam=adanatoplam+urfatoplam+lahmacuntoplam
    
    document.getElementById('toplamfiyat').innerHTML=toplam
}

function siparis(){
    var adanavalue=document.getElementById("adanavalue").value
    var urfavalue=document.getElementById("urfavalue").value
    var lahmacunvalue=document.getElementById("lahmacunvalue").value

    var isim=document.getElementById("isim").value
    var telefon=document.getElementById("telefon").value
    var adres=document.getElementById("adres").value



    var siparisler=``

    if(adanavalue>0){
        siparisler=siparisler.concat(adanavalue+" Adet Adana ")
    }
    if(urfavalue>0){
        siparisler=siparisler.concat(urfavalue+" Adet Urfa ")
    }
    if(lahmacunvalue>0){
        siparisler=siparisler.concat(lahmacunvalue+" Adet Lahmacun ")
    }

    var mesaj=`Merhaba ben ${isim} 
    telefon numaram: ${telefon} 
    adresim: ${adres}
    Siparişlerim ${siparisler}
    `
    var restorantelefon="905412450515"

    var butonurl="https://wa.me/"+restorantelefon+"?text="+mesaj

    document.getElementById('siparisbtn').innerHTML="Oluşturuluyor..."
    document.getElementById('siparisbtn').href=butonurl

    

}




