function oblicz(){
    var wynik=0;
    var typ=document.forms['formularz']['typ'].value;
    var ilosc=document.forms['formularz']['ilosc'].value;
    if(typ=='A')
    {
    wynik+=1.50*ilosc;
    }
    else if(typ=='B')
    {
    wynik+=1.70*ilosc;
    }
    else if(typ=='C')
    {
    wynik+=1.50*ilosc;
    }
    
    document.getElementById('wynik').innerHTML=wynik + " " + 'zł';
    }
    