
var scp=document.createElement('script');scp.innerHTML=sessionStorage.getItem('tmathjs');document.head.appendChild(scp);
//

     var pagi=document.getElementById('slid1');var nextPage=document.getElementById('search');var prevPage=document.getElementById('setting');var glimit=10;function next(){nextPage.click();}
     var revs=document.getElementById('revs');
     var scrolldiv =false;
     var cfit =false;
     var rev=false;
     var revb=false;
     var idrow=false;
     var fst=false;
     var scrc=document.getElementById('scrc');
     var cwb=document.getElementById('cwb');
     function prev(){prevPage.click();}
     function page(){pagi.checked=true;idrow=true;}
     function scd(){scrolldiv=true;cwb.disabled=true;if(pagi.checked==true){fst=true;}pagi.checked=false;idrow=false; srefc();}
     function scdnorm(){scrolldiv=false;cwb.disabled=false;if(pagi.checked==true){fst=true;}pagi.checked=false;idrow=false;srefc();}
     function celfit(){cfit=true;scrc.disabled=true;if(pagi.checked==true){fst=true;}pagi.checked=false;idrow=false;srefc();}
     function celfitnorm(){cfit=false;scrc.disabled=false;if(pagi.checked==true){fst=true;}pagi.checked=false;idrow=false;srefc();}
     function revar(){idrow=false;rev=true;srefc();if(pagi.checked==true){fst=true;}pagi.checked=false;}
     function revnom(){idrow=false;rev=false;if(pagi.checked==true){fst=true;}pagi.checked=false;srefc();}
     function dropsett(){
     document.getElementById("setdrop").classList.toggle("show");
     }
     function limit(val){glimit= val;}
     function hidebar(){document.getElementById('set').style.display='none';}
     function norm(){src();pagi.checked=false;idrow=false;}
     function pagbt(){pagination();pagi.checked=true;idrow=true;}
         var l =[];
         var k=[];
        var foot=true;
         ru();
         scrc.addEventListener('change', function() {
     if(scrc.checked==true){scd();}
     else{scdnorm();}});   
     cwb.addEventListener('change', function() {
     if(cwb.checked==true){celfit();}
     else{celfitnorm();}});   
     revs.addEventListener('change', function() {
       if(revs.checked==true){revar();}
     else{revnom();}});
     var curPage = 1;
     
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
    
     function ru(){
      var data = JSON.parse(sessionStorage.getItem('datajson'));
                var fn = window['mindata']; if(typeof fn === 'function') {data=mindata(data);}else{data=data}
                   
         
                     if (data== "[]" || (typeof data == "object" && data.length == 0)){
    l = null;
    
               
    l=JSON.parse(sessionStorage.getItem('headerjson'));
         
          
                  
                    foot=false;
                    
                    buildHtmlTable(l); 
          
    
       
               
    }
    else{
    l=pivotab(data,mvar(),pvar(),psum());
    }
         
    
           if(pagi.checked == true){
            
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
              
              pagination();
              
      } 
      else{
        idrow=false;
        revs.checked=false;
          rev=false;
          fst=true;
      $('#excelDataTable').html("");
      buildHtmlTable(l); 
      }
      });
       
         }  
     // Builds the HTML Table out of myList.
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
       
     var ar=[];
     var keylist=Object.keys(ll[0]);
     for(var i=0;i<keylist.length;i++){
     for(var j=0;j<ckf().length;j++)  {
     
     
     if(keylist[i]==ckf()[j]['name'] ){
       
     for(var m=0;m<keylist.length;m++){
      
       
     if(keylist[m]==ckf()[j]['frmpl'] || ckf()[j]['frmpl'].includes('\n') ){
     
     var obj={};
     obj['nameidx']=keylist.indexOf(keylist[i].toString());
     if(ckf()[j]['frmpl'].includes('\n')){
     var arsp = ckf()[j]['frmpl'].split("\n");
     var frmar=[];
     var arfr = ckf()[j]['frm'].split("\n");
     var frar=[];
     for(var e=0;e<arsp.length;e++){
     frmar.push(keylist.indexOf(arsp[e].toString()));
     }
     for(var r=0;r<arfr.length;r++){
       frar.push(arfr[r]);
       }
     obj['frmidx']=frmar;
     obj['fm']=frar;
     }
     else{
     obj['frmidx']=keylist.indexOf(keylist[m].toString());
     obj['fm']=ckf()[j]['frm'];
     }
     
     obj['tl']=ckf()[j]['title'];
     
     
     }
     }
     ar.push(obj);
     }
     
     
     
     }
     
     }
     if(ar.length >0){
     
     var table = document.getElementById('excelDataTable').createTFoot();
     
     for(var i=0;i<ar.length;i++){
     var row=table.insertRow(i);
     
     var rown,rowc
     if(!Array.isArray(ar[i]['frmidx'])){
     for(var j=0;j<keylist.length;j++){
     if(j==ar[i]['nameidx']){
     rown=row.insertCell(ar[i]['nameidx']);
     }
     else if(j==ar[i]['frmidx']){
     rowc=row.insertCell(ar[i]['frmidx']);
     }
     
     else{
     var rowr=row.insertCell(j);
     }
     }
     }
     else{
     for(var j=0;j<keylist.length;j++){
     
     if(j==ar[i]['nameidx']){
     row.insertCell(ar[i]['nameidx']).innerHTML=ar[i]['tl'];
     }
     else{
     row.insertCell(j);
     }
     
     
     
     
     }
     }
     
     
     
     if(!Array.isArray(ar[i]['frmidx'])){
     rown.innerHTML = ar[i]['tl'];
     rowc.innerHTML = cal(ar[i]['fm']);
     }
     else{
     for(var p=0;p<ar[i]['frmidx'].length;p++){
     row.cells[~~ar[i]['frmidx'][p]].innerHTML=cal(ar[i]['fm'][p])
     }
     }
     }
     }
     else{
     foot=true;
     }
     
     
     
     
     }
     } 
     var dd=[];
     var trs = document.querySelectorAll("tr");
     
     
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
     function hidefoot(){
      foot=false;
      
      
      
     
      
         }
         window.onerror = function(error, url, line) {
           // alert(error+' URL:'+url+' L:'+line);
         };