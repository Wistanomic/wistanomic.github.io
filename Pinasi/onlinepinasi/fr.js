var setwin=document.getElementById('set');var pagi=document.getElementById('slid1');var nextPage=document.getElementById('search');var prevPage=document.getElementById('setting');
var glimit=10;
function next(){nextPage.click();}function prev(){prevPage.click();}function page(){pagi.checked=true;}
function limit(val){glimit= val;}
function hide(){setwin.style.display="none";}
function norm(){src();pagi.checked=false;}
function pagbt(){pagination();pagi.checked=true;}
pagi.addEventListener('change', function() {if(pagi.checked == true){pagination();} else{src();}});