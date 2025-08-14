function crr(baseUrl,no){
    var rl=[];
    var lr=[];
    rl=baseUrl.split("\n");
    for(var s=0; s<rl.length;s++){
    lr.push(rl[s]);
    lr.push("\n");
    }
    var strl=lr.join(" ");
    
   var words = strl.split(/( )/);
 
    var ls=[];
    var mySubString="";
    var sd="";
    var st="";
    var sl="";
    for (var j = 0; j < words.length - 1; j++) {
     
      if(words[j].includes('$(')&& words[j].includes(')')){
        mySubString = words[j].substring(
          words[j].indexOf("(") + 1, 
          words[j].lastIndexOf(")")
        );
        sd= '+"'+words[j].split(")").pop()+'"';
       st = '"'+words[j].split('$')[0]+'"+';
       sl='l['+no+']["'+mySubString+'"]';
       words[j]=st+sl+sd;
      }
      else if(words[j].includes('\n')){
        words[j]= '"\\n"';
      }
      else {
        words[j]= '"'+words[j]+'"';
      }
    }
    
    var slll= words.join("+");
  return slll;}
  var sjs=document.createElement('script');
  sjs.innerHTML=sessionStorage.getItem(sessionStorage.getItem('prename')+'spedata.js');
 document.head.appendChild(sjs);
  window.addEventListener('load', function() {
    try{
      var queryString = idx; 
    
  }catch(e){
    var queryString = sessionStorage.getItem("idxpv"); 
  }
    l=JSON.parse(sessionStorage.getItem('datajson'));

    var elements = document.getElementsByClassName('grid-container');
var di = document.getElementById('grid');
var txtcl=document.getElementsByClassName('txtcl');
var ld=spedata();
for(i=0;i<txtcl.length;i++){
    txtcl[i].innerHTML=eval(crr(ld[i],queryString).slice(0, -2));
        
    
}
var imgcl=document.getElementsByClassName('imgcl');
var ld2=spedata2();
for(i=0;i<imgcl.length;i++){
  
    imgcl[i].src="./uploads/"+eval(crr(ld2[i],queryString).slice(0, -2));
       
    
}

var bdcl=document.getElementsByClassName('bdcl');
var ld3=spedata3();
for(i=0;i<bdcl.length;i++){
  
    bdcl[i].style.borderColor=eval(crr(ld3[i],queryString).slice(0, -2));
       console.log(eval(crr(ld3[i],queryString).slice(0, -2)));
    
}

var bgcl=document.getElementsByClassName('bgcl');
var ld4=spedata4();
for(i=0;i<bgcl.length;i++){
  
    bgcl[i].style.backgroundColor=eval(crr(ld4[i],queryString).slice(0, -2));
       
    
}
var fcl=document.getElementsByClassName('fcl');
var ld5=spedata5();
for(i=0;i<fcl.length;i++){
  
    fcl[i].style.color=eval(crr(ld5[i],queryString).slice(0, -2));
       
    
}
var lnk=document.getElementsByClassName('lnkcl');
var ld6=spedata6();
for(i=0;i<lnk.length;i++){
  var hr=eval(crr(ld6[i],queryString).slice(0, -2));
    lnk[i].href=eval(crr(ld6[i],queryString).slice(0, -2));
    lnk[i].target="popup";
    lnk[i].addEventListener("click", function () {
    window.open(hr,'popup','width=600,height=600'); return false;
    });
    
    
}
var ttl=document.getElementsByClassName('ttlcl');
var ld7=spedata7();
for(i=0;i<ttl.length;i++){
  
    ttl[i].title=eval(crr(ld7[i],queryString).slice(0, -2));
       
    
}
});