var t = new Date();
var date;
var h,m,s,ms,tarih;
var ah,am,as;

function saat(x){
    if(x<=9){
        return "0"+x;
    }else{
        return x;
    }
}

function msaat(x){
    if (x<=9) {
        return "00"+x;
    }else if(x<=99){
        return "0"+x;
    }else{
        return x;
    }
}

setInterval(function(){
    date = new Date();

    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();
    ms = date.getMilliseconds();

    h = saat(h);
    m = saat(m);
    s = saat(s);
    ms = msaat(ms);

    tarih=h+":"+m+":"+s+":"+ms;

    document.getElementById("taha").innerHTML=tarih;
},1)

function alarm(){
setInterval(function(){
ah = document.getElementById("asaat").value;
am = document.getElementById("adak").value;
as = document.getElementById("asan").value;

if(ah!="" && am!="" && as!=""){
document.getElementById("taha3").style.display="block";
document.getElementById("taha3").innerHTML="Alarm Kuruldu"+ah+":"+am+":"+as;
  




if(ah == h && am == m && as == s){
    document.getElementById("taha4").innerHTML='<audio src="ses.mp3" autoplay="autoplay"></audio>';
    
}


}






},1000)}