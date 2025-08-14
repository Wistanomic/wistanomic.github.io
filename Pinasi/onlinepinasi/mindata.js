// var stbl=sessionStorage.getItem("tabletype").replace('tablemin.html','');
                  
var l =[];
var minid=[];
var foot=true;
var k=[];
const pageSize = 10;
var idrow=false;
var curPage = 1;
var glimit=10;
var fst=false;
var pagi=document.getElementById('slid1');
var nextPage=document.getElementById('search');
var prevPage=document.getElementById('setting');
var revs=document.getElementById('revs');
var rev=false;
       var revb=false;
       var num;
var scrolldiv =false;
var cfit =false;
var colhgl = "rgb(223,215,124)";
var scrc=document.getElementById('scrc');
var cwb=document.getElementById('cwb');
var hglins=document.getElementById('hglins');
var hglcolor =document.getElementById('hglcolor');

function next(){nextPage.click();}
function prev(){prevPage.click();}
function page(){pagi.checked=true;idrow=true;}
function scd(){scrolldiv=true;cwb.disabled=true;if(pagi.checked==true){fst=true;}pagi.checked=false;idrow=false; srefc();}
function scdnorm(){scrolldiv=false;cwb.disabled=false;if(pagi.checked==true){fst=true;}pagi.checked=false;idrow=false;srefc();}
function celfit(){cfit=true;scrc.disabled=true;if(pagi.checked==true){fst=true;}pagi.checked=false;idrow=false;srefc();}
function celfitnorm(){cfit=false;scrc.disabled=false;if(pagi.checked==true){fst=true;}pagi.checked=false;idrow=false;srefc();}
function revar(){idrow=false;rev=true;srefc();if(pagi.checked==true){fst=true;}pagi.checked=false;}
function revnom(){idrow=false;rev=false;if(pagi.checked==true){fst=true;}pagi.checked=false;srefc();}
function hglcol(val){colhgl=val;}
function limit(val){glimit= val;}
function hidebar(){document.getElementById('set').style.display='none';}
function norm(){src();pagi.checked=false;idrow=false;}
function pagbt(){pagination();pagi.checked=true;idrow=true;}

///
ru();
///
scrc.addEventListener('change', function() {
  if(scrc.checked==true){scd();}
else{scdnorm();}});   
cwb.addEventListener('change', function() {
  if(cwb.checked==true){celfit();}
else{celfitnorm();}});  
revs.addEventListener('change', function() {
  if(revs.checked==true){revar();}
else{revnom();}}); 
///
function dropsett(){
document.getElementById("setdrop").classList.toggle("show");
}
///

function pagination(){
  idrow=true;
  const pageSize = glimit;
$('#excelDataTable').html("");   
                 k=  l.filter((row, index) => {
    let start = (curPage-1)*pageSize;
    let end =curPage*pageSize;
    if(index >= start && index < end) return true;
});
buildHtmlTable(k); 
  if(fst==true){
    
return
}else{

  idrow=true;
  const pageSize = glimit;
$('#excelDataTable').html("");   
                 k=  l.filter((row, index) => {
    let start = (curPage-1)*pageSize;
    let end =curPage*pageSize;
    if(index >= start && index < end) return true;
});
buildHtmlTable(k); 


nextPage.addEventListener("click", function () { 
if((curPage * pageSize) < l.length) curPage++;
k=  l.filter((row, index) => {
    let start = (curPage-1)*pageSize;
    let end =curPage*pageSize;
    if(index >= start && index < end) return true;
});

$('#excelDataTable').html("");
buildHtmlTable(k); 

},false);  
//
prevPage.addEventListener("click", function () { 
if(curPage > 1) curPage--;
k=  l.filter((row, index) => {
    let start = (curPage-1)*pageSize;
    let end =curPage*pageSize;
    if(index >= start && index < end) return true;
});

$('#excelDataTable').html("");
buildHtmlTable(k); 

},false); 
//   
}
}
//

var scp=document.createElement('script');
scp.innerHTML=sessionStorage.getItem('tmathjs');
document.head.appendChild(scp);
//
function ru(){
  
  var data = JSON.parse(sessionStorage.getItem('datajson'));
  l=mindata(data);
  minid=minidx(data);
  num=l.length;
      if (data== "[]" || (typeof data == "object" && data.length == 0)){
l = null;



  l=JSON.parse(sessionStorage.getItem('headerjson'));


     foot=false;

     buildHtmlTable(l); 




  
}
if(pagi.checked == true){
idrow=true;
pagination();
} 
else{
idrow=false;
revs.checked=false;
rev=false;
$('#excelDataTable').html("");
buildHtmlTable(l); 
}
pagi.addEventListener("change", function () { 
if(pagi.checked == true){
idrow=true;
pagination();
} 
else{
fst=true;
idrow=false;
revs.checked=false;
rev=false;
$('#excelDataTable').html("");
buildHtmlTable(l); 
}
});



 }
 var index ;
// Builds the HTML Table out of myList.


//
var obhgl={};
var obhglin={};
function buildHtmlTable(ll) {
  if(rev==true && revb==false){    
    ll=ll.reverse();
     revb=true;
     // if(idrow==true){
     //   ll=ll.reverse();
     // }
     }
     if(rev==false && revb==true){
       ll=ll.reverse();
       revb=false;
     }
 var selector = document.getElementById("excelDataTable");
  var columns = addAllColumnHeaders(ll, selector);
 
var tbod=$('<tbody/>');

  for (var i = 0; i < ll.length; i++) {
    var row$ = $('<tr/>');
    if(scrolldiv==true){
    for (var colIndex = 0; colIndex < columns.length; colIndex++) {
      var dr=document.createElement('div');
      var cellValue = ll[i][columns[colIndex]];
      if (cellValue == null) cellValue = "";
      dr.append(cellValue);
      row$.append($('<td/>').html(dr));
      

    }
   
    $(selector).append(tbod.append(row$));
    $("table td").css("max-width", "100px");
  }
  if(cfit==true){
    for (var colIndex = 0; colIndex < columns.length; colIndex++) {
      var dr=document.createElement('div');
      var cellValue = ll[i][columns[colIndex]];
      if (cellValue == null) cellValue = "";
      dr.append(cellValue);
      row$.append($('<td/>').html(dr));
      

    }
   
    $(selector).append(tbod.append(row$));
    $("table td").css("word-break", "break-all");
    $("table td").css("max-width", "100px");
  }
  if(cfit==false && scrolldiv==false){
    for (var colIndex = 0; colIndex < columns.length; colIndex++) {
      var cellValue = ll[i][columns[colIndex]];
      if (cellValue == null) cellValue = "";
      row$.append($('<td/>').html(cellValue));
    }
    $(selector).append(tbod.append(row$));
  }
    

  }

    if(foot==true){
    var fn = window['cr_foot']; 
if(typeof fn === 'function') {
  cr_foot(ll);
}
} 
  var dd=[];
  var trs = document.querySelectorAll("tr");
 
  markhgl();
  markhgl2();
}

// Adds a header row to the table and returns the set of columns.
// Need to do union of keys from all records as some records may not contain
// all records.
function addAllColumnHeaders(myList, selector) {
var columnSet = [];
var headerTr$ = $('<tr/>');
var theads=$('<thead/>');

for (var i = 0; i < myList.length; i++) {
var rowHash = myList[i];
for (var key in rowHash) {
if ($.inArray(key, columnSet) == -1) {
columnSet.push(key);

headerTr$.append($('<th/>').html(key));

}
}
}


$(selector).append(theads.append(headerTr$));

return columnSet;
}


function refresh(){
  cwb.checked =false;scrc.checked =false;
  if(pagi.checked==true){fst=true;idrow=false;pagi.checked=false;}
  location.reload(); 
  revs.checked=false;
  
} 
window.addEventListener("click", function(event) {
  
  if (!event.target.matches('.dropseting')) {
    var dropdowns = document.getElementsByClassName("dropset");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }

});
function src(){
$('#excelDataTable').html("");
buildHtmlTable(l); 
idrow=false;
fst=true;
}
function srefc(){
  $('#excelDataTable').html("");
  buildHtmlTable(l); 
}
function srchout(input) {
// Declare variables
var  filter, table, tr, td, i, txtValue;

filter = input.value.toUpperCase();
if(pagi.checked==true){
if(filter==""){
pagination();
}
else{
src();
table = document.getElementById("excelDataTable");
tr = table.getElementsByTagName("tr");

// Loop through all table rows, and hide those who don't match the search query
for (i = 0; i < tr.length; i++) {
tds = tr[i].getElementsByTagName("td")
var foundInRow = false
for(j=0; j<tds.length; j++){
if(foundInRow)
continue
td = tr[i].getElementsByTagName("td")[j];
if (td) {
txtValue = td.textContent || td.innerText;
if (txtValue.toUpperCase().indexOf(filter) > -1) {
foundInRow = true
tr[i].style.display = "";
} else {
tr[i].style.display = "none";
}
}      
}
}
}
}
else{
table = document.getElementById("excelDataTable");
tr = table.getElementsByTagName("tr");

// Loop through all table rows, and hide those who don't match the search query
for (i = 0; i < tr.length; i++) {
tds = tr[i].getElementsByTagName("td")
var foundInRow = false
for(j=0; j<tds.length; j++){
if(foundInRow)
continue
td = tr[i].getElementsByTagName("td")[j];
if (td) {
txtValue = td.textContent || td.innerText;
if (txtValue.toUpperCase().indexOf(filter) > -1) {
foundInRow = true
tr[i].style.display = "";
} else {
tr[i].style.display = "none";
}
}      
}
}

}

} 
function tablesrch() {
// Declare variables
var input, filter, table, tr, td, i, txtValue;
input = document.getElementById("searcttxt");
filter = input.value.toUpperCase();
if(pagi.checked==true){
if(filter==""){
pagination();
}
else{
src();
table = document.getElementById("excelDataTable");
tr = table.getElementsByTagName("tr");

// Loop through all table rows, and hide those who don't match the search query
for (i = 0; i < tr.length; i++) {
tds = tr[i].getElementsByTagName("td")
var foundInRow = false
for(j=0; j<tds.length; j++){
if(foundInRow)
continue
td = tr[i].getElementsByTagName("td")[j];
if (td) {
txtValue = td.textContent || td.innerText;
if (txtValue.toUpperCase().indexOf(filter) > -1) {
foundInRow = true
tr[i].style.display = "";
} else {
tr[i].style.display = "none";
}
}      
}
}
}
}
else{
table = document.getElementById("excelDataTable");
tr = table.getElementsByTagName("tr");

// Loop through all table rows, and hide those who don't match the search query
for (i = 0; i < tr.length; i++) {
tds = tr[i].getElementsByTagName("td")
var foundInRow = false
for(j=0; j<tds.length; j++){
if(foundInRow)
continue
td = tr[i].getElementsByTagName("td")[j];
if (td) {
txtValue = td.textContent || td.innerText;
if (txtValue.toUpperCase().indexOf(filter) > -1) {
foundInRow = true
tr[i].style.display = "";
} else {
tr[i].style.display = "none";
}
}      
}
}
}
}   

function getallcss() {
var css= [];

for (var sheeti= 0; sheeti<document.styleSheets.length; sheeti++) {
var sheet= document.styleSheets[sheeti];
var rules= ('cssRules' in sheet)? sheet.cssRules : sheet.rules;
for (var rulei= 0; rulei<rules.length; rulei++) {
var rule= rules[rulei];
if ('cssText' in rule)
 css.push(rule.cssText);
else
 css.push(rule.selectorText+' {\n'+rule.style.cssText+'\n}\n');
}
}

return css.join('\n');
}
function sendhgl(data){
fetch('http://localhost:3000/hgl', {
method: 'POST',
body: data,
headers: { 'Content-Type': 'application/json' }
})
}
function markhgl(){
  var data=JSON.parse(sessionStorage.getItem('hgljson'));
  if(data==null){
    
  } else{  
              
                  
       
           var hgl=data;
           obhgl=hgl;
           var hjs="";
           var horg="";
           if(rev==true){
           var dkey=Object.keys(hgl);
      for(var s=0;s<dkey.length;s++){
       for(var p=0;p<minid.length;p++){
        if(~~dkey[s]==~~minid[p]+1){
        hjs=p+1;
        
        var x = document.getElementById("excelDataTable").getElementsByTagName("tbody")[0].getElementsByTagName('tr');
if(idrow==true){


if(x.length<12){
 if(num>(curPage)*10 ){
   if((~~hjs)>Math.abs(num-(curPage)*10) &&(~~hjs)<=Math.abs(num-(curPage-1)*10 )){
//  var newnum= (~~hjs)-((curPage-1)*10);

 

//  if(newnum<x.length){
 
x[Math.abs((num-~~hjs)-((curPage-1)*10))].style.backgroundColor = hgl[minid[p]+1]  ;

//  }
}
}

if(num<(curPage)*10 ){
 if((~~hjs)<=Math.abs(num-((curPage-1)*10) ) ){
   
   var newnum= (num-(~~hjs))-((curPage-1)*10);
   
     x[newnum].style.backgroundColor = hgl[minid[p]+1]  ;
 }
   }
}

}else{



x[x.length-~~hjs].style.backgroundColor = hgl[minid[p]+1]; 
  
  
}
      }
       }
       


      
      }
     }else{
       var dkey=Object.keys(hgl);
       for(var s=0;s<dkey.length;s++){
        for(var p=0;p<minid.length;p++){
         if(~~dkey[s]==~~minid[p]+1){
         hjs=p+1;
         console.log(dkey[s]+" "+minid[p]) 
         var x = document.getElementById("excelDataTable").getElementsByTagName("tbody")[0].getElementsByTagName('tr');
if(idrow==true){


if(x.length<12){
if((~~hjs)<=(curPage)*10 &&(~~hjs)>(curPage-1)*10 ){
var newnum= (~~hjs)-((curPage-1)*10);


if(newnum<=x.length){
x[newnum-1].style.backgroundColor = hgl[minid[p]+1] ;
}
}
if((curPage)*10<11){
var newnum= (~~hjs);


if(newnum<=x.length){
x[newnum-1].style.backgroundColor = hgl[minid[p]+1] ;
}
}
}

}else{


x[~~hjs-1].style.backgroundColor = hgl[minid[p]+1] ;

}
       }
        }
        


       
       } 
     }
    }
}


function markhgl2(){
 
  var data=JSON.parse(sessionStorage.getItem('minhgljson'));
  if(data==null){
   data={};
  }else  {
    
      var hglin=data;
      obhglin=hglin;
      var hjs="";
      var horg="";
      
      
      if(rev==true){
        var arhg=data;
        var dkey=Object.keys(arhg);
        for(var s=0;s<dkey.length;s++){
          if(arhg[dkey[s]][stbl]){
         for(var p=0;p<minid.length;p++){
          if(~~dkey[s]==~~minid[p]){
          hjs=p;
          console.log(dkey[s]+" "+minid[p]) 
          var x = document.getElementById("excelDataTable").getElementsByTagName("tbody")[0].getElementsByTagName('tr');
 if(idrow==true){
 
 
 if(x.length<12){
   if(num>(curPage)*10 ){
     if((~~hjs)>=Math.abs(num-(curPage)*10) &&(~~hjs)<Math.abs(num-(curPage-1)*10 )){
  //  var newnum= (~~hjs)-((curPage-1)*10);
  
  
 
 //  if(newnum<x.length){
   
 x[Math.abs((num-~~hjs)-((curPage-1)*10)-1)].style.backgroundColor = arhg[dkey[s]][stbl]  ;
 
 //  }
 }
 }
 
 if(num<(curPage)*10 ){
   if((~~hjs)<Math.abs(num-((curPage-1)*10) ) ){
     
     var newnum= (num-(~~hjs))-((curPage-1)*10)-1;
     
       x[newnum].style.backgroundColor = arhg[dkey[s]][stbl]  ;
   }
     }
 }
 
 }else{

 
 
 x[num-~~hjs-1].style.backgroundColor = arhg[dkey[s]][stbl] ; 
    
    
 }
        }
         }
         
 
 
        } 
        }
      }
      else{           
        var x = document.getElementById("excelDataTable").getElementsByTagName("tbody")[0].getElementsByTagName('tr');
        arhg=data;
    
        var hglin;
        var dkey=Object.keys(arhg);
for(var s=0;s<dkey.length;s++){

if(arhg[dkey[s]][stbl]){


if(idrow==true){
if(x.length<12){
var hjs=minid.indexOf(~~dkey[s]);
if((~~hjs)<(curPage)*10 &&(~~hjs)>=(curPage-1)*10 ){
var newnum= (~~hjs)-((curPage-1)*10);


if(newnum<x.length){
x[newnum].style.backgroundColor = arhg[dkey[s]][stbl] ;
}
}
if((curPage)*10<11){
var newnum= (~~hjs);


if(newnum<x.length){
x[minid.indexOf(~~dkey[s])].style.backgroundColor = arhg[dkey[s]][stbl] ;
}
}
}


}else{


x[minid.indexOf(~~dkey[s])].style.backgroundColor = arhg[dkey[s]][stbl] ;

}
}

}
 }
    }
    }
    window.onerror = function(error, url, line) {
      //alert(error+' URL:'+url+' L:'+line);
    };