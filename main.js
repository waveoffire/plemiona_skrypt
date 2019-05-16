javascript:
var rodzajjednostki="light"; //light /heavy /axe /marcher
var iloscjednostek=10; //po ile jednostek farmisz
var ktoryguzik="a"; //a /b /c


var x = location.href;
var iloscnastrone=100;
if(x.indexOf('am_farm') >= 0){

function zmianaLinku(cso, cso2){
var xChanged = x.replace(cso, cso2);
console.log(xChanged);
location.href=xChanged;
sprawdz();
}

function majn(){
var dobry="a.farm_icon_" + ktoryguzik;
var fajnaliczba;
tablica=$(dobry);
pentla=0;
czas=setInterval(
function(){
$(tablica[pentla++]).click();
 if(pentla>tablica.length){clearInterval(czas);}
 }
 ,fajnaliczba = Math.round(Math.random()*40) + 270);
 }

function guzik(){
document.getElementById("village_switch_right").click()
}

var strona=0;

function przelacz(){
var ex =document.getElementById(rodzajjednostki);
console.log(ex.innerHTML);
if (ex.innerHTML < iloscjednostek){
setTimeout('guzik()', 1000);
}
}

function sprawdz(){

 przelacz();
 var x = location.href;
var z=x.length;
var wynik = x.charAt(z-1);
if (x.indexOf('Farm_page=') == -1)
{
x=x+"&Farm_page="+strona+"&";
location.href=x;
console.log(wynik);
}
else if (wynik != "&")
{
x=x+"&";
location.href=x;
}else if ((x.indexOf('Farm_page=4') >= 0))
{
var xChanged = x.replace('Farm_page=4', 'Farm_page=0');
location.href=xChanged;
//setTimeout('guzik()', 1000);
}



var ex2 =document.getElementById(rodzajjednostki);
var pomocna =0;
if ((x.indexOf('Farm_page=0') == -1) && (ex2.innerHTML < iloscjednostek)){

var x = location.href;
var x2=x+"&Farm_page=0";
location.href=x2;
}
else if (x.indexOf('Farm_page=0') >= 0){
majn();
var ex =document.getElementById(rodzajjednostki);
console.log(ex.innerHTML);
if (ex.innerHTML > iloscjednostek){
setTimeout('zmianaLinku("Farm_page=0", "Farm_page=1")', iloscnastrone * 300);} else{guzik();}
}
else if (x.indexOf('Farm_page=1') >= 0){
majn();
var ex =document.getElementById(rodzajjednostki);
console.log(ex.innerHTML);
if (ex.innerHTML > iloscjednostek){
setTimeout('zmianaLinku("Farm_page=1", "Farm_page=2")', iloscnastrone*300);} else{guzik();}

}
else if (x.indexOf('Farm_page=2') >= 0){
majn();
var ex =document.getElementById(rodzajjednostki);
console.log(ex.innerHTML);
if (ex.innerHTML > iloscjednostek){
setTimeout('zmianaLinku("Farm_page=2", "Farm_page=0")', iloscnastrone*300);}else{guzik();}

}

}
sprawdz();
}
else{
}
