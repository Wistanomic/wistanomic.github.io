function grid(ll,nm="",bs){var elements = document.getElementsByClassName('grid-container');
var folderpath=sessionStorage.getItem("project");
var baseUrl =bs+" ";
 var di = document.getElementById("grid");
 var words = baseUrl.split(/( )/);
 var ls=[];var mySubString="";var sd="";var st="";var sl="";for (var j = 0; j < words.length - 1; j++) {
    if(words[j].includes('$(')&& words[j].includes(')')){mySubString = words[j].substring(words[j].indexOf("(") + 1, words[j].lastIndexOf(")"));sd= words[j].split(")").pop();
    st = words[j].split('$')[0];sl='ll[i]["'+mySubString+'"]';words[j]=st+sl+sd;}else {words[j]= '"'+words[j]+'"';}}
    for(i=0;i<ll.length;i++){var slll= words.join("+");
    var fdc=document.createElement("iframe");
    var dv=document.createElement("div");
    dv.className="difr";
    fdc.className = "grid-item";
    var prevpth="./project/"+folderpath+"/";
   
    sessionStorage.setItem('prename',nm);
    fdc.srcdoc=sessionStorage.getItem(nm+"preview.html")+"<script>const idx="+i+"<\/script>";
   
    var text = document.createElement("p");
    text.innerHTML = text.innerHTML + eval(slll.slice(0, -1)); 
    //fdc.appendChild(text);
    
    dv.appendChild(fdc);
    di.appendChild(dv);}}